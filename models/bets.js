import mongoose from 'mongoose';
const { Schema } = mongoose;

const wager_schema = new Schema({
    type: { type: String },
    amount: { type: Number },
})

const bets_schema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    ends_on: { type: Date, required: true },
    status: { type: Boolean, default: true },
    wager: {
        type: wager_schema
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

const Bet = mongoose.model('Bet', bets_schema);
export default Bet;