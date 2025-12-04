/**
 * @fileoverview Manages time-based and event-driven triggers.
 *
 * This script provides functions to create, delete, and manage triggers that
 * automate the execution of workflows.
 */

/**
 * An object to manage script triggers.
 * @namespace
 */
const TriggerManager = {
  /**
   * Creates a time-based trigger that runs a specified function on a schedule.
   *
   * @param {string} functionName The name of the function to be triggered.
   * @param {number} minutes The interval in minutes for the trigger to run.
   * @returns {Trigger} The newly created trigger object.
   * @throws {Error} If the trigger creation fails.
   */
  createTimeBasedTrigger: function(functionName, minutes) {
    try {
      // Check if a trigger for this function already exists.
      this.deleteTrigger(functionName);

      // Create a new time-based trigger.
      const trigger = ScriptApp.newTrigger(functionName)
        .timeBased()
        .everyMinutes(minutes)
        .create();

      console.log(`Trigger created for ${functionName} to run every ${minutes} minutes.`);
      return trigger;
    } catch (error) {
      console.error(`Failed to create time-based trigger for ${functionName}: ${error.message}`);
      throw new Error("Could not create time-based trigger.");
    }
  },

  /**
   * Deletes all triggers associated with a specific function.
   *
   * @param {string} functionName The name of the function whose triggers should be deleted.
   */
  deleteTrigger: function(functionName) {
    const triggers = ScriptApp.getProjectTriggers();
    for (const trigger of triggers) {
      if (trigger.getHandlerFunction() === functionName) {
        ScriptApp.deleteTrigger(trigger);
        console.log(`Deleted trigger for ${functionName}.`);
      }
    }
  },

  /**
   * Sets up all the necessary triggers for the application.
   *
   * This function should be run once during the initial setup to create all
   * the required triggers.
   */
  setupTriggers: function() {
    console.log("Setting up application triggers...");
    // Example: Create a trigger to sync data every 15 minutes.
    // this.createTimeBasedTrigger("syncDataWorkflow", 15);

    // Add other trigger setups here.

    console.log("Triggers set up successfully.");
  }
};
