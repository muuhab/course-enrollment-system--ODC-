const express = require("express");
const router = express.Router();

const trainerController = require("../controllers/trainers");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken('admin'), trainerController.index);
router.get("/:id", verifyAuthToken('admin'), trainerController.show);
router.put("/:id", verifyAuthToken('admin'), trainerController.update);
router.delete("/:id", verifyAuthToken('admin'), trainerController.remove);
router.post("/", verifyAuthToken('admin'), trainerController.create);

router.post("/:id", verifyAuthToken('admin'), trainerController.assignToCourse);

module.exports = router;
