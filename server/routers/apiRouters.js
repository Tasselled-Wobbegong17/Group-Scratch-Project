const express = require('express');
const apiController = require('../controllers/apiController.js');

const router = express.Router();

router.get('/listings',
  apiController.getListings,
  (req, res) => {
    res.status(200).json(res.locals.listings);
  })


module.exports = router;