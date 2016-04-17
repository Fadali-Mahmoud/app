/*global app*/
app.controller('flightsCtrl', ['$scope', 'FlightsSrv', function ($scope, FlightsSrv) {
    $scope.getSearchResults = function () {
        var formdata = JSON.parse(localStorage.getItem("searchData"));
        if (formdata.arrivalDate === undefined || formdata.arrivalDate === null)
            FlightsSrv.searchOnewayTrip(function (results) {
                $scope.flights = results;
            }, function (err) {
                console.log(err);
            }, formdata);
        else
            FlightsSrv.searchRoundTrip(function (results) {
                $scope.flights = results;
            }, function (err) {
                console.log(err);
            }, formdata);
    };
}]);