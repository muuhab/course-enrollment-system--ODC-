const StudentStore = require("../models/student");
const store = new StudentStore();
const { faker } = require("@faker-js/faker");

const student_name = faker.name.findName(); // Rowan Nikolaus
const email = faker.internet.email(); // Rowan Nikolaus
const student_phone = faker.phone.phoneNumber(); // Rowan Nikolaus
const student_address = faker.address.city(); // Rowan Nikolaus
const college = faker.company.companyName(); // Rowan Nikolaus
const image = faker.image.avatar(); // Rowan Ni   kolaus
const stud = async () => {
  await store.create({
    student_name,
    email,
    student_phone,
    student_address,
    college,
    image,
  });
};

module.exports = stud;
