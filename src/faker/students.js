const StudentStore = require("../models/student");
const store = new StudentStore();
const { faker } = require("@faker-js/faker");

const student_name = faker.name.findName(); 
const username = faker.name.firstName(); 
const email = faker.internet.email(); 
const student_phone = faker.phone.phoneNumber(); 
const student_address = faker.address.city(); 
const college = faker.company.companyName(); 
const image = faker.image.avatar(); 

const student = async () => {
  await store.create({
    student_name,
    email,
    student_phone,
    student_address,
    college,
    image,
    username
  });
};

module.exports = student;
