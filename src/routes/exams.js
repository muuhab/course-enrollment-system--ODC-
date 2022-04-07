const express = require("express");
const router = express.Router();

const examsController = require("../controllers/exams");
const questionsController = require("../controllers/questions");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken('sub-admin'), examsController.indexExams);
router.get("/:exam_id", verifyAuthToken('sub-admin'), examsController.indexOneExams);
router.post("/:exam_id/", verifyAuthToken('sub-admin'), questionsController.create);
router.put("/:id", verifyAuthToken('sub-admin'), examsController.update);
router.delete("/:id", verifyAuthToken('sub-admin'), examsController.remove);
router.post("/", verifyAuthToken('sub-admin'), examsController.create);



module.exports = router;
