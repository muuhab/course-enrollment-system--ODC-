const CategoryStore = require("../models/category");
const store = new CategoryStore();

const index = async (_req, res) => {
  try {
    const course = await store.index();
    res.json(course);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const show = async (req, res) => {
  try {
    const course = await store.show(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const create = async (req, res) => {
  const course = {
    category_name: req.body.category_name,
  };
  try {
    const newcourse = await store.create(course);
    res.json(newcourse);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};
const update = async (req, res) => {
  const course = {
    category_name: req.body.category_name,
  };
  try {
    const newcourse = await store.update(course, req.params.id);
    res.json(newcourse);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const course = await store.delete(req.params.id);
    res.json(course);
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
