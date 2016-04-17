/*global app*/
/*global AjaxURLs*/
app.controller('searchCtrl', ['$scope', 'FlightsSrv','$state', function ($scope, FlightsSrv,$state) {

    $scope.SearchFlights = function () {
        if ($scope.form.arrivalDate === undefined || $scope.form.arrivalDate === null) {
            FlightsSrv.searchOnewayTrip(function (results) {
                $scope.flights = results;
                $scope.showResults = true;
            }, function (err) {
                console.log(err);
            }, $scope.form);
        } else {
            FlightsSrv.searchRoundTrip(function (results) {
                $scope.flights = results;
                $scope.showResults = true;
            }, function (err) {
                console.log(err);
            }, $scope.form);
        }
    };

    $scope.reset = function () {
        $scope.showResults = false;
    };
    $scope.bookFlight = function (element) {
        $state.go('payment/'+element.flight.FlightID);
    };
}]);