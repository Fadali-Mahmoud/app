var express = require('express');
var passport = require('passport');
var userRouter = express.Router();

var router = function () {

    var userController = require('../controllers/userCtrl')();

    userRouter.route('/signUp').post(userController.signUp);
    userRouter.route('/signIn').post(passport.authenticate('local', {
        failureFlash: 'Invalid username or password.'
    }), function (req, res) {
        res.send({
            state: true
        });
    });

    return userRouter;
};

module.exports = router;