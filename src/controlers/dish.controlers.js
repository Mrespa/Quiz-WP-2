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
const getDishFilteredByRestaurant = async (req, res) => {
    const { id } = req.params;
    const { page } = req.query;
    console.log(page);
    const dishes = await Dish.find({ restaurantId: id }).populate('restaurantId').skip((page - 1) * 3).limit(3);
    res.json(dishes);
}

module.exports = { addDishRestaurant, getDishFilteredByRestaurant }