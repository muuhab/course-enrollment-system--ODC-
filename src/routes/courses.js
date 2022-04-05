const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courses");
const examsController = require("../controllers/exams");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, courseController.index);
router.get("/:course_id", verifyAuthToken, courseController.show);
router.put("/:course_id", verifyAuthToken, courseController.update);
router.delete("/:course_id", verifyAuthToken, courseController.remove);
router.post("/", verifyAuthToken, courseController.create);

router.get("/:course_id/exams/", verifyAuthToken, examsController.index);
router.get("/:course_id/exams/:exam_id", verifyAuthToken, examsController.show);
router.put("/:course_id/exams/:exam_id", verifyAuthToken, examsController.update);
router.delete("/:course_id/exams/:exam_id", verifyAuthToken, examsController.remove);
router.post("/:course_id/exams/", verifyAuthToken, examsController.create);

module.exports = router;
