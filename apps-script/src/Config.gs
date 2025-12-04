/**
 * @fileoverview General settings for the application.
 *
 * This file contains configuration variables that are used throughout the project.
 * It is important to set these values correctly for the application to function as expected.
 */

/**
 * An object containing configuration settings for the project.
 * @namespace
 */
const CONFIG = {
  /**
   * The URL of the webhook that receives data from Vercel.
   * This should be replaced with the actual webhook URL provided by your Vercel deployment.
   * @type {string}
   */
  VERCEL_WEBHOOK_URL: "https://your-vercel-project.vercel.app/api/webhooks/appsscript",

  /**
   * The ID of the Google Chat space where notifications will be sent.
   * Replace this with the ID of your Google Chat space.
   * @type {string}
   */
  CHAT_SPACE_ID: "spaces/your-chat-space-id",

  /**
   * The name of the Firebase Realtime Database instance.
   * This should be the name of your Firebase project.
   * @type {string}
   */
  FIREBASE_DB_NAME: "your-firebase-project",

  /**
   * The base URL for the Firebase Realtime Database.
   * This is constructed using the FIREBASE_DB_NAME.
   * @type {string}
   */
  FIREBASE_DB_URL: "https://your-firebase-project.firebaseio.com/",

  /**
   * The name of the sheet used for logging.
   * If you want to log information to a Google Sheet, specify the name here.
   * @type {string}
   */
  LOG_SHEET_NAME: "Logs",

  /**
   * The email address of the administrator.
   * This email will receive error notifications and other important alerts.
   * @type {string}
   */
  ADMIN_EMAIL: "admin@example.com",
};

/**
 * A function to retrieve a configuration value by key.
 *
 * @param {string} key The key of the configuration value to retrieve.
 * @returns {any} The value of the configuration setting.
 * @throws {Error} If the key is not found in the configuration.
 */
function getConfig(key) {
  if (key in CONFIG) {
    return CONFIG[key];
  } else {
    throw new Error("Configuration key not found: " + key);
  }
}
