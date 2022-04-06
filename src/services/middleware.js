const StudentStore = require("../models/student");
const EnrollStore = require("../models/enroll");
const student_store = new StudentStore();
const enroll_store = new EnrollStore();
const jwt = require("jsonwebtoken");
const { timeConverter } = require("./helpers");

const authStudent = async (req, res, next) => {
  try {
    const student = await student_store.show(req.params.id);
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SERCRET, function (err, decoded) {
      if (err) {
        jwt.verify(token, process.env.TOKEN_SERCRET + student.username);
      }
    });

    next();
  } catch (error) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }
};

const verifyCode = async (req, res, next) => {
  const code = req.body.code;
  try {
    const enroll = await enroll_store.show(req.params.id);
    if (enroll.code !== code) throw new Error(error);
    next()
  } catch (error) {
    res.status(401);
    res.json("Access denied, invalid code");
    return;
  }
};

const checkExpires = async (req, res, next) => {
  try {
    const { code_time, expire_after } = await enroll_store.show(req.params.id);
    if (timeConverter(Date.now() - code_time) > expire_after) {
      await enroll_store.removeCode(req.params.id);
      throw new Error(error);
    } else next();
  } catch (error) {
    res.status(404);
    res.json("Code expired, please try again");
    return;
  }
};

module.exports = { authStudent, verifyCode, checkExpires };
