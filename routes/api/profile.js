const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load models
const User = require('../../models/User')
const Profile = require('../../models/Profile')

// @route   GET api/profile/test
// @desc    Test profile route
// @access  Public
router.get('/test', (req, res) => res.json({ test: 'Profile works!' }))

// @route   GET api/profile/test
// @desc    get user profile
// @access  Protected
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {}
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user'
          return res.status(404).json(errors)
        }
        res.json(profile)
      })
      .catch(err => res.status(404).json(err))
  }
)

// @route   POST api/profile/test
// @desc    Create user profile
// @access  Protected
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {}

    // Get fields
    const profileFields = {}
    profileFields.user = req.user.id

    if (req.body.handle) profileFields.handle = req.body.handle
    if (req.body.company) profileFields.company = req.body.company
    if (req.body.website) profileFields.website = req.body.website
    if (req.body.location) profileFields.location = req.body.location
    if (req.body.status) profileFields.status = req.body.status
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername

    if (typeof req.body.skills !== undefined) {
      profileFields.skills = req.body.skills.split(',')
    }
    profileFields.social = {}
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube

    if (req.body.bio) profileFields.bio = req.body.bio
    if (req.body.experience) profileFields.experience = req.body.experience
    if (req.body.education) profileFields.education = req.body.education
  }
)

module.exports = router
