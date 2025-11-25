const orderModel = require('../models/orderModel');

// Create Order - /api/v2/order
exports.createOrder = async (req, res) => {
    try {
        const { cartItems, amount, status, name, mail, mobile, address } = req.body;

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ success: false, message: "Cart is empty" });
        }

        const calculatedAmount = Number(
            cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
        ).toFixed(2);

        const order = await orderModel.create({
            cartItems,
            amount: amount || calculatedAmount,
            status: status || "Pending",
            name,
            mail,
            mobile,
            address,
            createdAt: new Date()
        });

        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order
        });
    } catch (error) {
        console.error("Order creation failed:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
