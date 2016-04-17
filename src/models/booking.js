var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
    Useremail: {
        type: String
    },
    FlightID: {
        type: String
    },
    BookingDate: {
        type: Date,
        default: Date.now
    },
    BookingNumber: {
        type: String,
        default: new mongoose.Types.ObjectId()
    },
    VisaNumber: {
        type: Number
    }
});

var Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    Booking: Booking
};