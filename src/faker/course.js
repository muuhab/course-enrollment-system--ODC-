const CourseStore = require("../models/course");
const store = new CourseStore();
const { faker } = require("@faker-js/faker");
const cat = require("../models/cat");

const course_name = faker.name.findName(); // Rowan Nikolaus
const course_level = faker.random.word(); // Rowan Nikolaus
// const category_id = faker; // Rowan Nikolaus
const student_address = faker.address.city(); // Rowan Nikolaus
const college = faker.company.companyName(); // Rowan Nikolaus
const image = faker.image.avatar(); // Rowan Ni   kolaus
const stud = async () => {
  await store.create({
    image,
  });
};

module.exports = stud;
