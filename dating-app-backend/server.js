import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGODB_URL;

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

// API EndPoints
app.get("/", (req, res) => {
    res.status(200).send("Hello TheWebDev");
});

app.post('/dating/cards', async (req, res) => {
    try {
        const dbCard = req.body;
        const newCard = await Cards.create(dbCard);
        res.status(201).send(newCard);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/dating/cards', async (req, res) => {
    try {
        const cards = await Cards.find();
        res.status(200).send(cards);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dating-app-frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dating-app-frontend/build', 'index.html'));
});

// Listener
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`);
});
