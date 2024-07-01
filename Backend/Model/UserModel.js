const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,

    },
    price: {
        type: Number,
        required: true
    },
    file: {
        type: String,
    },
    rating: {
        type: Number,
    },



})

const userModel = mongoose.model("shoieUser", userSchema)

module.exports = userModel