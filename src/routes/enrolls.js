const express = require("express");
const router = express.Router();

const enrollsController = require("../controllers/enrolls");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, enrollsController.index);
router.get("/:id", verifyAuthToken, enrollsController.show);
router.put("/:id", verifyAuthToken, enrollsController.update);
router.delete("/:id", verifyAuthToken, enrollsController.remove);
router.post("/", verifyAuthToken, enrollsController.create);
router.put("/:id/genrate_code", verifyAuthToken, enrollsController.genrateCode);


module.exports = router;
