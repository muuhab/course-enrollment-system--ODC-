const EnrollStore = require("../models/enroll");
const store = new EnrollStore();

const index = async (_req, res) => {
  try {
    const enrolls = await store.index();
    res.json(enrolls);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const show = async (req, res) => {
  try {
    const enroll = await store.show(req.params.id);
    res.json(enroll);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const create = async (req, res) => {
  const enroll = {
    student_id: req.body.student_id,
    course_id: req.body.course_id,
  };
  try {
    const newenroll = await store.create(enroll);
    res.json(newenroll);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};
const update = async (req, res) => {
  const enroll = {
    course_id: req.body.course_id,
    status: req.body.status,
  };
  try {
    const newenroll = await store.update(enroll, req.params.id);
    res.json(newenroll);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const enroll = await store.delete(req.params.id);
    res.json(enroll);
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
