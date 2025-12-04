// ===== WEBHOOK HANDLER =====
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    logInfo('Webhook received:', { action });
    
    switch(action) {
      case 'create_workflow':
        return handleCreateWorkflow(data);
      
      case 'update_workflow':
        return handleUpdateWorkflow(data);
      
      case 'delete_workflow':
        return handleDeleteWorkflow(data);
      
      case 'execute_workflow':
        return handleExecuteWorkflow(data);
      
      case 'setup_triggers':
        return handleSetupTriggers(data);
      
      case 'test_connection':
        return handleTestConnection();
      
      default:
        return createResponse({ error: 'Unknown action' }, 400);
    }
  } catch (error) {
    logError('Webhook error:', error);
    return createResponse({ error: error.toString() }, 500);
  }
}

// ===== CREATE WORKFLOW =====
function handleCreateWorkflow(data) {
  try {
    const { workflowId, workflow } = data;
    
    saveWorkflow(workflowId, workflow);
    
    logInfo('Workflow created:', { workflowId, type: workflow.type });
    
    return createResponse({
      success: true,
      message: 'Workflow created successfully',
      workflowId: workflowId
    });
  } catch (error) {
    logError('Error creating workflow:', error);
    return createResponse({ error: error.toString() }, 500);
  }
}

// ===== UPDATE WORKFLOW =====
function handleUpdateWorkflow(data) {
  try {
    const { workflowId, workflow } = data;
    
    saveWorkflow(workflowId, workflow);
    
    logInfo('Workflow updated:', { workflowId });
    
    return createResponse({
      success: true,
      message: 'Workflow updated successfully'
    });
  } catch (error) {
    logError('Error updating workflow:', error);
    return createResponse({ error: error.toString() }, 500);
  }
}

// ===== DELETE WORKFLOW =====
function handleDeleteWorkflow(data) {
  try {
    const { workflowId } = data;
    
    deleteWorkflow(workflowId);
    
    logInfo('Workflow deleted:', { workflowId });
    
    return createResponse({
      success: true,
      message: 'Workflow deleted successfully'
    });
  } catch (error) {
    logError('Error deleting workflow:', error);
    return createResponse({ error: error.toString() }, 500);
  }
}

// ===== EXECUTE WORKFLOW =====
function handleExecuteWorkflow(data) {
  try {
    const { workflowId, triggerData } = data;
    
    const workflow = getWorkflow(workflowId);
    
    if (!workflow) {
      return createResponse({ error: 'Workflow not found' }, 404);
    }
    
    // Execute workflow (จะเรียก executeWorkflow จาก Workflows.gs)
    executeWorkflow(workflowId, triggerData);
    
    logInfo('Workflow execution started:', { workflowId });
    
    return createResponse({
      success: true,
      message: 'Workflow execution started'
    });
  } catch (error) {
    logError('Error executing workflow:', error);
    return createResponse({ error: error.toString() }, 500);
  }
}

// ===== SETUP TRIGGERS =====
function handleSetupTriggers(data) {
  try {
    setupTriggers();
    
    logInfo('Triggers setup completed');
    
    return createResponse({
      success: true,
      message: 'Triggers setup completed'
    });
  } catch (error) {
    logError('Error setting up triggers:', error);
    return createResponse({ error: error.toString() }, 500);
  }
}

// ===== TEST CONNECTION =====
function handleTestConnection() {
  try {
    return createResponse({
      success: true,
      message: 'Connection successful',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logError('Connection test failed:', error);
    return createResponse({ error: error.toString() }, 500);
  }
}

// ===== CREATE RESPONSE =====
function createResponse(data, statusCode = 200) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
