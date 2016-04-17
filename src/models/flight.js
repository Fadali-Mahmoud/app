var mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
    FlightID: {
        type: String
    },
    AirportID: {
        type: String
    },
    Aircraft: {
        type: String
    },
    Capacity: {
        type: String
    },
    DepartureDate: {
        type: Date
    },
    ArrivalDate: {
        type: Date
    },
    Destination: {
        type: String
    },
    Duration: {
        type: Date
    },
    Origin: {
        type: String
    },
    Terminal: {
        type: String
    },
    SeatMap: [{
        Seats: {
            type: String
        },
        TravelType: {
            type: String
        },
        Window: {
            type: String
        },
        Cost: {
            type: Number
        },
        ReservationId: {
            type: String
        }
    }]
});

var Flight = mongoose.model('Flight', FlightSchema);

module.exports = {
    Flight: Flight
};