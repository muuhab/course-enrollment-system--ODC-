const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/students");
const verifyAuthToken = require("../services/auth");
const studentAuthVerify = require("../services/studentAuth");

router.get("/", verifyAuthToken, studentsController.index);
router.get("/:id",verifyAuthToken, studentsController.show);
router.put("/:id", verifyAuthToken, studentsController.update);
router.delete("/:id", verifyAuthToken, studentsController.remove);
router.post("/", verifyAuthToken, studentsController.create);
router.post("/:id/enroll", studentsController.enroll);

module.exports = router;
