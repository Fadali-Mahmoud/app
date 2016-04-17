/*global app*/
app.controller('signupCtrl', ['$scope', 'userSrv', '$state', function ($scope, userSrv, $state) {

    $scope.signUp = function () {
        userSrv.signUp(function (res) {
            $state.go('home')
        }, function (err) {
            console.log(err);
        }, $scope.form);
    };


}]);