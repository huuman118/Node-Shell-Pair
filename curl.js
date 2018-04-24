var request = require('request');
module.exports = function(address) {
  request(address, function (error, response, body) {
    if (error) {
      throw error; // Print the error if one occurred
    } else {
      process.stdout.write(response.toString()); // Print the response status code if a response was received
      process.stdout.write(body.toString()); // Print the HTML for the Google homepage.
    }
  });
}
