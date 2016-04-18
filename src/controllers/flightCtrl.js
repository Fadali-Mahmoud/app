var Flight = require('../models/flight').Flight;
var moment = require('moment');

module.exports = function () {

    /**
     * init the first seed into db
     */
    var dbSeed = function (req, res) {
       var flights = [
            {
                FlightID: 'm12',
                AirportID: 'm12',
                Aircraft: 'm12',
                Capacity: '123',
                Destination: 'england',
                Duration: '2',
                Origin: 'egypt',
                Terminal: 'c1',
                DepartureDate: '4/18/2016',
                ArrivalDate: '4/20/2016',
                SeatMap: [{
                    Seats: 'a1',
                    TravelType: 'c',
                    Window: 'y',
                    Cost: 123,
                    ReservationId: 1
                }, {
                    Seats: 'a1',
                    TravelType: 'c',
                    Window: 'y',
                    Cost: 123,
                    ReservationId: 1
                }]
            },
            {
                FlightID: 'm12',
                AirportID: 'm12',
                Aircraft: 'm12',
                Capacity: '123',
                Destination: 'england',
                Duration: '2',
                Origin: 'egypt',
                Terminal: 'c1',
                DepartureDate: '4/12/2016',
                SeatMap: [{
                    Seats: 'a1',
                    TravelType: 'c',
                    Window: 'y',
                    Cost: 123,
                    ReservationId: 1
                }, {
                    Seats: 'a1',
                    TravelType: 'c',
                    Window: 'y',
                    Cost: 123,
                    ReservationId: 1
                }]
            }
        ];

    var searchOnewayTrip = function (req, res) {
        Flight.find({
                Origin: req.params.from,
                Destination: req.params.to,
                DepartureDate: new Date(moment(parseInt(req.params.dep)).format('MM/DD/YYYY')),
                ArrivalDate: null
            },
            function (err, flights) {
                if (err) {
                    return console.error(err);
                }
                console.log(flights);
                res.send(flights);
            });
    };

    var outgoingFlights = function (req, res) {
        Flight.find({
                DepartureDate: {
                    $gte: new Date()
                },
            },
            function (err, flights) {
                if (err) {
                    return console.error(err);
                }
                console.log(flights);
                res.send(flights);
            });
    };

    return {
        dbSeed: dbSeed,
        searchRoundTrip: searchRoundTrip,
        searchOnewayTrip: searchOnewayTrip,
        outgoingFlights: outgoingFlights
    };
};