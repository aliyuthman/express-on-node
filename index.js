const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

//for practice this is stored in memory, usually we are to get this from database

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello, node installed ");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//route paramaters vs query param
app.get("/api/courses/:urlParams", (req, res) => {
  // write a logic to find the course with the given id/params
  const params = parseInt(req.params.urlParams);

  // (courseObj) => courseObj.id === params
  const course = courses.find((courseObj) => {
    return courseObj.id === params;
  });
  if (!course) {
    res.status(404).send("No course exist with this id: " + params);
  }
  res.send(course);
});

app.listen(port, () => {
  console.log("Server running on " + port);
});
