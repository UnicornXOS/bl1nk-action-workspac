const functions = require("firebase-functions");

exports.sendNotification = functions.https.onCall((data, context) => {
  const { userId, message } = data;
  console.log(`Sending notification to ${userId}: ${message}`);
  // Add logic here to send a notification
  return { status: "success", message: "Notification sent" };
});
