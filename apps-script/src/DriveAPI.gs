/**
 * @fileoverview Interacts with the Google Drive API.
 *
 * This script provides functions for managing files and folders in Google Drive.
 */

/**
 * An object to interact with the Google Drive API.
 * @namespace
 */
const DriveAPI = {
  /**
   * Creates a new folder in Google Drive.
   *
   * @param {string} folderName The name of the new folder.
   * @returns {Object} The newly created folder object.
   */
  createFolder: function(folderName) {
    try {
      const folder = DriveApp.createFolder(folderName);
      console.log(`Folder '${folderName}' created successfully.`);
      return folder;
    } catch (error) {
      console.error(`Failed to create folder '${folderName}': ${error.message}`);
      return null;
    }
  },

  /**
   * Finds files in Google Drive by name.
   *
   * @param {string} fileName The name of the file to search for.
   * @returns {Array<Object>} An array of file objects.
   */
  findFilesByName: function(fileName) {
    try {
      const files = DriveApp.getFilesByName(fileName);
      const fileList = [];
      while (files.hasNext()) {
        fileList.push(files.next());
      }
      console.log(`Found ${fileList.length} files with the name '${fileName}'.`);
      return fileList;
    } catch (error) {
      console.error(`Failed to find files by name '${fileName}': ${error.message}`);
      return [];
    }
  }
};
