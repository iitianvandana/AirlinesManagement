import mongoose from "mongoose";

const placeSchema = mongoose.Schema({
    city: {
        type: String,
        requied: true
    },
    code: {
        type: String,
        requied: true
    },
    airline: {
        type: String,
        requied: true
    },
    country: {
        type: String,
        requied: true
    }
}, { timestamps: true })

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema)
export default Place

