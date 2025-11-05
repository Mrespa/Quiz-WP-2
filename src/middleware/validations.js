// Validate that the restaurant exists in the database
const Restaurant = require("../models/restaurant.models");

const validateRestaurantExists = async (req, res, next) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        next();
    } catch (error) {
        res.status(500).json({ status: false, msg: error.message });
    }
};

module.exports = {
    validateRestaurantExists
};
