const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => res.json({ test: 'Posts work' }))

// @route   POST api/post
// @desc    Create or edit user profile
// @access  Protected

module.exports = router
