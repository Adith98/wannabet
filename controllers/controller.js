/**
 * Handles functionalities for /bets routes
 */

import asyncHandler from "express-async-handler"
import { add_bet } from "../operations/operations.js";

// Add a User.
export const add_user = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Add a User.");
});

// Update details of a User.
export const update_user = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Update details of a User.");
});

// Add a participant as a temporary User.
export const add_participant = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Add a participant.");
});

// Get list of Bets for a User.
export const bet_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Get list of Bets.");
});

// Add bet information to all the participants.
export const add_bet_info = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Add bet information to all the participants.");
});

// Place a Bet.
export const place_bet = asyncHandler(async (req, res, next) => {

  const betData = req.body
  add_bet(betData)
    .then(res.status(201).send("Bet placed successfully."))

});

// Update a Bet.
export const update_bet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Update a Bet");
});