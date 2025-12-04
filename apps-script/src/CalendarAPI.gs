/**
 * @fileoverview Interacts with the Google Calendar API.
 *
 * This script provides functions for creating, updating, and managing events
 * in Google Calendar.
 */

/**
 * An object to interact with the Google Calendar API.
 * @namespace
 */
const CalendarAPI = {
  /**
   * Creates a new event in the user's primary calendar.
   *
   * @param {string} title The title of the event.
   * @param {Date} startTime The start time of the event.
   * @param {Date} endTime The end time of the event.
   * @param {Object} options Additional options for the event (e.g., guests, description).
   * @returns {Object} The newly created calendar event.
   */
  createEvent: function(title, startTime, endTime, options) {
    try {
      const event = CalendarApp.getDefaultCalendar().createEvent(title, startTime, endTime, options);
      console.log(`Event '${title}' created successfully.`);
      return event;
    } catch (error) {
      console.error(`Failed to create event '${title}': ${error.message}`);
      return null;
    }
  },

  /**
   * Retrieves events from the primary calendar within a specified time range.
   *
   * @param {Date} startTime The start of the time range.
   * @param {Date} endTime The end of the time range.
   * @returns {Array<Object>} An array of calendar events.
   */
  getEvents: function(startTime, endTime) {
    try {
      const events = CalendarApp.getDefaultCalendar().getEvents(startTime, endTime);
      console.log(`Retrieved ${events.length} events.`);
      return events;
    } catch (error) {
      console.error("Failed to retrieve events: " + error.message);
      return [];
    }
  }
};
