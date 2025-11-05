const router = require("express").Router();
const { addDishRestaurant } = require("../controlers/dish.controlers");
const { getRestaurants, addRestaurant, getDishFilteredByRestaurant } = require("../controlers/restaurant.controlers");
const { validateRestaurantExists } = require("../middleware/validations");


router.post("/add-restaurant", addRestaurant)
router.post("/add-dish-restaurant/:id", validateRestaurantExists, addDishRestaurant)
router.get("/get-restaurants", getRestaurants)
router.get("/get-dish/:id", validateRestaurantExists, getDishFilteredByRestaurant)


module.exports = router