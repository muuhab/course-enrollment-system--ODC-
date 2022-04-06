const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/students");
const enrollsController = require("../controllers/enrolls");
const examsController = require("../controllers/exams");
const verifyAuthToken = require("../services/auth");
const {authStudent, verifyCode, checkExpires} = require("../services/middleware");

router.get("/", verifyAuthToken, studentsController.index);
router.get("/:id", authStudent,  studentsController.show);
router.put("/:id", authStudent, studentsController.update);
router.delete("/:id", verifyAuthToken, studentsController.remove);
router.post("/", studentsController.create);
router.post("/auth", studentsController.authenticate);
router.post("/:id/enroll/:course_id", authStudent, enrollsController.create);
router.get("/:id/enroll/:course_id", authStudent, enrollsController.show);
router.put("/:id/enroll/:course_id/genrate_code", authStudent, enrollsController.genrateCode);
router.get("/:id/enroll/:course_id/verify_code",checkExpires, authStudent,verifyCode,examsController.enterExam );


module.exports = router;
