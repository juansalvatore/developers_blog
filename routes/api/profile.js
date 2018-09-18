const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Profile Validation
const validateProfileInput = require('../../validation/profile')
const validateExperienceInput = require('../../validation/experience')

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
      .populate('user', 'name')
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
// @desc    Create or edit user profile
// @access  Protected
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Profile validation
    const { errors, isValid } = validateProfileInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

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
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram
    if (req.body.bio) profileFields.bio = req.body.bio

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile))
      } else {
        // Create
        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'That handle already exists'
            res.status(400).json(errors)
          }
          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile))
        })
      }
    })
  }
)

// @route   GET api/profile/all
// @desc    Get array of profiles
// @access  Public
router.get('/all', (req, res) => {
  const errors = {}
  Profile.find({})
    .populate('user', 'name')
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles'
        res.status(404).json(errors)
      } else {
        return res.json(profiles)
      }
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }))
})

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get('/handle/:handle', (req, res) => {
  const errors = {}
  // params takes it from the url
  Profile.findOne({ handle: req.params.handle })
    .populate('user', 'name')
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user'
        res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

// @route   GET api/profile/user/:user_id
// @desc    Get profile by User ID
// @access  Public
router.get('/user/:user_id', (req, res) => {
  const errors = {}
  // params takes it from the url
  Profile.findOne({ user: req.params.user_id })
    .populate('user', 'name')
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user'
        res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this user' })
    )
})

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post(
  '/experience',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Experience validation
    const { errors, isValid } = validateExperienceInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      }
      // Add to exp array
      profile.experience.unshift(newExp)
      profile.save().then(profile => res.json(profile))
    })
  }
)

module.exports = router
