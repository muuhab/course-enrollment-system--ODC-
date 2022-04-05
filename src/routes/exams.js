const express = require("express");
const router = express.Router();

const examsController = require("../controllers/exams");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, examsController.index);
router.get("/:exam_id", verifyAuthToken, examsController.show);
router.put("/:exam_id", verifyAuthToken, examsController.update);
router.delete("/:exam_id", verifyAuthToken, examsController.remove);
router.post("/", verifyAuthToken, examsController.create);


module.exports = router;
