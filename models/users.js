import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String,
        length: 10,
        required: true,
        index: true,
        unique: true
    },
    dob: {
        type: Date,
    },
    email: {
        type: String
    },
    bets: [{
        type: Schema.Types.ObjectId,
        ref: 'bets',
        unique: true
    }],
    registered: { type: Boolean, default: false },
    created_on: { type: Date }
})

const User = mongoose.model('User', userSchema);
export default User;