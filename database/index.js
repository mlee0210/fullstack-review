const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  full_name: String,
  url: String,
  description: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, repo) => {
  // if(err) { 
  //   console.log('err ',err);
  // } else {
  //   repo.save((err) => {
  //     if(err) {
  //     	console.log('err', err);
  //     } else {
  //     	console.log('saved to db');
  //     }
  //   })
  // }
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to db');
});

module.exports.save = save;