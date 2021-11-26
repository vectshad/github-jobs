const express = require('express');
const getJobList = require('../controllers/jobList');
const router = express.Router();

router.get('/', getJobList);

module.exports = router;