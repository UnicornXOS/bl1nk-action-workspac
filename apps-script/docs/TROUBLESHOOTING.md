# Apps Script Troubleshooting Guide

This guide provides solutions to common problems you might encounter with the Apps Script project.

## Common Issues

### "Authorization is required" error

-   **Cause:** The script has not been authorized to access your Google account data.
-   **Solution:**
    -   Run any function in the script manually from the Apps Script editor.
    -   A dialog box will appear asking for authorization.
    -   Follow the prompts to grant the necessary permissions.

### "API call to gmail failed with error: User Rate Limit Exceeded"

-   **Cause:** The script is making too many API calls in a short period.
-   **Solution:**
    -   Review your triggers and workflows to ensure they are not running too frequently.
    -   Implement caching using `CacheService` to reduce the number of API calls.
    -   Add `Utilities.sleep()` to introduce delays between API calls.

### Webhook is not working

-   **Cause:** The web app URL is incorrect or the deployment is not configured correctly.
-   **Solution:**
    -   Ensure the web app is deployed with "Who has access" set to "Anyone".
    -   Verify that the web app URL in your Vercel backend matches the one provided by Apps Script.
    -   Check the execution logs in the Apps Script editor for any errors.
