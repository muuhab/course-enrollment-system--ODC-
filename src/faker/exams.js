const ExamStore = require("../models/exam");
const store = new ExamStore();
const { course_id } = require("./courses");

let examm;

const exam = async () => {
  examm = await store.create(course_id);
};

module.exports = { exam, exam_id: examm?.id };
