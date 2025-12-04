/**
 * @fileoverview Interacts with the Google Sheets API.
 *
 * This script provides functions for reading from and writing to Google Sheets.
 */

/**
 * An object to interact with the Google Sheets API.
 * @namespace
 */
const SheetsAPI = {
  /**
   * Appends a new row to a specified sheet.
   *
   * @param {string} spreadsheetId The ID of the spreadsheet.
   * @param {string} sheetName The name of the sheet.
   * @param {Array<any>} rowData The data to be appended as a new row.
   */
  appendRow: function(spreadsheetId, sheetName, rowData) {
    try {
      const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
      sheet.appendRow(rowData);
      console.log(`Row appended to sheet '${sheetName}'.`);
    } catch (error) {
      console.error(`Failed to append row to sheet '${sheetName}': ${error.message}`);
    }
  },

  /**
   * Reads data from a specified range in a sheet.
   *
   * @param {string} spreadsheetId The ID of the spreadsheet.
   * @param {string} sheetName The name of the sheet.
   * @param {string} rangeName The range to read from (e.g., "A1:B10").
   * @returns {Array<Array<any>>} The data from the specified range.
   */
  readRange: function(spreadsheetId, sheetName, rangeName) {
    try {
      const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
      const data = sheet.getRange(rangeName).getValues();
      console.log(`Data read from range '${rangeName}' in sheet '${sheetName}'.`);
      return data;
    } catch (error) {
      console.error(`Failed to read range '${rangeName}' from sheet '${sheetName}': ${error.message}`);
      return [];
    }
  }
};
