// Add dish to restaurant
const router = require("express").Router();
const Restaurant = require("../models/restaurant.models");

const addRestaurant = async (req, res) => {

    const restaurant = await Restaurant.findOne({ name: req.body.name })
    if (!restaurant) {
        const result = await Restaurant.create(req.body)
        res.json(result)
    } else {
        res.json({ msg: "Restaurant already exists" })
    }
}

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


module.exports = { getRestaurants, addRestaurant }