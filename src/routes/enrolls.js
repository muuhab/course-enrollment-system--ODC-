const express = require("express");
const router = express.Router();

const enrollsController = require("../controllers/enrolls");
const {verifyAuthToken,authStudent} = require("../services/middleware");

router.get("/", verifyAuthToken('sub-admin'), enrollsController.index);
router.get("/:id", verifyAuthToken('sub-admin'), enrollsController.showSingle);
router.put("/:id", verifyAuthToken('sub-admin'), enrollsController.update);
router.delete("/:id", verifyAuthToken('sub-admin'), enrollsController.remove);
router.post("/", verifyAuthToken('sub-admin'), enrollsController.create);



module.exports = router;
