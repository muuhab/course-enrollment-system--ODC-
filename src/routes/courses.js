const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courses");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, courseController.index);
router.get("/:id", verifyAuthToken, courseController.show);
router.put("/:id", verifyAuthToken, courseController.update);
router.delete("/:id", verifyAuthToken, courseController.remove);
router.post("/", verifyAuthToken, courseController.create);

module.exports = router;
