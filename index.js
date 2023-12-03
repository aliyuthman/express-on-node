const express = require("express");
const Joi = require("joi");
const log = require("./logger");
const auth = require("./auth");

const helmet = require("helmet")
const morgan = require('morgan')


const port = process.env.PORT || 3000;

const app = express();

// buit-in middleware
app.use(express.json()); //parsing json
app.use(express.urlencoded({ extended: true })); //parsing url key-value params
app.use(express.static("public")); //parsing static files to serve static files from the root of the app


// third-party middleware
app.use(helmet());
app.use(morgan('tiny')) //log request to the console or configure log to a log file


// custom middleware
app.use(log);
app.use(auth);

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
  // define schema for joi validation

  const { error, value } = validateCourse(req.body.name);

  console.log(value);

  if (error) {
    res.status(400).send(error.message);
    // console.log(error.message);

    return;
  }

  // input validation in the backend
  // if (!req.body.name || req.body.length < 3) {
  //   // 400 Bad request

  //   res
  //     .status(400)
  //     .send("Name is required and should be minimum of 3 characters");

  //   return;
  // }

  //this is a hardcoded course object in memory
  const course = {
    id: courses.length + 1,
    name: req.body.name, //here we are assuming that there will be a property called name in the request body. This will be passed during the post request
  };

  courses.push(course);
  res.send(course);
});

// put request

app.put("/api/courses/:id", (req, res) => {
  //look up the course
  // if not existing, return 404
  const params = parseInt(req.params.id);
  const course = courses.find((courseObj) => courseObj.id === params);
  if (!course) {
    res.status(404).send("No course exist with this id: " + params);
    return;
  }

  // validate the course
  // if invalid, return 400 - Bad request

  // const { error, value } = schema.validate({ name: req.body.name });
  const { error, value } = validateCourse(req.body.name);

  if (error) {
    res.status(400).send(error.message);
    // console.log(error.message);

    return;
  }

  //update course
  course.name = req.body.name;
  // return the updated course

  res.send(course);
});

const validateCourse = (course) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });

  return schema.validate({ name: course });
};

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
    return;
  }
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const params = parseInt(req.params.id);

  const course = courses.find((courseObj) => {
    return courseObj.id === params;
  });
  if (!course) {
    res.status(404).send("No course exist with this id: " + params);
    return;
  }

  // deleting course
  /*
  courses = [

    {id: 1, "cours 1"},
    {id: 2, "cours 2"}
    {id: 3, "cours 3"}
  ]
  */
  const index = courses.indexOf(course);
  courses.splice(index, 1);
});

app.listen(port, () => {
  console.log("Server running on " + port);
});
