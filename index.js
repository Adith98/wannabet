import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config.js'

import routes from './routes/routes.js';

//Initialization
const app = express();

////Middlewares -> Every time a route is hit, this will run first
app.use(express.json({ limit: "30mb", extended: "true" })); //Limiting images size to 30 mb ALSO IMPORTANT FOR parsing body requests.
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

//Import Routes
app.use('/api', routes)

//setting up the port
const PORT = process.env.PORT || 5000;

// Wait for database to connect, logging an error if there is a problem
connectToMongo()
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err));

async function connectToMongo() {
    await mongoose.connect(process.env.DATABASE_URL);
}