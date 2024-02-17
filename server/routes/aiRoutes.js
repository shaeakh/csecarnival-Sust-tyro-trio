const express = require('express');
const guidelineChat = require('../controllers/guidelineChat');
const aiRouter = express.Router();
aiRouter.post("/guide",guidelineChat);
module.exports = aiRouter;