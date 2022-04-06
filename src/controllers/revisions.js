const RevisionStore = require("../models/revision");
const store = new RevisionStore();

const index = async (_req, res) => {
  try {
    const revision = await store.index();
    res.json(revision);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const show = async (req, res) => {
  try {
    const revision = await store.show(req.params.id);
    res.json(revision);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const create = async (req, res) => {
  const revision = {
    student_degree: req.body.student_degree,
    total_right_degree: req.body.total_right_degree,
    total_wrong_degree: req.body.total_wrong_degree,
    exam_id: req.body.exam_id,
    student_id: req.body.student_id,
  };
  try {
    const newrevision = await store.create(revision);
    res.json(newrevision);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};
const update = async (req, res) => {
  const revision = {
    student_degree: req.body.student_degree,
    total_right_degree: req.body.total_right_degree,
    total_wrong_degree: req.body.total_wrong_degree,
    exam_id: req.body.exam_id,
    student_id: req.body.student_id,
  };
  try {
    const newrevision = await store.update(revision, req.params.id);
    res.json(newrevision);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const revision = await store.delete(req.params.id);
    res.json(revision);
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
