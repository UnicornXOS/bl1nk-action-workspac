/**
 * @fileoverview Provides utility and helper functions.
 *
 * This script contains various helper functions that are used across the
 * project to perform common tasks, such as date formatting and data validation.
 */

/**
 * An object containing utility functions.
 * @namespace
 */
const Utils = {
  /**
   * Formats a Date object into a string (e.g., "yyyy-MM-dd HH:mm:ss").
   *
   * @param {Date} date The Date object to be formatted.
   * @returns {string} The formatted date string.
   */
  formatDate: function(date) {
    if (!date || !(date instanceof Date)) {
      return "";
    }
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },

  /**
   * Generates a random alphanumeric string of a given length.
   *
   * @param {number} length The desired length of the string.
   * @returns {string} The randomly generated string.
   */
  generateRandomString: function(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};
