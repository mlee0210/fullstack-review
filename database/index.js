const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to db');
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  html_url: String,
  description: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (reposInString) => {
  //save the relevant data from the GitHub API in the mongo database.
  
  let repoObj = {};
  console.log('repos', reposInString);
  let repos = JSON.parse(reposInString);

  console.log('repos.length', repos.length);

  for (let i = 0; i < repos.length; i++) {
    repoObj.id = repos[i].id;
    repoObj.name = repos[i].name;
    repoObj.html_url = repos[i].html_url;
    repoObj.description = repos[i].description;
    repoObj.forks = repos[i].forks;

    //now that repoObj contains info, we need to pass it into the db
    let newRepo = new Repo(repoObj);
    newRepo.save((err) => {
      if(err) {
        console.log('Could not save to db');
      } else {
        console.log('Saved to db');
      }
    });
  }
  
}

//sort by highest number of forks
let sortRepos = (callback) => {

  Repo.find((err, results) => {
    if(err) {
      console.log(err);
    } else {
      console.log('found Repos');
      callback(results);
    }
  })
  .limit(25)
  .sort({'forks': -1});
}


module.exports.save = save;
module.exports.sortRepos = sortRepos;
















