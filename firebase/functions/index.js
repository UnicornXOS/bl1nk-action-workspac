const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Export functions from other files
exports.workflows = require("./src/workflows");
exports.tasks = require("./src/tasks");
exports.emails = require("./src/emails");
exports.notifications = require("./src/notifications");
