// Add dish to restaurant
const router = require("express").Router();
const Dish = require("../models/dish.models")

const addDishRestaurant = async (req, res) => {

    const findDish = await Dish.findOne({ name: req.body.name })
    console.log(findDish)
    if (!findDish) {
        const result = await Dish.create(req.body)
        res.json(result)
    } else {
        res.json({ msg: "Already exists" })
    }
}

module.exports = { addDishRestaurant }