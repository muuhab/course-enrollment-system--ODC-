const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories");
const verifyAuthToken = require("../services/auth");

router.get("/", verifyAuthToken, categoryController.index);
router.get("/:id", verifyAuthToken, categoryController.show);
router.put("/:id", verifyAuthToken, categoryController.update);
router.delete("/:id", verifyAuthToken, categoryController.remove);
router.post("/", verifyAuthToken, categoryController.create);

module.exports = router;
