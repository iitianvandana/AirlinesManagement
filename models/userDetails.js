import mongoose from 'mongoose';

const userDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true})

const User = mongoose.models.User || mongoose.model("User", userDetailsSchema)
export default User