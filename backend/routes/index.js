const express = require('express');
const { getJobList, getJobListSearch } = require('../controllers/jobList');
const getJobDetail = require('../controllers/jobDetail');
const router = express.Router();

router.get('/', getJobList);
router.get('/:description&:location&:full_time', getJobListSearch);
router.get('/detail/:id', getJobDetail);
module.exports = router;