const functions = require("firebase-functions");

exports.processEmail = functions.https.onCall((data, context) => {
  const { emailId } = data;
  console.log("Processing email with ID:", emailId);
  // Add logic here to process the email
  return { status: "success", message: "Email processed" };
});
