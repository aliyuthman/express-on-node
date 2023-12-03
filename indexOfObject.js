const courses = [
  { id: 1, name: "cours 1" },
  { id: 2, name: "cours 2" },
  { id: 3, name: "cours 3" },
];

// console.log(courses)

courses.forEach((course) => {
  if (course.id === 3) {
    const index = courses.indexOf(course);
    console.log(index);

    console.log(courses.splice(index, 1));
    return;
  }

  console.log("No such course");
});
