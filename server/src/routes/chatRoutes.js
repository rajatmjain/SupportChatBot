const express = require("express");
const chatController = require("../controllers/chatControllers");

const router = express.Router();

router.post("/", chatController.postMessage);

module.exports = router;
