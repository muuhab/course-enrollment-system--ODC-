const StudentStore = require("../models/student");
const store = new StudentStore();
const jwt = require("jsonwebtoken");
const validator = require("validator");
const { errorRes, successRes } = require("../services/response");

const index = async (_req, res) => {
  try {
    const student = await store.index();
    res.status(200).json(successRes(200, student));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const show = async (req, res) => {
  try {
    const student = await store.show(req.params.id);
    res.status(200).json(successRes(200, student));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const create = async (req, res) => {
  const student = {
    student_name: req.body.student_name,
    email: req.body.email,
    student_phone: req.body.student_phone,
    student_address: req.body.student_address,
    college: req.body.college,
    image: req.body.image,
    username: req.body.username,
    password: req.body.password,
  };
  try {
    if (!student.email) throw new Error("email address is missing");
    if (!student.username) throw new Error("username is missing");
    if (!student.password) throw new Error("password is missing");
    if (!student.student_phone) throw new Error("phone number is missing");
    if (!validator.isEmail(student.email))
      throw new Error("email address is not valid ");
    if (student.password.length < 8)
      throw new Error("password must be at least 8 characters ");
    if (!validator.isURL(student.image, []))
      throw new Error("image path is not valid");
    if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(student.student_phone))
      throw new Error("phone number is not valid");

    const newstudent = await store.create(student);
    res.status(201).json(successRes(201, newstudent));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const update = async (req, res) => {
  const student = {
    student_name: req.body.student_name,
    email: req.body.email,
    student_phone: req.body.student_phone,
    student_address: req.body.student_address,
    college: req.body.college,
    image: req.body.image,
  };
  try {
    if (student.email && !validator.isEmail(student.email))
      throw new Error("email address is not valid ");
    if (student.password && student.password.length < 8)
      throw new Error("password must be at least 8 characters ");
    if (student.image && !validator.isURL(student.image, []))
      throw new Error("image path is not valid");
    if (
      student.student_phone &&
      !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(student.student_phone)
    )
      throw new Error("phone number is not valid");

    await store.update(student, req.params.id);
    res.status(200).json(successRes(200, undefined,"Student updated successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const remove = async (req, res) => {
  try {
    await store.delete(req.params.id);
    res.status(200).json(successRes(200, undefined,"Student deleted successfully"));
  } catch (error) {
    res.status(400);
    res.json(errorRes(400, error.message));
  }
};

const authenticate = async (req, res) => {
  const student = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const authedStudent = await store.authenticate(
      student.username,
      student.password
    );
    const token = jwt.sign(
      { authedStudent },
      process.env.TOKEN_SERCRET + authedStudent.username,
      {
        expiresIn: "30m",
      }
    );
    res.json({ username: authedStudent.username, token });
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
  authenticate,
};
