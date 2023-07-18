const express = require('express');
const apiController = require('../controllers/apiController.js');

const router = express.Router();

router.get('/listings',
  //Check database for listings?
  // Then make api call for listings
  apiController.getListings,
  // Add listings that were gotten to database if needed
  (req, res) => {
    res.status(200).json(res.locals.listings);
  })



router.get('/',
  (req, res) => {
    res.status(200).json('f');
  })

module.exports = router;