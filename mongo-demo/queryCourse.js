const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/course-with-price");
};

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  isPublished: Boolean,
  price: Number,
  publishedDate: Date,
});

const Course = mongoose.model("Course", courseSchema);

const getCourses = async () => {
  return await Course
    // courses with 15 dollar or more
    .find({ isPublished: true })
    .or([{ price: { $gte: 29 }, name: /.*accessibility.*/i }])
    // .sort("-price")
    .sort({
      price: -1,
    })
    // .select('name author')
    .select({ name: 1, author: 1, price: 1 });
};

const run = async () => {
  const allCourses = await getCourses();

  console.log(allCourses);
};

run();
connect();
