const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/courseDB");
};

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

const Student = mongoose.model("student", student);

const Course = mongoose.model("Course", courseSchema);

//Saving a document
const createCourse = async () => {
  const result = await course.save();

  console.log(result);
};
const getCourses = async () => {
  const pageNumber = 2;
  const pageSize = 10;
  //usually these are to come from url query like /api/courses?pageNumber=2&pageSize=1
  //to do pagination we use skip() method
  const courses = await Course.find({ author: /^Aliyu/ })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .count();

  console.log(courses);
};

const getStudents = async () => {
  const students = await Student.find();

  console.log(students);
};

getCourses();
getStudents();

connect()
  .then(async (connection) => {
    const student = await Student.create({ firstName: "Aliyu" });
  })
  .catch((e) => console.error(e));
