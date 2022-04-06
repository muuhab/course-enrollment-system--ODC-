const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/students");
const enrollsController = require("../controllers/enrolls");
const verifyAuthToken = require("../services/auth");
const authUser = require("../services/middleware");

router.get("/", verifyAuthToken, studentsController.index);
router.get("/:id", authUser,  studentsController.show);
router.put("/:id", verifyAuthToken, studentsController.update);
router.delete("/:id", verifyAuthToken, studentsController.remove);
router.post("/", authUser, studentsController.create);
router.post("/auth", studentsController.authenticate);
router.post("/:id/enroll", verifyAuthToken, enrollsController.create);

module.exports = router;
