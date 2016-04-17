/*global app*/
app.controller('paymentCtrl', ['$scope', '$stateParams', 'bookingSrv', function ($scope, $stateParams, bookingSrv) {
    $scope.bookingNumber = $stateParams.flightId;
    $scope.visaNumber = '';
    $scope.transNumber = 0;
    $scope.showTransNumber = false;
    $scope.pay = function () {
        bookingSrv.bookFlight(function (res) {
            if (res.state !== undefined && res.state !== null) {
                alert('please sign in first')
            } else {
                $scope.transNumber = res.BookingNumber;
                $scope.showTransNumber = true;
            }
        }, function (err) {
            console.log(err);
        }, {
            bookingNumber: $scope.bookingNumber,
            visaNumber: $scope.visaNumber
        });
    };


}]);