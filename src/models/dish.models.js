const { Schema, model } = require("mongoose");

const dishSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    restaurantId: { type: Schema.Types.ObjectId, ref: "restaurant" }
}, {
    collection: "dishes",
    timestamps: true,
    versionKey: false
})

const Dish = model("dish", dishSchema)
module.exports = Dish