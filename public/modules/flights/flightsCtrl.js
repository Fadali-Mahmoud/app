/*global app*/
app.controller('flightsCtrl', ['$scope','FlightsSrv', function ($scope,FlightsSrv) {
    
    FlightsSrv.getOutGoingFlights(function(results){
        $scope.flights=results;
    },function(err){
        console.log(err);
    });
    
}]);