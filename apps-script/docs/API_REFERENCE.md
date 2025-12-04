# Apps Script API Reference

This document provides a reference for the functions available in the Apps Script project.

## `Config.gs`

### `getConfig(key)`

-   **Description:** Retrieves a configuration value by key.
-   **Parameters:**
    -   `key` (string): The key of the configuration value to retrieve.
-   **Returns:** (any) The value of the configuration setting.

## `Workflows.gs`

### `createTaskFromEmail(emailSubject, emailBody, taskListId)`

-   **Description:** Converts an email into a task in Google Tasks.
-   **Parameters:**
    -   `emailSubject` (string): The subject of the email.
    -   `emailBody` (string): The body of the email.
    -   `taskListId` (string): The ID of the task list.
-   **Returns:** (Object) The newly created task object.

## `GmailAPI.gs`

### `getRecentEmails(count)`

-   **Description:** Retrieves the most recent emails from the inbox.
-   **Parameters:**
    -   `count` (number): The number of recent emails to retrieve.
-   **Returns:** (Array<Object>) An array of Gmail thread objects.

### `sendEmail(recipient, subject, body)`

-   **Description:** Sends an email.
-   **Parameters:**
    -   `recipient` (string): The email address of the recipient.
    -   `subject` (string): The subject of the email.
    -   `body` (string): The body of the email.
