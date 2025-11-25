const express = require('express');
const { getOffers, getSingleOffer } = require('../controllers/offerController');
const router = express.Router();

router.route('/offers').get(getOffers);
router.route('/offer/:id').get(getSingleOffer);

module.exports = router;