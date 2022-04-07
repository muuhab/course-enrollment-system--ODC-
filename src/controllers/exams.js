const ExamStore = require("../models/exam");
const store = new ExamStore();

const index = async (req, res) => {
  try {
    const exam = await store.index(req.params.course_id);
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const show = async (req, res) => {
  try {
    const exam = await store.show(req.params.exam_id, req.params.course_id);
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  try {
    const newexam = await store.create(req.params.course_id);
    res.status(201).json(successRes(201, newexam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const update = async (req, res) => {
  try {
    const newexam = await store.update(
      req.params.course_id,
      req.params.exam_id
    );
    res.status(200).json(successRes(200, newexam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const exam = await store.delete(req.params.exam_id);
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const enterExam = async (req, res) => {
  const course_id = req.params.course_id;
  try {
    const exams = await store.index(course_id);
    const exam_id = exams[Math.floor(Math.random() * exams.length)].id;
    const exam = await store.show(exam_id, course_id);
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  remove,
  enterExam,
};
