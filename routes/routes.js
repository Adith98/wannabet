import express from 'express'

const router = express.Router()

// "/api/"

router.get("/", function (req, res) {
    res.send("Welcome Welcome");
});

export default router;