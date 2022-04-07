const RevisionStore = require("../models/revision");
const { errorRes, successRes } = require("../services/response");
const store = new RevisionStore();

const index = async (_req, res) => {
  try {
    const revision = await store.index();
    res.status(200).json(successRes(200, revision));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const show = async (req, res) => {
  try {
    const revision = await store.show(req.params.id);
    res.status(200).json(successRes(200, revision));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const create = async (req, res) => {
  const revision = {
    student_degree: req.body.student_degree,
    total_right_degree: req.body.total_right_degree,
    total_wrong_degree: req.body.total_wrong_degree,
    exam_id: req.body.exam_id,
    student_id: req.body.student_id,
  };
  try {
    if (!revision.student_degree) throw new Error("student_degree is missing");
    if (!revision.total_right_degree) throw new Error("total_right_degree is missing");
    if (!revision.total_wrong_degree) throw new Error("total_wrong_degree is missing");
    if (isNaN(revision.student_degree)) throw new Error("student's degree must be a number");
    if (isNaN(revision.total_right_degree)) throw new Error("total right degree must be a number");
    if (isNaN(revision.total_wrong_degree)) throw new Error("total wrong degree must be a number");
    const newrevision = await store.create(revision);
    res.status(201).json(successRes(201, newrevision));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};
const update = async (req, res) => {
  const revision = {
    student_degree: req.body.student_degree,
    total_right_degree: req.body.total_right_degree,
    total_wrong_degree: req.body.total_wrong_degree,
    exam_id: req.body.exam_id,
    student_id: req.body.student_id,
  };
  try {
    const newrevision = await store.update(revision, req.params.id);
    res.status(200).json(successRes(200, newrevision));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const revision = await store.delete(req.params.id);
    res.status(200).json(successRes(200, revision));
  } catch (error) {
    res.status(404);
    res.json(errorRes(404, error.message));
  }
};

const submitExam = async (req, res) => {
   const degree = {
      student_degree: req.body.student_degree,
      total_right_degree: req.body.total_right_degree,
      total_wrong_degree: req.body.total_wrong_degree,
    };
    try {
      const revision = await store.submitExam(req.params.id,degree);
      res.status(200).json(successRes(200, revision));
    } catch (error) {
      res.status(404);
      res.json(errorRes(404, error.message));
    }
}

module.exports = {
  index,
  show,
  create,
  update,
  remove,
  submitExam
};
