const express = require('express') 
const {genShort,handleAnalytics} = require('../controllers/url')
const router = express.Router()

router.post("/",genShort)
router.get('/analytics/:shortId',handleAnalytics)


module.exports = router;