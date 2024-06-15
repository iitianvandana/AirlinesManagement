import mongoose from 'mongoose'

const myBooking = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    departureDate: {
        type: String,
        required: true
    },
    returnDate: {
        type: String,
        required: true
    },
    classes: {
        type: String,
        required: true
    },
    bookingDate: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
})

const Booking = mongoose.models.Booking || mongoose.model("Booking", myBooking)
export default Booking