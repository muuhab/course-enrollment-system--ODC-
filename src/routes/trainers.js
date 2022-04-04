const express = require("express");
const router = express.Router();

const trainerController = require("../controllers/trainers");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, trainerController.index);
router.get("/:id", verifyAuthToken, trainerController.show);
router.put("/:id", verifyAuthToken, trainerController.update);
router.delete("/:id", verifyAuthToken, trainerController.remove);
router.post("/", verifyAuthToken, trainerController.create);

module.exports = router;
