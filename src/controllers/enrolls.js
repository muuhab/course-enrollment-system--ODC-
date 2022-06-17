const EnrollStore = require("../models/enroll");
const store = new EnrollStore();
const { makeid, sendMail } = require("../services/helpers");
const { errorRes, successRes } = require("../services/response");

const index = async (_req, res) => {
  try {
    const enrolls = await store.index();
    res.status(200).json(successRes(200, enrolls));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const show = async (req, res) => {
  try {
    const enroll = await store.show(req.params.id);
    res.status(200).json(successRes(200, enroll));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const showSingle = async (req, res) => {
  try {
    const enroll = await store.showSingle(req.params.id);
    res.status(200).json(successRes(200, enroll));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const create = async (req, res) => {
  const enroll = {
    student_id: req.params.id,
    course_id: req.params.course_id,
  };
  try {
    await store.create(enroll);
    res
      .status(201)
      .json(successRes(201, undefined, "Enroll created successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};
const update = async (req, res) => {
  try {
    await store.update(req.body.status, req.params.id);
    res
      .status(200)
      .json(successRes(200, undefined, "Enroll updated successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const remove = async (req, res) => {
  try {
    await store.delete(req.params.id);
    res
      .status(200)
      .json(successRes(200, undefined, "Enroll deleted successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const genrateCode = async (req, res) => {
  const code = makeid(5);
  try {
    const {expire_after,email} = await store.genrateCode(code, req.params.id);
    console.log(email)
    sendMail(
      "Exam code",
      `Your Exam Verification Code is ${code}
      Please note that it will expire after ${expire_after} hours.
      `,
      email
    );
    res
      .status(200)
      .json(successRes(200, undefined, "Code is sent to your email address."));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const changeExpiresHours = async (req, res) => {
  const hours = req.body.hours;
  try {
    if (!hours) throw new Error("number of hours is missing ");
    if (hours <= 0) throw new Error("wrong format for hours ");
    const newenroll = await store.changeExpiresHours(req.params.id, hours);
    res.status(200).json(successRes(200, newenroll));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const viewStatus = async (req, res) => {
  try {
    const enroll = await store.viewStatus(req.params.id);
    res.status(200).json(successRes(200, enroll));
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
  genrateCode,
  changeExpiresHours,
  viewStatus,
  showSingle,
};
