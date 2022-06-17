const CategoryStore = require("../models/category");
const store = new CategoryStore();
const { successRes, errorRes } = require("../services/response");

const index = async (_req, res) => {
  try {
    const course = await store.index();
    res.status(200).json(successRes(200, course));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const show = async (req, res) => {
  try {
    const course = await store.show(req.params.id);
    res.status(200).json(successRes(200, course));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const create = async (req, res) => {
  const course = {
    category_name: req.body.category_name,
  };
  try {
    if (!course.category_name) throw new Error("category name is missing");

    await store.create(course);
    res.status(201).json(successRes(201, undefined,"Category created successfully."));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};
const update = async (req, res) => {
  const course = {
    category_name: req.body.category_name,
  };
  try {
    await store.update(course, req.params.id);
    res.status(200).json(successRes(200, undefined, "Category updated successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const remove = async (req, res) => {
  try {
    await store.delete(req.params.id);
    res.status(200).json(successRes(200, undefined, "Category deleted successfully"));
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
