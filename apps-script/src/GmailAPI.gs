/**
 * @fileoverview Interacts with the Gmail API.
 *
 * This script provides functions for reading, processing, and managing emails
 * in Gmail. It serves as a wrapper for the GmailApp service.
 */

/**
 * An object to interact with the Gmail API.
 * @namespace
 */
const GmailAPI = {
  /**
   * Retrieves the most recent emails from the inbox.
   *
   * @param {number} count The number of recent emails to retrieve.
   * @returns {Array<Object>} An array of Gmail thread objects.
   */
  getRecentEmails: function(count) {
    try {
      const threads = GmailApp.getInboxThreads(0, count);
      console.log(`Retrieved ${threads.length} recent email threads.`);
      return threads;
    } catch (error) {
      console.error("Failed to retrieve recent emails: " + error.message);
      return [];
    }
  },

  /**
   * Sends an email.
   *
   * @param {string} recipient The email address of the recipient.
   * @param {string} subject The subject of the email.
   * @param {string} body The body of the email.
   */
  sendEmail: function(recipient, subject, body) {
    try {
      GmailApp.sendEmail(recipient, subject, body);
      console.log(`Email sent to ${recipient}.`);
    } catch (error) {
      console.error(`Failed to send email to ${recipient}: ${error.message}`);
    }
  }
};
