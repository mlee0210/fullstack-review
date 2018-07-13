const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('../helpers/github.js');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

//app.use(bodyParser.json());


// bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to
// use a simple algorithm for shallow parsing (i.e. false) or 
// use a complex algorithm for deep parsing that can deal with nested objects (i.e. true)
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next) => {
  console.log(req.method, req.path);
  next();
})

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.username);
 
  //console.log('handling post request in server/index.js');

  helpers.getReposByUsername();

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

