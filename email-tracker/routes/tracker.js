// routes/tracker.js
const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/trackerController');

router.get('/pixel', trackerController.trackEmailOpen);

module.exports = router;
