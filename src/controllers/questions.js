const QuestionStore = require("../models/question");
const { errorRes, successRes } = require("../services/response");
const store = new QuestionStore();

const index = async (_req, res) => {
  try {
    const question = await store.index();
    res.status(200).json(successRes(200, question));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const show = async (req, res) => {
  try {
    const question = await store.show(req.params.id);
    res.status(200).json(successRes(200, question));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const create = async (req, res) => {
  const question = {
    question_content: req.body.question_content,
    question_answer: req.body.question_answer,
    exam_id: req.params.exam_id,
  };
  try {
    if (!question.question_content) throw new Error("question content is missing");
    if (!question.question_answer) throw new Error("question answer is missing");
    await store.create(question);
    res.status(201).json(successRes(201, undefined,"Question created successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};
const update = async (req, res) => {
  const question = {
    question_content: req.body.question_content,
    question_answer: req.body.question_answer,
    exam_id: req.body.exam_id,
  };
  try {
    await store.update(question, req.params.id);
    res.status(200).json(successRes(200, undefined,"Question updated successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const remove = async (req, res) => {
  try {
    await store.delete(req.params.id);
    res.status(200).json(successRes(200, undefined,"Question deleted successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  remove,
};
