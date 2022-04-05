const express = require("express");
const categories = require("./categories");
const courses = require("./courses");
const exams = require("./exams");
const questions = require("./questions");
const revisions = require("./revisions");
const students = require("./students");
const trainers = require("./trainers");
const admins = require("./admins");

const router = express.Router();

router.use("/api/categories", categories);
router.use("/api/courses", courses);
// router.use("/api/exams", exams);
router.use("/api/questions", questions);
router.use("/api/revisions", revisions);
router.use("/api/students", students);
router.use("/api/trainers", trainers);
router.use("/api/admins", admins);

module.exports = router;
