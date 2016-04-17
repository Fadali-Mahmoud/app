/*global app*/
/*global AjaxURLs*/
app.factory('FlightsSrv', function ($http) {
    return {
        getOutGoingFlights: function (win, fail) {
            $http({
                method: 'GET',
                url: AjaxURLs.getOutGoingFlights
            }).success(function (results) {
                win(results);
            }).error(function (err) {
                fail(err);
            });
        },
        searchRoundTrip: function (win, fail, data) {        
            $http({
                method: 'GET',
                url: AjaxURLs.searchTrip + "/" + data.from + "/" + data.to + "/" + new Date(data.departureDate).getTime() + "/" + new Date(data.arrivalDate).getTime()
            }).success(function (results) {
                win(results);
            }).error(function (err) {
                fail(err);
            });
        },
        searchOnewayTrip: function (win, fail, data) {
            $http({
                method: 'GET',
                url: AjaxURLs.searchTrip + "/" + data.from + "/" + data.to + "/" + new Date(data.departureDate).getTime()
            }).success(function (results) {
                win(results);
            }).error(function (err) {
                fail(err);
            });
        }
    };
});