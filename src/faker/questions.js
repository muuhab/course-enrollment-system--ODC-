const QuestionStore = require("../models/question");
const ExamCategory = require("../models/exam");
const store = new QuestionStore();
const ExamStore = new ExamCategory();
const { faker } = require("@faker-js/faker");

const question_content = faker.lorem.paragraph(1);
const question_answer = faker.random.word();

const question = async () => {
  const exam = await ExamStore.index();
  const exam_id = exam[Math.floor(Math.random() * exam.length)].id;
  
  await store.create({
    question_content,
    question_answer,
    exam_id,
  });
};

module.exports = question;
