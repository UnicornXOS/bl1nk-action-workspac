# Apps Script Setup Guide

This guide will walk you through the process of setting up the Google Apps Script project.

## Prerequisites

- A Google Account
- Access to Google Drive, Gmail, Calendar, and Tasks

## Steps

1.  **Create a new Apps Script project:**
    -   Go to [script.google.com](https://script.google.com).
    -   Click on "New project".

2.  **Copy the code:**
    -   Copy the content of all the `.gs` files from the `src` directory into the corresponding files in your new Apps Script project.

3.  **Configure `appsscript.json`:**
    -   In the Apps Script editor, click on "Project Settings" (the gear icon).
    -   Check the box for "Show `appsscript.json` manifest file in editor".
    -   Copy the content of `appsscript.json` from the repository into your project's `appsscript.json`.

4.  **Enable necessary APIs:**
    -   In the editor, go to "Services" and add the following APIs:
        -   Gmail API
        -   Google Calendar API
        -   Google Drive API
        -   Google Tasks API
        -   Google Sheets API
        -   Google Docs API

5.  **Set up authentication:**
    -   Follow the instructions in the `Auth.gs` file to set up OAuth2 for Firebase.

6.  **Deploy the project:**
    -   Click on "Deploy" > "New deployment".
    -   Choose "Web app" as the deployment type.
    -   In the "Who has access" dropdown, select "Anyone".
    -   Click "Deploy".
    -   Authorize the script to access your Google account.
    -   Copy the web app URL for use in your Vercel backend.
