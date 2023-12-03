const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

//for practice this is stored in memory, usually we are to get this from database

const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
]

app.get("/", (req, res) => {
  res.send("Hello, node installed ");
});

app.get("/api/courses", (req, res) => {

    res.json({message: "Hello, courses"})
})

//route paramaters vs query param
app.get("/api/courses/:urlParams", (req, res) => {

  const params = req.params.urlParams

  res.json({message: "Hello, URL Paramer is: " + params})
})

app.listen(port, () => {
  console.log("Server running on " + port);
});
