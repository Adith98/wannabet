import Bet from "../models/bets.js"

export const add_bet = async (betData) => {
    await Bet.create(betData)
        .catch(err => console.log("add_bet: ", err))
}