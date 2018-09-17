const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => res.json({ test: 'hello!' }))

module.exports = router
