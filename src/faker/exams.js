const ExamStore = require("../models/exam");
const CourseStore = require("../models/course");
const store = new ExamStore();
const courseStore = new CourseStore();

const exam = async () => {
  const course = await courseStore.index();
  const course_id = course[Math.floor(Math.random() * course.length)].id;
  
  await store.create({
    course_id,
  });
};

module.exports = exam;
