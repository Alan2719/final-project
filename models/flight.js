const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating our User model
const FlightSchema = new Schema({
    // The email cannot be null, and must be a proper email before creation
    origin: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    destination: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    // The password cannot be null
    numberOfPeople: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    departureDate: {
        type: String,
        required: true,
        trim: true
    },
    arrivalDate: {
        type: String,
        required: true,
        trim: true
    },
    tripName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    airline: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    }

});

const Flight = mongoose.model("Flight", FlightSchema);

module.exports = Flight;