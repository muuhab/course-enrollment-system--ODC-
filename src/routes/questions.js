const express = require("express");
const router = express.Router();

const questionsController = require("../controllers/questions");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken('sub-admin'), questionsController.index);
router.get("/:id", verifyAuthToken('sub-admin'), questionsController.show);
router.put("/:id", verifyAuthToken('sub-admin'), questionsController.update);
router.delete("/:id", verifyAuthToken('sub-admin'), questionsController.remove);
router.post("/", verifyAuthToken('sub-admin'), questionsController.create);

module.exports = router;
