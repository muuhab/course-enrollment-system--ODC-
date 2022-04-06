const QuestionStore = require("../models/question");
const store = new QuestionStore();
const {exam_id}= require("./exams")
const { faker } = require("@faker-js/faker");

const question_content = faker.lorem.paragraph(1);
const question_answer = faker.random.word();

const question = async () => {

  await store.create({
    question_content,
    question_answer,
    exam_id,
  });
};

module.exports = question;
