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

// @route   POST api/post/like/:id
// @desc    Like post
// @access  Private
router.post(
  '/like/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findById(req.params.id).then(post => {
      if (
        post.likes.filter(like => like.user.toString() === req.user.id).length >
        0
      ) {
        return res
          .status(400)
          .json({ alreadyliked: 'User already liked this post' })
      }
      // Add user id to likes array
      post.likes.unshift({ user: req.user.id })

      post
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err))
    })
  }
)

// @route   POST api/post/like/:id
// @desc    Unlike post
// @access  Private
router.post(
  '/unlike/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findById(req.params.id).then(post => {
      if (
        post.likes.filter(like => like.user.toString() === req.user.id)
          .length === 0
      ) {
        return res
          .status(400)
          .json({ notliked: 'You have not yet liked this post' })
      }

      // Get remove index
      const removeIndex = post.likes
        .map(item => item.user.toString())
        .indexOf(req.user.id)
      post.likes.splice(removeIndex, 1)
      post.save().then(post => res.json(post))
    })
  }
)

// @route   POST api/posts/comment/:id
// @desc    Post comment
// @access  Private
router.post(
  '/comment/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log('req: ', req.params)
    // Find post
    Post.findById(req.params.id)
      .then(post => {
        console.log('user: ', req.user)
        const newPost = {
          user: req.user._id,
          text: req.body.text,
          name: req.user.name,
        }
        post.comments.unshift(newPost)
        post
          .save()
          .then(post => res.json(post))
          .catch(err => res.status(400).json(err))
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
  }
)

// @route   POST api/posts/comment/:id
// @desc    Delete a comment
// @access  Private
router.delete(
  '/comment/:id/:comment_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          console.log(post)
          return res
            .status(404)
            .json({ commentnotexists: 'Comment does not exist' })
        }
        const commentIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id)

        post.comments.splice(commentIndex, 1)
        post
          .save()
          .then(post => res.json(post))
          .catch(err => res.status(400).json(err))
      })
      .catch(err => res.status(404).err({ postnotfound: 'No post found' }))
  }
)

module.exports = router
