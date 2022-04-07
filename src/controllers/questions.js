const QuestionStore = require("../models/question");
const store = new QuestionStore();

const index = async (_req, res) => {
  try {
    const question = await store.index();
    res.status(200).json(successRes(200, question));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const show = async (req, res) => {
  try {
    const question = await store.show(req.params.id);
    res.status(200).json(successRes(200, question));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  const question = {
    question_content: req.body.question_content,
    question_answer: req.body.question_answer,
    exam_id: req.body.exam_id,
  };
  try {
    const newquestion = await store.create(question);
    res.status(201).json(successRes(201, newquestion));
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};
const update = async (req, res) => {
  const question = {
    question_content: req.body.question_content,
    question_answer: req.body.question_answer,
    exam_id: req.body.exam_id,
  };
  try {
    const newquestion = await store.update(question, req.params.id);
    res.status(200).json(successRes(200, newquestion));
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const question = await store.delete(req.params.id);
    res.status(200).json(successRes(200, question));
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
