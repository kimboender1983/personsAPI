// Requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();

// Set up app
const app = express();

app.use(cors());

// Connect to Mong DB
mongoose.connect('mongodb://localhost/personsAPI', {
    useNewUrlParser: true
});

// Use bodyparser
app.use(bodyParser.json());

// Use defined routes
app.use('/api', require('./routes/api'));

// Middleware function
app.use(function (err, req, res, next) {
    res.status(422).send({
        error: err.message
    });
});

// Let app listen to given port
app.listen(8080, function () {
    console.log('App listening on port 8080');
});