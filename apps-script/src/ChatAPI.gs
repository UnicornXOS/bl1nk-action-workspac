/**
 * @fileoverview Interacts with the Google Chat API to send notifications.
 *
 * This script provides functions for sending messages to a Google Chat space.
 */

/**
 * An object to interact with the Google Chat API.
 * @namespace
 */
const ChatAPI = {
  /**
   * Sends a message to a specified Google Chat space.
   *
   * @param {string} spaceId The ID of the Google Chat space.
   * @param {string} message The message to be sent.
   */
  sendMessage: function(spaceId, message) {
    try {
      const url = `https://chat.googleapis.com/v1/${spaceId}/messages`;
      const options = {
        method: 'post',
        contentType: 'application/json; charset=UTF-8',
        headers: {
          Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
        },
        payload: JSON.stringify({ text: message })
      };
      UrlFetchApp.fetch(url, options);
      console.log(`Message sent to space ${spaceId}.`);
    } catch (error) {
      console.error(`Failed to send message to space ${spaceId}: ${error.message}`);
    }
  }
};
