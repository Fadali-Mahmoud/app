var User = require('../models/user').User;
module.exports = function () {

    var signUp = function (req, res) {
        var user = new User({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nationality: req.body.nationality,
            birthDate: req.body.birthDate,
            contactNumber: req.body.contactNumber
        });
        user.save(function (err, userRes) {
            if (err) {
                return console.error(err);
            }
            req.login(userRes, function () {
                res.send(userRes);
            });


        });
    };

    return {
        signUp: signUp
    };
};