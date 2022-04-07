const EnrollStore = require("../models/enroll");
const store = new EnrollStore();
const { makeid } = require("../services/helpers");
const { errorRes, successRes } = require("../services/response");

const index = async (_req, res) => {
  try {
    const enrolls = await store.index();
    res.status(200).json(successRes(200, enrolls));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const show = async (req, res) => {
  try {
    const enroll = await store.show(req.params.id);
    res.status(200).json(successRes(200, enroll));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  const enroll = {
    student_id: req.body.student_id,
    course_id: req.body.course_id,
  };
  try {
    if (!enroll.student_id) throw new Error("student id is missing");
    if (!enroll.course_id) throw new Error("course id is missing");

    const newenroll = await store.create(enroll);
    res.status(201).json(successRes(201, newenroll));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};
const update = async (req, res) => {
  const enroll = {
    course_id: req.body.course_id,
    status: req.body.status,
  };
  try {
    const newenroll = await store.update(enroll, req.params.id);
    res.status(200).json(successRes(200, newenroll));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const enroll = await store.delete(req.params.id);
    res.status(200).json(successRes(200, enroll));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const genrateCode = async (req, res) => {
  const code = makeid(5);
  try {
    const newenroll = await store.genrateCode(code, req.params.id);
    res.status(200).json(successRes(200, newenroll));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const changeExpiresHours = async (req, res) => {
  const hours = req.params.hours;
  try {
    if(hours<=0 && !hours) throw new Error("number of hours is missing");
    const newenroll = await store.changeExpiresHours(req.params.id, hours);
    res.status(200).json(successRes(200, newenroll));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const viewStatus = async (req, res) => {
  try {
    const enroll = await store.viewStatus(req.params.id);
    res.status(200).json(successRes(200, enroll));
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
  genrateCode,
  changeExpiresHours,
  viewStatus,
};
