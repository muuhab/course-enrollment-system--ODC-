const express = require("express");
const router = express.Router();

const enrollsController = require("../controllers/enrolls");
const {verifyAuthToken,authStudent} = require("../services/middleware");

router.get("/", verifyAuthToken('sub-admin'), enrollsController.index);
router.get("/:id", verifyAuthToken('sub-admin'), enrollsController.show);
router.put("/:id", verifyAuthToken('sub-admin'), enrollsController.update);
router.delete("/:id", verifyAuthToken('sub-admin'), enrollsController.remove);
router.post("/", verifyAuthToken('sub-admin'), enrollsController.create);
//admin can change code expire hours
router.put("/", verifyAuthToken('sub-admin'), enrollsController.changeExpiresHours);
//students check for their enrollment status
router.get("/:id/status", authStudent(false,true), enrollsController.viewStatus);


module.exports = router;
