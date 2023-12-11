const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect("mongodb://localhost:27017/mongo-exercises");
};

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

const getCourses = async () => {
  return await Course.find({ isPublished: true, tags: /.*Figma.*/ })
    .sort({ name: 1 })
    // .select({ name: 1, author: 1 });
};

const run = async () => {
  const courses = await getCourses();
  console.log("Hello first");
  console.log(courses);
};

run();

connect();
