const AdminStore = require("../models/admin");
const jwt = require("jsonwebtoken");
const { successRes, errorRes } = require("../services/response");

const store = new AdminStore();

const index = async (_req, res) => {
  try {
    const admins = await store.index();
    res.status(200).json(successRes(200,admins));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const show = async (req, res) => {
  try {
    const admin = await store.show(req.params.id);
    if (admin === undefined)
      res.status(404).json(errorRes(404, "Admin not found"));
    res.status(200).json(successRes(200, admin));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  const admin = {
    role: req.body.role,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
  };
  try {
    const newAdmin = await store.create(admin);
    const token = jwt.sign(
      { user: newAdmin },
      process.env.TOKEN_SERCRET + admin.role
    );
    res
      .status(201)
      .json(successRes(201, { username: admin.username, token: token }));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};
const update = async (req, res) => {
  const admin = {
    role: req.body.role,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
  };
  try {
    const adminn = await store.update(admin, req.params.id);
    res.json(successRes(200, adminn));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const admin = await store.delete(req.params.id);
    if (admin === undefined)
      res.status(404).json(errorRes(404, "Admin not found"));
    res.json(admin);
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const authenticate = async (req, res) => {
  const admin = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const adminn = await store.authenticate(admin.username, admin.password);
    if (adminn === null)
      res.status(404).json({ message: "Invaild username or password" });
    else {
      const token = jwt.sign(
        { adminn },
        process.env.TOKEN_SERCRET + adminn.role
        // ,
        // {
        //   expiresIn: "30m",
        // }
      );
      res.json(successRes(200, { username: adminn.username, token }));
    }
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
  authenticate,
};
