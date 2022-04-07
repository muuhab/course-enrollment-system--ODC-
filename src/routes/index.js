const express = require("express");
const categories = require("./categories");
const courses = require("./courses");
const enrolls = require("./enrolls");
const questions = require("./questions");
const revisions = require("./revisions");
const students = require("./students");
const trainers = require("./trainers");
const admins = require("./admins");
const exams = require("./exams");

const router = express.Router();

router.use("/api/categories", categories);
router.use("/api/courses", courses);
router.use("/api/enrolls", enrolls);
router.use("/api/questions", questions);
router.use("/api/revisions", revisions);
router.use("/api/students", students);
router.use("/api/trainers", trainers);
router.use("/api/admins", admins);
router.use("/api/exams", exams);

module.exports = router;
