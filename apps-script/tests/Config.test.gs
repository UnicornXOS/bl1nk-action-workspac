/**
 * @fileoverview Tests for the Config.gs script.
 */

/**
 * Runs all tests for the Config script.
 */
function testConfig() {
  console.log("Running tests for Config.gs...");

  // Test case 1: Test if a valid config key returns the correct value.
  const test1Result = (getConfig("ADMIN_EMAIL") === "admin@example.com");
  console.log("Test 1 - Get valid config key: " + (test1Result ? "Passed" : "Failed"));

  // Test case 2: Test if an invalid config key throws an error.
  let test2Result = false;
  try {
    getConfig("INVALID_KEY");
  } catch (e) {
    test2Result = true;
  }
  console.log("Test 2 - Get invalid config key: " + (test2Result ? "Passed" : "Failed"));

  console.log("Tests for Config.gs complete.");
}
