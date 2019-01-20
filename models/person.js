const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    id: {
        type: String
    },
    first_name: {
        type: String,
        required: [true, 'Firstname is required']
    },
    last_name: {
        type: String,
        required: [true, 'Lastname is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required']
    },
    ip_address: {
        type: String,
        required: [true, 'ip address is required']
    }
});

const Person = mongoose.model('persons', PersonSchema);

module.exports = Person;