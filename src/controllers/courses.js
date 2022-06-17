const CourseStore = require("../models/course");
const { successRes, errorRes } = require("../services/response");
const store = new CourseStore();

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
    const course = await store.show(req.params.course_id);
    res.status(200).json(successRes(200, course));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const create = async (req, res) => {
  const course = {
    course_name: req.body.course_name,
    course_level: req.body.course_level,
    category_id: req.body.category_id,
  };
  try {
    if (!course.course_name) throw new Error("course name is missing");
    if (!course.course_level) throw new Error("course level is missing");
    if (!course.category_id) throw new Error("category id is missing");
    
    await store.create(course);
    res.status(201).json(successRes(201, undefined,"Course created successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};
const update = async (req, res) => {
  const course = {
    course_name: req.body.course_name,
    course_level: req.body.course_level,
    category_id: req.body.category_id,
  };
  try {
    await store.update(course, req.params.course_id);
    res.status(200).json(successRes(200, undefined,"Course updated successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const remove = async (req, res) => {
  try {
    await store.delete(req.params.course_id);
    res.status(200).json(successRes(200, undefined,"Course deleted successfully"));
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
