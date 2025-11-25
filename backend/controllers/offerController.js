const OfferModel = require('../models/offerModel');

// Get offers API - /api/v2/offers

exports.getOffers = async (req, res, next) => {
    const query = req.query.keyword?{name : {
        $regex: rawListeners.query.keyword,
        $options: 'i'
    }}:{}

    const offers = await OfferModel.find(query)

    res.json({
        success: true,
        offers
    })
}


// Get single offer Product API - api/v2/offer:id

exports.getSingleOffer = async (req, res, next) => {
    try{
    const offers = await OfferModel.findById(req.params.id);

    res.json({
        success: true,
        offers
    })
    } catch (error) {
        res.status(404).json({
        success: false,
        message: 'unable to get offers'
    })
    }
}