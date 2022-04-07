const TrainerStore = require("../models/trainer");
const { errorRes, successRes } = require("../services/response");
const store = new TrainerStore();

const index = async (_req, res) => {
  try {
    const trainer = await store.index();
    res.status(200).json(successRes(200, trainer));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const show = async (req, res) => {
  try {
    const trainer = await store.show(req.params.id);
    res.status(200).json(successRes(200, trainer));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  const trainer = {
    name: req.body.name,
  };
  try {
    if (!trainer.name) throw new Error("trainer name is missing");
    const newtrainer = await store.create(trainer);
    res.status(201).json(successRes(201, newtrainer));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};
const update = async (req, res) => {
  const trainer = {
    name: req.body.name,
  };
  try {
    const newtrainer = await store.update(trainer, req.params.id);
    res.status(200).json(successRes(200, newtrainer));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const trainer = await store.delete(req.params.id);
    res.status(200).json(successRes(200, trainer));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const assignToCourse = async (req, res) => {
  try {
    if(!req.body.course_id) throw new Error("course id is missing")
    const trainer = await store.assignToCourse(id, req.body.course_id);
    res.status(200).json(successRes(200, trainer));
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
  assignToCourse
};
