var Booking = require('../models/booking').Booking;

module.exports = function () {

    var midleware = function (req, res, next) {
        if (!req.user) {
            return res.send({
                state: false
            });
        }
        next();
    };

    var bookFlight = function (req, res) {
        console.log({
            Useremail: req.user.useremail,
            FlightID: req.params.flightId,
            VisaNumber: req.params.visanumber
        });

        var booking = new Booking({
            Useremail: req.user.useremail,
            FlightID: req.params.flightId,
            VisaNumber: req.params.visanumber
        });
        booking.save(function (err, bookingData) {
            if (err) {
                console.log(err);
                return err;
            }
            res.send(bookingData);

        });
    };

    var getUserHistory = function (req, res) {
        Booking.find({
                Useremail: req.params.useremail,
            },
            function (err, userHistory) {
                if (err) {
                    console.error(err);
                    return err;
                }
                res.json(userHistory);
            });

    };

    return {
        getUserHistory: getUserHistory,
        bookFlight: bookFlight,
        midleware: midleware
    };
};