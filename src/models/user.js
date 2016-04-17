var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    nationality: {
        type: String
    },
    birthDate: {
        type: Date
    },
    contactNumber: {
        type: Number
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = {
    User: User
};