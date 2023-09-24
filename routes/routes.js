import express from 'express'
import { place_bet } from '../controllers/controller.js'

const router = express.Router()

// "/api/"

router.get("/", function (req, res) {
    res.send("Welcome Welcome");
});


// router.get("/placebet", place_bet);

router.post("/placebet", place_bet);


export default router;