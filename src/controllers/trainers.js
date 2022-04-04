const TrainerStore = require("../models/trainer");
const store = new TrainerStore();

const index = async (_req, res) => {
  try {
    const trainer = await store.index();
    res.json(trainer);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const show = async (req, res) => {
  try {
    const trainer = await store.show(req.params.id);
    res.json(trainer);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const create = async (req, res) => {
  const trainer = {
    name: req.body.name,
  };
  try {
    const newtrainer = await store.create(trainer);
    res.json(newtrainer);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};
const update = async (req, res) => {
  const trainer = {
    name: req.body.name,
  };
  try {
    const newtrainer = await store.update(trainer, req.params.id);
    res.json(newtrainer);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const trainer = await store.delete(req.params.id);
    res.json(trainer);
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
