var express = require('express');
var flightRouter = express.Router();

var router = function () {

    var flightController = require('../controllers/flightCtrl')();

    flightRouter.route('/seeddb').get(flightController.dbSeed);
    flightRouter.route('/search/:from/:to/:dep/:return').get(flightController.searchRoundTrip);
    flightRouter.route('/search/:from/:to/:dep').get(flightController.searchOnewayTrip);
    flightRouter.route('/outgoingFlights').get(flightController.outgoingFlights);

    return flightRouter;
};

module.exports = router;