require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

const port = process.env.PORT;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const scoreRouter = require('./Routes/MainRoute');
app.use('/score', scoreRouter);

app.listen(port, () => {
    console.log(`App is litning on the port : ${port}`);
});