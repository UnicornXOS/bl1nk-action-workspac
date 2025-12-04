// ===== WORKFLOWS MANAGEMENT =====

function getAllWorkflows() {
  const props = getScriptProperties();
  const workflows = JSON.parse(props.getProperty('workflows') || '{}');
  return workflows;
}

function getWorkflow(workflowId) {
  const workflows = getAllWorkflows();
  return workflows[workflowId];
}

function saveWorkflow(workflowId, workflow) {
  const props = getScriptProperties();
  const workflows = getAllWorkflows();
  workflows[workflowId] = workflow;
  props.setProperty('workflows', JSON.stringify(workflows));
  logInfo('บันทึก Workflow:', { workflowId });
}

function executeWorkflow(workflowId, triggerData) {
  const workflow = getWorkflow(workflowId);
  
  if (!workflow || !workflow.enabled) {
    logInfo('Workflow ถูก disable:', { workflowId });
    return;
  }
  
  logInfo('เริ่มทำงาน Workflow:', { workflowId, type: workflow.type });
  
  try {
    switch(workflow.type) {
      case 'email_to_task':
        handleEmailToTask(workflow, triggerData);
        break;
      case 'email_to_calendar':
        handleEmailToCalendar(workflow, triggerData);
        break;
      case 'calendar_sync':
        handleCalendarSync(workflow);
        break;
      case 'task_sync':
        handleTaskSync(workflow);
        break;
      case 'drive_organize':
        handleDriveOrganize(workflow);
        break;
      default:
        logError('Unknown workflow type:', { type: workflow.type });
    }
    
    // บันทึกลง Firebase
    sendToVercel('/workflows/execute', {
      workflowId,
      status: 'success',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logError('Workflow execution failed:', { workflowId, error: error.toString() });
    
    sendToVercel('/workflows/execute', {
      workflowId,
      status: 'error',
      error: error.toString(),
      timestamp: new Date().toISOString()
    });
  }
}

function handleEmailToTask(workflow, triggerData) {
  // ตรวจสอบอีเมล → สร้าง Task
  const threads = GmailApp.search(workflow.triggers.emailFilter || 'is:unread', 0, CONFIG.MAX_EMAILS_PER_RUN);
  
  threads.forEach(thread => {
    const message = thread.getMessages()[0];
    
    // สร้าง Task
    const taskListId = Tasks.Tasklists.list().items[0].id;
    const task = {
      title: message.getSubject(),
      notes: message.getPlainBody().substring(0, 500),
      due: new Date(Date.now() + 24*60*60*1000).toISOString().split('T')[0],
      status: 'needsAction'
    };
    
    const createdTask = Tasks.Tasks.insert(task, taskListId);
    
    // บันทึกลง Firebase
    sendToVercel('/tasks/create', {
      title: task.title,
      notes: task.notes,
      googleTaskId: createdTask.id,
      workflowId: workflow.id,
      source: 'email',
      sourceEmail: message.getFrom()
    });
    
    thread.markRead();
    logInfo('สร้าง Task จากอีเมล:', { subject: message.getSubject() });
  });
}

function handleEmailToCalendar(workflow, triggerData) {
  // ตรวจสอบอีเมล → สร้าง Calendar Event
  const threads = GmailApp.search(workflow.triggers.emailFilter || 'is:unread', 0, CONFIG.MAX_EMAILS_PER_RUN);
  const calendar = CalendarApp.getDefaultCalendar();
  
  threads.forEach(thread => {
    const message = thread.getMessages()[0];
    const subject = message.getSubject();
    const body = message.getPlainBody();
    
    // แยกเวลาจากอีเมล
    const timeMatch = body.match(/(\d{1,2}):(\d{2})/);
    let startTime = new Date();
    
    if (timeMatch) {
      startTime.setHours(parseInt(timeMatch[1]), parseInt(timeMatch[2]));
    } else {
      startTime.setHours(14, 0);
    }
    
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 1);
    
    // สร้าง Event
    const event = calendar.createEvent(subject, startTime, endTime, {
      description: body.substring(0, 500),
      guests: message.getFrom()
    });
    
    // บันทึกลง Firebase
    sendToVercel('/events/create', {
      title: subject,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      googleEventId: event.getId(),
      workflowId: workflow.id,
      source: 'email',
      sourceEmail: message.getFrom()
    });
    
    thread.markRead();
    logInfo('สร้าง Event จากอีเมล:', { subject });
  });
}

function handleCalendarSync(workflow) {
  // ซิงค์ Calendar ไป Firebase
  const calendar = CalendarApp.getDefaultCalendar();
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24*60*60*1000);
  
  const events = calendar.getEvents(now, tomorrow);
  
  events.forEach(event => {
    sendToVercel('/events/sync', {
      title: event.getTitle(),
      startTime: event.getStartTime().toISOString(),
      endTime: event.getEndTime().toISOString(),
      description: event.getDescription(),
      googleEventId: event.getId(),
      workflowId: workflow.id
    });
  });
  
  logInfo('ซิงค์ Calendar:', { eventCount: events.length });
}

function handleTaskSync(workflow) {
  // ซิงค์ Tasks ไป Firebase
  const taskLists = Tasks.Tasklists.list().items;
  
  taskLists.forEach(taskList => {
    const tasks = Tasks.Tasks.list(taskList.id, {
      showCompleted: false,
      maxResults: 100
    }).items;
    
    if (tasks) {
      tasks.forEach(task => {
        sendToVercel('/tasks/sync', {
          title: task.title,
          notes: task.notes,
          due: task.due,
          status: task.status,
          googleTaskId: task.id,
          workflowId: workflow.id
        });
      });
    }
  });
  
  logInfo('ซิงค์ Tasks:', { workflowId: workflow.id });
}

function handleDriveOrganize(workflow) {
  // จัดระเบียบไฟล์ใน Drive
  const sourceFolder = DriveApp.getFoldersByName(workflow.triggers.sourceFolder).next();
  const files = sourceFolder.getFiles();
  
  const categories = workflow.actions.categories || {};
  
  while (files.hasNext()) {
    const file = files.next();
    const fileName = file.getName();
    const fileType = fileName.split('.').pop().toUpperCase();
    
    const destinationPath = categories[fileType];
    if (!destinationPath) continue;
    
    // สร้างโฟลเดอร์ปลายทาง
    const pathParts = destinationPath.split('/');
    let currentFolder = sourceFolder;
    
    pathParts.forEach(folderName => {
      const folders = currentFolder.getFoldersByName(folderName);
      currentFolder = folders.hasNext() ? folders.next() : currentFolder.createFolder(folderName);
    });
    
    // ย้ายไฟล์
    currentFolder.addFile(file);
    sourceFolder.removeFile(file);
    
    logInfo('ย้ายไฟล์:', { fileName, destination: destinationPath });
  }
}
