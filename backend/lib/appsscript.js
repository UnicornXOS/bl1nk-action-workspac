// Functions for interacting with the Google Apps Script web app.

export const executeAppsScriptWorkflow = async (workflowName, payload) => {
  const webhookUrl = process.env.APPS_SCRIPT_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("APPS_SCRIPT_WEBHOOK_URL is not defined.");
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ workflowName, payload }),
  });

  return response.json();
};
