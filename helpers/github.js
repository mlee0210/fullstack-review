const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  console.log('inside getReposByUsername');
  console.log('username: ', username);
/*
You can use the github api for this. Hitting https://api.github.com/users/username/repos 
will list that user's public repositories  
*/   
  let options = {
    url: 'https://api.github.com/users/${username}/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    let json = JSON.parse(body);
    console.log(json);
  })

}

module.exports.getReposByUsername = getReposByUsername;