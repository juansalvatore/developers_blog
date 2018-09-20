const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Post model
const Post = require('../../models/Post')

// Validation
const validatePostInput = require('../../validation/post')

router.get('/test', (req, res) => res.json({ test: 'Posts work' }))

// @route   GET api/post
// @desc    Get users profile
// @access  Public
router.get('/', (req, res) => {
  Post.find({})
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: 'No posts found' }))
})

// @route   GET api/post/:id
// @desc    Get user posts by id
// @access  Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that id' })
    )
})

// @route   DELETE api/post/:id
// @desc    Delete user posts by id
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id)
          .then(post => {
            if (post.user.toString() !== req.user.id) {
              res.status(401).json({ notauthorized: 'User not authorized' })
            }

            post.remove().then(() => res.json({ success: true }))
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
      })
      .catch()
  }
)

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
      user: req.user.id,
      text: req.body.text,
      name: req.user.name,
    })

    newPost.save().then(post => res.json(post))
  }
)

module.exports = router
