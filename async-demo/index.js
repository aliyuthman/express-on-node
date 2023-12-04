const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Reading database...");

    callback({ id: id, gitHubUsername: "Aliyu" });

    return;
  }, 2000);
};

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github API ...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

console.log("Before");

// Asynchronous - callback hell
getUser(1, function (user) {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos, (commits) => {
      // code
    });
  });
});

console.log("After");

// Synchronous
console.log("Before");
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername)
const commits = getCommits(repos[0]);
console.log("After");
