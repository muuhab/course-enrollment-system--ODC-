const express = require("express");
const router = express.Router();

const revisionsController = require("../controllers/revisions");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, revisionsController.index);
router.get("/:id", verifyAuthToken, revisionsController.show);
router.put("/:id", verifyAuthToken, revisionsController.update);
router.delete("/:id", verifyAuthToken, revisionsController.remove);
router.post("/", verifyAuthToken, revisionsController.create);

module.exports = router;
