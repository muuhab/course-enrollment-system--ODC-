const RevisionStore = require("../models/revision");
const StudentStore = require("../models/student");
const ExamStore = require("../models/exam");
const store = new RevisionStore();
const StudStore = new StudentStore();
const ExStore = new ExamStore();
const { faker } = require("@faker-js/faker");

const student_degree = faker.datatype.float();
const total_right_degree = faker.datatype.float();
const total_wrong_degree = faker.datatype.float();

const revision = async () => {
  const exam = await ExStore.index();
  const exam_id = exam[Math.floor(Math.random() * exam.length)].id;
  const student = await StudStore.index();
  const student_id = student[Math.floor(Math.random() * student.length)].id;

  await store.create({
    student_degree,
    total_right_degree,
    total_wrong_degree,
    exam_id,
    student_id,
  });
};

module.exports = revision;
