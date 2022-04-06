const studentStore = require("../models/student");
const store = new studentStore();
const jwt = require("jsonwebtoken");

const authStudent = async (req, res, next) => {
  try {
    const student = await store.show(req.params.id);
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

module.exports = authStudent;
