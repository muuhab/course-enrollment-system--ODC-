const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories");
const {verifyAuthToken} = require("../services/middleware");

router.get("/", verifyAuthToken('admin'), categoryController.index);
router.get("/:id", verifyAuthToken('admin'), categoryController.show);
router.put("/:id", verifyAuthToken('admin'), categoryController.update);
router.delete("/:id", verifyAuthToken('admin'), categoryController.remove);
router.post("/", verifyAuthToken('admin'), categoryController.create);

module.exports = router;
