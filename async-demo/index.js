
console.log("Before");

getUser(1, getRepositories);

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repos, displayCommits);
}

const displayCommits = (commits) => {
  // code

  console.log(commits);
};

console.log("After");


function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading database...");

    callback({ id: id, gitHubUsername: "Aliyu" });

    return;
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github API ...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

