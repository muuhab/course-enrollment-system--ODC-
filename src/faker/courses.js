const CourseStore = require("../models/course");
const CategoryStore = require("../models/category");
const store = new CourseStore();
const Catstore = new CategoryStore();
const { faker } = require("@faker-js/faker");

const course_name = faker.name.findName();
const course_level = faker.random.word();

const course = async () => {
  const category = await Catstore.index();
  const category_id = category[Math.floor(Math.random() * category.length)].id;

  await store.create({
    course_name,
    course_level,
    category_id,
  });
};

module.exports = course;
