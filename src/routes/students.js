const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/students");
const enrollsController = require("../controllers/enrolls");
const examsController = require("../controllers/exams");
const revisionController = require("../controllers/revisions");
const {authStudent, verifyCode, checkExpires, authAdmins, verifyAuthToken} = require("../services/middleware");

router.get("/", authAdmins, studentsController.index);
router.get("/:id", authStudent(true,true),  studentsController.show);
router.put("/:id", authStudent(), studentsController.update);
router.delete("/:id", authStudent(true,true), studentsController.remove);
router.post("/", studentsController.create);
router.post("/auth", studentsController.authenticate);

router.post("/:id/enroll/:course_id", authStudent(), enrollsController.create);
router.get("/:id/enroll/", authStudent(), enrollsController.show);
router.put("/:id/enroll/get_code", authStudent(), enrollsController.genrateCode);
router.get("/:id/enroll/verify_code",checkExpires, authStudent(),verifyCode,examsController.enterExam );
router.get("/:id/enroll/submit",authStudent(),revisionController.submitExam );

//students check for their enrollment status
router.get("/:id/enroll/status",authStudent(),enrollsController.viewStatus );

//admin can change code expire hours
router.put("/:id/enroll/change_expire", verifyAuthToken('sub-admin'), enrollsController.changeExpiresHours);

module.exports = router;
