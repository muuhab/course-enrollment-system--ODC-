const ExamStore = require("../models/exam");
const store = new ExamStore();

const index = async (req, res) => {
  try {
    const exam = await store.index(req.params.course_id);
    res.json(exam);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const show = async (req, res) => {

  try {
    const exam = await store.show(req.params.exam_id,req.params.course_id);
    res.json(exam);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const create = async (req, res) => {
  try {
    const newexam = await store.create(req.params.course_id);
    res.json(newexam);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const update = async (req, res) => {

  try {
    const newexam = await store.update(req.params.course_id, req.params.exam_id);
    res.json(newexam);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const exam = await store.delete(req.params.exam_id);
    res.json(exam);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};


module.exports = {
  index,
  show,
  create,
  update,
  remove,
};
