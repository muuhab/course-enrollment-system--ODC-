const RevisionStore = require("../models/revision");
const {exam_id}= require("./exams")
const {student_id} = require("./students")
const store = new RevisionStore();
const { faker } = require("@faker-js/faker");

const student_degree = faker.datatype.float();
const total_right_degree = faker.datatype.float();
const total_wrong_degree = faker.datatype.float();

const revision = async () => {
  await store.create({
    student_degree,
    total_right_degree,
    total_wrong_degree,
    exam_id,
    student_id,
  });
};

module.exports = revision;
