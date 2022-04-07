const ExamStore = require("../models/exam");
const EnrollStore = require("../models/enroll");
const { errorRes, successRes } = require("../services/response");
const store = new ExamStore();
const enroll_store = new EnrollStore();

const indexExams = async (req, res) => {
  try {
    const exam = await store.indexExams();
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const indexOneExams = async (req, res) => {
  try {
    const exam = await store.indexOneExams(req.params.exam_id);
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

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
    const exam = await store.show(req.params.id);
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  try {
    const newexam = await store.create(req.body.course_id);
    res.status(201).json(successRes(201, newexam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const update = async (req, res) => {
  try {
    const newexam = await store.update(req.body.course_id, req.params.id);
    res.status(200).json(successRes(200, newexam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const exam = await store.delete(req.params.id);
    res.status(200).json(successRes(200, exam));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const enterExam = async (req, res) => {
  const student_id = req.params.id;
  try {
    const courseID = await enroll_store.show(student_id);
    const exams = await store.index(courseID.id);
    const exam_id = exams[Math.floor(Math.random() * exams.length)].id;
    const exam = await store.show(exam_id, courseID.id);
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
  indexExams,
  indexOneExams,
};
