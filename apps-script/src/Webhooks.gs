/**
 * @fileoverview Handles incoming webhooks from Vercel.
 *
 * This script provides a function to process POST requests sent from a Vercel
 * server. It is the entry point for real-time communication from the backend.
 */

/**
 * Handles HTTP POST requests sent to the Apps Script web app.
 *
 * This function is the primary endpoint for webhooks. It processes the incoming
 * data and triggers the appropriate workflow.
 *
 * @param {Object} e The event object, containing the request parameters.
 * @returns {ContentService.TextOutput} A JSON response indicating the result.
 */
function doPost(e) {
  try {
    // Check if the request has a valid payload.
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Invalid POST data received.");
    }

    // Parse the JSON payload from the request.
    const postData = JSON.parse(e.postData.contents);

    // In a real implementation, you would trigger a workflow based on the postData.
    // For now, this is a placeholder.
    console.log("Received webhook data: " + JSON.stringify(postData));

    // Create a success response.
    const response = {
      status: "success",
      message: "Webhook processed successfully.",
      data: postData,
    };

    // Return the response as a JSON object.
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error for debugging purposes.
    console.error("Error processing webhook: " + error.message);

    // Create an error response.
    const errorResponse = {
      status: "error",
      message: "Failed to process webhook: " + error.message,
    };

    // Return the error response as a JSON object.
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
