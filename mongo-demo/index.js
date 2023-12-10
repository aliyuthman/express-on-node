const mongoose = require("mongoose");

//Real app require you load the connection string from environment variables and also use debug package instead of console.log

//Databse create connection and connect type 1:
// mongoose
//   .connect("mongodb://localhost:27017/playground")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB...", err));

// Database connection type 2:

/*
========= instance of mongoose connection =======================
*/

const connect = () => {
  // protocol host name

  return mongoose.connect("mongodb://localhost/xbs");

  //   mongoose.connect() return a promise
};

/*
========= Schema - making a schema =======================
*/

// After mongoose connection, the next thing to do is creating your schema
const student = new mongoose.Schema({
  firstName: String,
});

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  // date: Date
  date: { type: Date, default: Date.now }, //default value type of date,
  isPublished: Boolean,
});

/*====================================

Schema types in mongoose:

1. String
2. Number
3. Date
4. Buffer - this is used for storing binary data
5. Boolean
6. ObjectID - this is used to assign unique ID
7. Array

+======================================
*/

/*
========= Model - making a model for the schema =======================


Schema  and Model

Schema can be seen as a blueprint and Model as the actual object. This is similar for classes and instance of a class - object in OOP
*/

// convert a schema to a model where the model will be use to create collections. In this case the schema is compiled to a class to create object instances. This object in mongodb will be mapped to a document 
const Student = mongoose.model("student", student);

const Course = mongoose.model("Course", courseSchema);
const course = new Course({
  name: "Node.js Course",
  author: "Aliyu Usman",
  tags: ["node", "backend", "mongoose", "mongodb"],
  isPublished: true
});


//Saving a document

const createCourse = async () => {
  const result = await course.save() //placed the await inside async function. object.save() returns a promise thus need to be wrap inside async func.

  console.log(result)
}


createCourse()


//connect to the database
// Database connection type 2:

/*
========= Database connection - droping data into the model and pushing to the db=
*/
connect()
  .then(async (connection) => {
    const student = await Student.create({ firstName: "Aliyu" });

    console.log(student);
  })
  .catch((e) => console.error(e));
