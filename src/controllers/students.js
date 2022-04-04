const StudentStore = require("../models/student");
const store = new StudentStore();

const index = async (_req, res) => {
  try {
    const student = await store.index();
    res.json(student);
  } catch (error) {
    res.status(404);
    res.json(error);
  }
};

const show = async (req, res) => {
  try {
    const student = await store.show(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(404);
    res.json(error);
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
  };
  try {
    const newstudent = await store.create(student);
    res.json(newstudent);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
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
    const newstudent = await store.update(student, req.params.id);
    res.json(newstudent);
  } catch (error) {
    res.status(404);
    res.json(`${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const student = await store.delete(req.params.id);
    res.json(student);
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
