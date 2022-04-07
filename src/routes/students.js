const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/students");
const enrollsController = require("../controllers/enrolls");
const examsController = require("../controllers/exams");
const revisionController = require("../controllers/revisions");
const {authStudent, verifyCode, checkExpires, authAdmins,notAuthed} = require("../services/middleware");

router.get("/", authAdmins, studentsController.index);
router.get("/:id", authStudent(true,true),  studentsController.show);
router.put("/:id", authStudent(), studentsController.update);
router.delete("/:id", authAdmins, studentsController.remove);
router.post("/",notAuthed, studentsController.create);
router.post("/auth", studentsController.authenticate);

router.post("/:id/enroll/:course_id", authStudent(), enrollsController.create);
router.get("/:id/enroll/:course_id", authStudent(), enrollsController.show);
router.put("/:id/enroll/:course_id/genrate_code", authStudent(), enrollsController.genrateCode);
router.get("/:id/enroll/:course_id/verify_code",checkExpires, authStudent(),verifyCode,examsController.enterExam );
router.get("/:id/enroll/submit",authStudent(),revisionController.submitExam );
router.get("/:id/enroll/status",authStudent(),enrollsController.viewStatus );


module.exports = router;
