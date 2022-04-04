const express = require("express");
const router = express.Router();

const questionsController = require("../controllers/questions");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, questionsController.index);
router.get("/:id", verifyAuthToken, questionsController.show);
router.put("/:id", verifyAuthToken, questionsController.update);
router.delete("/:id", verifyAuthToken, questionsController.remove);
router.post("/", verifyAuthToken, questionsController.create);

module.exports = router;
