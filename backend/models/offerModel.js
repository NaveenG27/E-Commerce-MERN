const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    name: String,
    price: String,
    offer_price: String,
    description: String,
    ratings: String,
    images : [
        {
            image: String
        }
    ],
    category: String,
    offer: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    createdAt: Date
});

const offerModel = mongoose.model('offer', offerSchema);

module.exports = offerModel;