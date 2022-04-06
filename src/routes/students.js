const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/students");
const enrollsController = require("../controllers/enrolls");
const verifyAuthToken = require("../services/auth");
const authStudent = require("../services/middleware");

router.get("/", verifyAuthToken, studentsController.index);
router.get("/:id", authStudent,  studentsController.show);
router.put("/:id", authStudent, studentsController.update);
router.delete("/:id", verifyAuthToken, studentsController.remove);
router.post("/", studentsController.create);
router.post("/auth", studentsController.authenticate);
router.post("/:id/enroll", authStudent, enrollsController.create);
router.get("/:id/enroll", authStudent, enrollsController.show);

module.exports = router;
