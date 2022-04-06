const express = require("express");
const router = express.Router();

const examsController = require("../controllers/exams");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken('sub-admin'), examsController.index);
router.get("/:exam_id", verifyAuthToken('sub-admin'), examsController.show);
router.put("/:exam_id", verifyAuthToken('sub-admin'), examsController.update);
router.delete("/:exam_id", verifyAuthToken('sub-admin'), examsController.remove);
router.post("/", verifyAuthToken('sub-admin'), examsController.create);


module.exports = router;
