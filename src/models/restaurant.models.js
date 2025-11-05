const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
    name: { type: String, require: true }
}, {
    collection: "restaurants",
    timestamps: true,
    versionKey: false
})

const Restaurant = model("restaurant", restaurantSchema)
module.exports = Restaurant