/**
 * @fileoverview Interacts with the Google Docs API.
 *
 * This script provides functions for creating and manipulating Google Docs.
 */

/**
 * An object to interact with the Google Docs API.
 * @namespace
 */
const DocsAPI = {
  /**
   * Creates a new Google Doc with the specified content.
   *
   * @param {string} title The title of the new document.
   * @param {string} body The content to be added to the document's body.
   * @returns {Object} The newly created document object.
   */
  createDocument: function(title, body) {
    try {
      const doc = DocumentApp.create(title);
      doc.getBody().appendParagraph(body);
      doc.saveAndClose();
      console.log(`Document '${title}' created successfully.`);
      return doc;
    } catch (error) {
      console.error(`Failed to create document '${title}': ${error.message}`);
      return null;
    }
  },

  /**
   * Reads the content of a Google Doc.
   *
   * @param {string} documentId The ID of the document.
   * @returns {string} The text content of the document.
   */
  readDocument: function(documentId) {
    try {
      const doc = DocumentApp.openById(documentId);
      const text = doc.getBody().getText();
      console.log(`Content read from document ID '${documentId}'.`);
      return text;
    } catch (error) {
      console.error(`Failed to read document ID '${documentId}': ${error.message}`);
      return "";
    }
  }
};
