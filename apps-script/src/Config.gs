// ===== CONFIGURATION =====
const CONFIG = {
  // Vercel Backend
  VERCEL_API_URL: 'https://your-app.vercel.app/api',
  
  // Firebase
  FIREBASE_PROJECT_ID: 'your-firebase-project-id',
  FIREBASE_API_KEY: 'your-firebase-api-key',
  
  // Google Chat Webhook
  CHAT_WEBHOOK_URL: 'https://chat.googleapis.com/v1/spaces/YOUR_SPACE_ID/messages?key=YOUR_KEY&token=YOUR_TOKEN',
  
  // Settings
  DAYS_TO_KEEP_FILES: 30,
  DAYS_TO_KEEP_EVENTS: 90,
  MAX_EMAILS_PER_RUN: 10,
  TRIGGER_INTERVAL: 15, // minutes
  
  // Timeouts
  FETCH_TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3
};

// ===== LOGGING FUNCTIONS =====
function logInfo(message, data = {}) {
  const log = {
    timestamp: new Date().toISOString(),
    level: 'INFO',
    message: message,
    data: data
  };
  
  Logger.log(`✅ ${message}`, JSON.stringify(data));
  
  // ส่งไป Vercel เพื่อบันทึก
  try {
    sendToVercel('/api/logs/create', log);
  } catch (e) {
    Logger.log('⚠️ Could not send log to Vercel:', e);
  }
}

function logError(message, error = {}) {
  const log = {
    timestamp: new Date().toISOString(),
    level: 'ERROR',
    message: message,
    error: error.toString ? error.toString() : error
  };
  
  Logger.log(`❌ ${message}`, JSON.stringify(error));
  
  try {
    sendToVercel('/api/logs/create', log);
  } catch (e) {
    Logger.log('⚠️ Could not send error log to Vercel:', e);
  }
}

// ===== SEND TO VERCEL =====
function sendToVercel(endpoint, data, retryCount = 0) {
  const url = CONFIG.VERCEL_API_URL + endpoint;
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(data),
    muteHttpExceptions: true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    
    if (response.getResponseCode() === 200) {
      return result;
    } else {
      throw new Error(`HTTP ${response.getResponseCode()}: ${response.getContentText()}`);
    }
  } catch (error) {
    if (retryCount < CONFIG.RETRY_ATTEMPTS) {
      Logger.log(`⚠️ Retry attempt ${retryCount + 1}/${CONFIG.RETRY_ATTEMPTS}`);
      Utilities.sleep(1000 * (retryCount + 1)); // Exponential backoff
      return sendToVercel(endpoint, data, retryCount + 1);
    } else {
      logError(`Failed to send to Vercel after ${CONFIG.RETRY_ATTEMPTS} attempts`, error);
      throw error;
    }
  }
}

// ===== GET SCRIPT PROPERTIES =====
function getScriptProperties() {
  return PropertiesService.getScriptProperties();
}

// ===== SAVE WORKFLOW =====
function saveWorkflow(workflowId, workflow) {
  const props = getScriptProperties();
  const workflows = JSON.parse(props.getProperty('workflows') || '{}');
  workflows[workflowId] = workflow;
  props.setProperty('workflows', JSON.stringify(workflows));
  logInfo('บันทึก Workflow:', { workflowId });
}

// ===== GET WORKFLOW =====
function getWorkflow(workflowId) {
  const props = getScriptProperties();
  const workflows = JSON.parse(props.getProperty('workflows') || '{}');
  return workflows[workflowId];
}

// ===== GET ALL WORKFLOWS =====
function getAllWorkflows() {
  const props = getScriptProperties();
  return JSON.parse(props.getProperty('workflows') || '{}');
}

// ===== DELETE WORKFLOW =====
function deleteWorkflow(workflowId) {
  const props = getScriptProperties();
  const workflows = getAllWorkflows();
  delete workflows[workflowId];
  props.setProperty('workflows', JSON.stringify(workflows));
  logInfo('ลบ Workflow:', { workflowId });
}
