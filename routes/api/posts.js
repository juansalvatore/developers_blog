const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Post model
const Post = require('../../models/Post')

// Validation
const validatePostInput = require('../../validation/post')

router.get('/test', (req, res) => res.json({ test: 'Posts work' }))

// @route   POST api/post
// @desc    Create or edit user profile
// @access  Protected
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body)
    // Check validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      res.status(400).json(errors)
    }

    const newPost = new Post({
      user: req.body.user,
      text: req.body.text,
      name: req.body.name,
    })

    newPost.save().then(post => res.json(post))
  }
)

module.exports = router
