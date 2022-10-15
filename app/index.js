require('dotenv').config();
const express = require('express');
const app = express();

// Uncomment in case of router
const router = require('./routes');

const PORT = process.env.PORT;
const HOSTNAME = process.env.CLIENT_HOST;
const CLIENT_PATH = process.env.CLIENT_PATH;

// Uncomment in case of bodyparser
app.use(express.json())

app.use(express.static(__dirname + CLIENT_PATH))

// Uncomment in case of router
app.use(router);

app.listen(PORT, HOSTNAME, () => console.log(`Example app listening on http://${HOSTNAME}:${PORT}`));