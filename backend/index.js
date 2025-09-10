import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { PORT, mongoDBURL } from './config.js';

//routes import
import booksRoute from './routes/booksRoute.js';

const app = express();

//Middleware for parsing
app.use(express.json());

//cors
// app.use(cors());

app.use(
    cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
})
);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected')
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })

//HTTPS ROUTES

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Status 234 yetoch");
})


app.use('/books', booksRoute);