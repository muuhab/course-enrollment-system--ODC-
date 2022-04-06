const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admins");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken("admin"), adminController.index);
router.get("/:id", verifyAuthToken("admin"), adminController.show);
router.put("/:id", verifyAuthToken("admin"), adminController.update);
router.delete("/:id", verifyAuthToken("admin"), adminController.remove);
router.post("/", verifyAuthToken("admin"), adminController.create);
router.post("/auth", adminController.authenticate);

module.exports = router;
