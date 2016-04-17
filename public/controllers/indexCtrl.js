/*global app*/
app.controller('indexCtrl', ['$scope', 'userSrv', function ($scope, userSrv) {
    $scope.loggedIn=false;
    
    $scope.signin = function () {
        userSrv.signIn(function (res) {
            alert('signing done');
            $scope.loggedIn=true;
        }, function (err) {
            console.log(err);
        }, {
            userName: $scope.username,
            password: $scope.password
        });
    };
}]);