const CourseStore = require("../models/course");
const store = new CourseStore();
const { course_id } = require("./categories");
const { faker } = require("@faker-js/faker");

const course_name = faker.name.findName();
const course_level = faker.random.word();

let coursee;
const course = async () => {
  coursee = await store.create({
    course_name,
    course_level,
    category_id: course_id,
  });
};

module.exports = { course, course_id: coursee?.id };
