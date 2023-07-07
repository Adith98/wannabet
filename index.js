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


const PORT = process.env.PORT || 5000;
//Connect to Database
mongoose.connect(process.env.DATABASE_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));