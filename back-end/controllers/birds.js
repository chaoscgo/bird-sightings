const express = require('express');
const verifyToken = require('../middleware/verify-token.js');
const Bird = require('../models/Bird/bird.js');
const router = express.Router();

// ========== Public Routes ===========

// ========= Protected Routes =========

router.use(verifyToken);

router.post('/', async (req, res) => {
    try {
        req.body.author = req.user._id;
        const bird = await Bird.create(req.body);
        bird._doc.author = req.user;
        res.status(201).json(bird);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
});

module.exports = router;