const CourseStore = require("../models/course");
const store = new CourseStore();

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
    course_name: req.body.course_name,
    course_level: req.body.course_level,
    category_id: req.body.category_id,
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
    course_name: req.body.course_name,
    course_level: req.body.course_level,
    category_id: req.body.category_id,
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
