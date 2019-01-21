const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// GET method
router.get('/persons', function(req,res, next) {

    Person.find({ $or: [
        { first_name: new RegExp(req.query.query, "i") },
        { flast_name: new RegExp(req.query.query, "i") },
        { email: new RegExp(req.query.query, "i") },
        { gender: new RegExp(req.query.query, "i") }
    ] }).then((result) => {
        res.send(result);
    })
    .catch(next);
});

// POST method
router.post('/persons', function(req,res, next) {
    Person.create(req.body).then(function (person) {
        res.send(person);
    })
    .catch(next);
});

// PUT method
router.put('/persons/:id', function(req,res, next) {
    res.send({method:'PUT'});
});

// DELETE method
router.delete('/persons/:id', function(req,res, next) {
    res.send({method:'DELETE'});
});

module.exports = router;
