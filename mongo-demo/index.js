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





/*
========= Model - making a model for the schema =======================
*/


// convert a schema to a model where the model will be use to create collections
const Student = mongoose.model("student", student);

//connect to the database
// Database connection type 2:


/*
========= Database connection - droping data into the model and pushing to the db=
*/
connect()
  .then(async (connection) => {
    const student = await Student.create({ firstName: "Aliyu" });

    console.log(student)
  })
  .catch((e) => console.error(e));
