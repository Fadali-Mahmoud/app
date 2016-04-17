/*global app*/
/*global AjaxURLs*/
app.factory('userSrv', function ($http) {
    return {
        signIn: function (win, fail, data) {
            $http({
                method: 'POST',
                url: AjaxURLs.signIn,
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function (results) {
                win(results);
            }).error(function (err) {
                fail(err);
            });
        },
        signUp: function (win, fail, data) {
            $http({
                method: 'POST',
                url: AjaxURLs.signUp,
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function (results) {
                win(results);
            }).error(function (err) {
                fail(err);
            });
        }
    };
});