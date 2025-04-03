const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./db/conn');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../config.env') });

const app = express();
const port = process.env.PORT || 3000;

// Connect Database
connectDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Working');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
