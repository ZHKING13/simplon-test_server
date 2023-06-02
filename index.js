const express = require('express');
require('./config/db');
const bodyParser = express.json;
const cors = require('cors');
const dotenv = require('dotenv').config();
const router = require('./routes/participant');
const app = express();
const PORT = process.env.PORT || 5000;

// creer le server
app.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`)
})
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser())
app.use(cors());

app.use('/api', router);