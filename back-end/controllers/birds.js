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

router.get('/', async (req, res) => {
    try {
      const birds = await Bird.find({})
        .populate('author')
        .sort({ createdAt: 'desc' });
      res.status(200).json(birds);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get('/:birdId', async (req, res) => {
    try {
      const bird = await Bird.findById(req.params.birdId).populate('author');
      res.status(200).json(bird);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.put('/:birdId', async (req, res) => {
    try {
      const bird = await Bird.findById(req.params.birdId);
  
      if (!bird.author.equals(req.user._id)) {
        return res.status(403).send("You're not allowed to do that!");
      }
  
      const updatedBird = await Bird.findByIdAndUpdate(
        req.params.birdId,
        req.body,
        { new: true }
      );
  
      updatedBird._doc.author = req.user;
  
      res.status(200).json(updatedBird);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.delete('/:birdId', async (req, res) => {
    try {
      const bird = await Bird.findById(req.params.birdId);
  
      if (!bird.author.equals(req.user._id)) {
        return res.status(403).send("You're not allowed to do that!");
      }
  
      const deletedBird = await Bird.findByIdAndDelete(req.params.birdId);
      res.status(200).json(deletedBird);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.post('/:birdId/comments', async (req, res) => {
    try {
      req.body.author = req.user._id;
      const bird = await Bird.findById(req.params.birdId);
      bird.comments.push(req.body);
      await bird.save();
  
      const newComment = bird.comments[bird.comments.length - 1];
  
      newComment._doc.author = req.user;
  
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;