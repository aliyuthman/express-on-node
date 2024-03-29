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

/*
Updating a doc in mongodb

Approach 1: Query-first (common to most frameworks e.g Django)

1. findById()
2. Modify its properties
3. save()

Approach 2: Update-first

1. Update directly without retrieving it first as in Approach 1
2. Optionally: get updated document



Note: this approach is useful if you recieve input
from a client and want to make sure that the update is 
a valid operation.


*/

const updateCourse = async (id) => {
  const course = await Course.findById(id);
  if (!course) return;

  course.isPublished = true;
  course.author = "Turabi Aliyu";

//   course.set({
//     isPublished: true,
//     author: "Turabi Aiyu",
//   });


const result = await course.save()

console.log(result)
};

updateCourse('65771860a206253324f93182');

run();
connect();
