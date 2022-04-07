const CourseStore = require("../models/course");
const store = new CourseStore();

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
    const course = await store.show(req.params.course_id);
    res.status(200).json(successRes(200, course));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  const course = {
    course_name: req.body.course_name,
    course_level: req.body.course_level,
    category_id: req.body.category_id,
  };
  try {
    const newcourse = await store.create(course);
    res.status(201).json(successRes(201, newcourse));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};
const update = async (req, res) => {
  const course = {
    course_name: req.body.course_name,
    course_level: req.body.course_level,
    category_id: req.body.category_id,
  };
  try {
    const newcourse = await store.update(course, req.params.course_id);
    res.status(200).json(successRes(200, newcourse));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const course = await store.delete(req.params.course_id);
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
