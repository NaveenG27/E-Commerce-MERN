
const ProductModel = require('../models/productModel');

//Get Products API - /api/v2/products
exports.getProducts = async (req, res, next) =>{
    const query = req.query.keyword?{name : {
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}
    const products = await ProductModel.find(query);

    res.json({
        sucsess: true,
        products
    })
}

//Get single Product API - /api/v2/product:id
exports.getSingleProduct = async(req, res, next) =>{
try{
const product = await ProductModel.findById(req.params.id)

    res.json({
        sucsess: true,
     product
    })
    } catch(error){
         res.status(404).json({
        sucsess: true,
        message: "Unable to get that product with  ID"
    })
    }
}