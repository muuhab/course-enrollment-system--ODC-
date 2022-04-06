const express = require("express");
const router = express.Router();

const revisionsController = require("../controllers/revisions");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken('sub-admin'), revisionsController.index);
router.get("/:id", verifyAuthToken('sub-admin'), revisionsController.show);
router.put("/:id", verifyAuthToken('sub-admin'), revisionsController.update);
router.delete("/:id", verifyAuthToken('sub-admin'), revisionsController.remove);
router.post("/", verifyAuthToken('sub-admin'), revisionsController.create);

module.exports = router;
