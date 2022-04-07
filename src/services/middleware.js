const StudentStore = require("../models/student");
const EnrollStore = require("../models/enroll");
const student_store = new StudentStore();
const enroll_store = new EnrollStore();
const { errorRes } = require("../services/response");

const jwt = require("jsonwebtoken");
const { timeConverter } = require("./helpers");

//admin role authenticate
const verifyAuthToken = (role) => {
  return (req, res, next) => {
    try {
      const authorizationHeader = req.headers.authorization;
      const token = authorizationHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.TOKEN_SERCRET + role);
      next();
    } catch (error) {
      res.status(401);
      res.json(errorRes(401, "Access denied, invalid token"));
      return;
    }
  };
};

//admins auth
const authAdmins = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(" ")[1];
    jwt.verify(
      token,
      process.env.TOKEN_SERCRET + "admin",
      function (err, decoded) {
        if (err) {
          jwt.verify(token, process.env.TOKEN_SERCRET + "sub-admin");
        }
      }
    );

    next();
  } catch (error) {
    res.status(401);
    res.json(errorRes(401, "Access denied, invalid token"));
    return;
  }
};

//single user auth and type of admin role who is in controle too !
const authStudent = (admin = false, subadmin = false) => {
  return async (req, res, next) => {
    try {
      const student = await student_store.show(req.params.id);
      const authorizationHeader = req.headers.authorization;
      const token = authorizationHeader.split(" ")[1];
      jwt.verify(
        token,
        process.env.TOKEN_SERCRET + student.username,
        function (err, decoded) {
          if (err) {
            if ((admin = subadmin === false))
              throw new Error("Access denied, invalid token");
            admin && jwt.verify(token, process.env.TOKEN_SERCRET + "admin");
            subadmin &&
              jwt.verify(token, process.env.TOKEN_SERCRET + "sub-admin");
          }
        }
      );
      next();
    } catch (error) {
      res.status(401);
      res.json(errorRes(401, "Access denied, invalid token"));
      return;
    }
  };
};

//check for the course code
const verifyCode = async (req, res, next) => {
  const code = req.body.code;
  try {
    const enroll = await enroll_store.show(req.params.id);
    if (enroll.code !== code) throw new Error();
    next();
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, "Code is invaild"));
    return;
  }
};

//check for the expiration date of the code before joining
const checkExpires = async (req, res, next) => {
  try {
    const { code_time, expire_after } = await enroll_store.show(req.params.id);
    if (timeConverter(Date.now() - code_time) > expire_after) {
      await enroll_store.removeCode(req.params.id);
      throw new Error(error);
    } else next();
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, "Code expired, please try again"));
    return;
  }
};

// const notAuthed = (req, res, next) => {
//   try {
//     const authorizationHeader = req.headers.authorization;
//     const token = authorizationHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.TOKEN_SERCRET);
//     next();
//   } catch (error) {
//     console.log("asdas");
//     res.status(401);
//     res.json(errorRes(401, "Can't access"));
//     next();
//     return;
//   }
// };

module.exports = {
  authStudent,
  verifyCode,
  checkExpires,
  verifyAuthToken,
  authAdmins,
  // notAuthed,
};
