var express = require('express');
var bookingRouter = express.Router();

var router = function () {

    var bookingCtrl = require('../controllers/bookingCtrl')();

    bookingRouter.use(bookingCtrl.midleware);
    bookingRouter.route('/userHistory/:useremail').get(bookingCtrl.getUserHistory);
    bookingRouter.route('/bookFlight/:flightId/:visanumber').get(bookingCtrl.bookFlight);

    return bookingRouter;
};

module.exports = router;