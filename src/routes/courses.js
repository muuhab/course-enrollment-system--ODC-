const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courses");
const examsController = require("../controllers/exams");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken('sub-admin'), courseController.index);
router.get("/:course_id", verifyAuthToken('sub-admin'), courseController.show);
router.put("/:course_id", verifyAuthToken('sub-admin'), courseController.update);
router.delete("/:course_id", verifyAuthToken('sub-admin'), courseController.remove);
router.post("/", verifyAuthToken('sub-admin'), courseController.create);

router.get("/:course_id/exams/", verifyAuthToken('sub-admin'), examsController.index);
router.post("/:course_id/exams/", verifyAuthToken('sub-admin'), examsController.create);

module.exports = router;
