const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())

//for practice this is stored in memory, usually we are to get this from database

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello, node installed ");
});

//get all courses
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// posting to collection of courses thus, we are using plural
app.post("/api/courses", (req, res) => {
  //this is a hardcoded course object in memory
  const course = {
    id: courses.length + 1,
    name: req.body.name, //here we are assuming that there will be a property called name in the request body. This will be passed during the post request
  };

  courses.push(course)
  res.send(course)
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
