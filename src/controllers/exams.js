const ExamStore = require("../models/exam");
const store = new ExamStore();

const index = async (_req, res) => {
  try {
    const exam = await store.index();
    res.json(exam);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const show = async (req, res) => {
  try {
    const exam = await store.show(req.params.id);
    res.json(exam);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const create = async (req, res) => {
  const exam = {
    course_id: req.body.course_id,
  };
  try {
    const newexam = await store.create(exam);
    res.json(newexam);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};
const update = async (req, res) => {
  const exam = {
    course_id: req.body.course_id,
  };
  try {
    const newexam = await store.update(exam, req.params.id);
    res.json(newexam);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const exam = await store.delete(req.params.id);
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
