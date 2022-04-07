const CategoryStore = require("../models/category");
const store = new CategoryStore();
const { successRes, errorRes } = require("../services/response");

const index = async (_req, res) => {
  try {
    const course = await store.index();
    res.status(200).json(successRes(200, course));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const show = async (req, res) => {
  try {
    const course = await store.show(req.params.id);
    res.status(200).json(successRes(200, course));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  const course = {
    category_name: req.body.category_name,
  };
  try {
    if (!course.category_name) throw new Error("category name is missing");

    const newcourse = await store.create(course);
    res.status(201).json(successRes(201, newcourse));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};
const update = async (req, res) => {
  const course = {
    category_name: req.body.category_name,
  };
  try {
    const newcourse = await store.update(course, req.params.id);
    res.status(200).json(successRes(200, newcourse));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const course = await store.delete(req.params.id);
    res.status(200).json(successRes(200, course));
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
};
