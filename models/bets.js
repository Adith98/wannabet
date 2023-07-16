import mongoose from 'mongoose';
const { Schema } = mongoose;

const wagerSchema = new mongoose.Schema({
    type: { type: String },
    amount: { type: Number },
})

const betsSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    ends_on: { type: Date, required: true },
    status: { type: Boolean, default: true },
    wager: {
        type: wagerSchema
    },
    winnner: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null
    },
    creator_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    created_on: { type: Date }
});

const Bet = mongoose.model('Bet', betsSchema);
export default Bet;