const functions = require("firebase-functions");

exports.onWorkflowCreate = functions.firestore
  .document("workflows/{workflowId}")
  .onCreate((snap, context) => {
    const newValue = snap.data();
    console.log("New workflow created:", newValue);
    // Add logic here, e.g., send a notification
    return null;
  });
