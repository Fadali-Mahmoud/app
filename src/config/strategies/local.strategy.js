var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../../models/user').User;

module.exports = function () {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password',
        },
        function (username, password, done) {
            User.find({
                email: username,
                password: password,
            }, function (err, result) {
                if (err) {
                    console.log(err);
                    done(null, false, {
                        message: 'Bad Password'
                    });
                }
                done(null, result);
            });

        }));
};