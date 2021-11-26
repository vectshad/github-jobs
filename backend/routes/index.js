const express = require('express');
const { getJobList, getJobListSearch } = require('../controllers/jobList');
const router = express.Router();

router.get('/', getJobList);
router.get('/:description&:location&:full_time', getJobListSearch);
module.exports = router;