const express = require('express');

const feedController = require('../cotrollers/feed')

const router = express.Router();

//GET /feed/posts
router.get('/posts', feedController.getPosts);

// post /feed/post
router.post('/post', feedController.createPost);

module.exports = router;