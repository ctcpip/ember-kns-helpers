/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "PhantomJS",
    "Chrome",
    "Firefox"
  ],
  "launch_in_dev": [
  ]
};
