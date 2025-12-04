/**
 * @fileoverview Interacts with the Google Tasks API.
 *
 * This script provides functions for creating, updating, and managing tasks and
 * task lists in Google Tasks.
 */

/**
 * An object to interact with the Google Tasks API.
 * @namespace
 */
const TasksAPI = {
  /**
   * Creates a new task in a specified task list.
   *
   * @param {string} taskListId The ID of the task list.
   * @param {string} title The title of the new task.
   * @param {string} notes A description or notes for the task.
   * @returns {Object} The newly created task object.
   */
  createTask: function(taskListId, title, notes) {
    try {
      const task = Tasks.Tasks.insert({
        title: title,
        notes: notes
      }, taskListId);
      console.log(`Task '${title}' created successfully.`);
      return task;
    } catch (error) {
      console.error(`Failed to create task '${title}': ${error.message}`);
      return null;
    }
  },

  /**
   * Retrieves all task lists.
   *
   * @returns {Array<Object>} An array of task list objects.
   */
  getTaskLists: function() {
    try {
      const taskLists = Tasks.Tasklists.list().getItems();
      console.log(`Retrieved ${taskLists.length} task lists.`);
      return taskLists;
    } catch (error) {
      console.error("Failed to retrieve task lists: " + error.message);
      return [];
    }
  }
};
