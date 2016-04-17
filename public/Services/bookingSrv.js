/*global app*/
/*global AjaxURLs*/
app.factory('bookingSrv', function ($http) {
    return {
        bookFlight: function (win, fail,data) {
            $http({
                method: 'GET',
                url: AjaxURLs.bookFlight+'/'+data.bookingNumber+'/'+data.visaNumber
            }).success(function (results) {
                win(results);
            }).error(function (err) {
                fail(err);
            });
        }
    };
});