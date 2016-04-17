$(document).foundation();

var app = angular.module('spirit', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/home');
    //
    // Now set up the states
    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'modules/search/search.html',
            controller: 'searchCtrl'
        }).state('flights', {
            url: '/flights',
            templateUrl: 'modules/flights/flights.html',
            controller: 'flightsCtrl'
        }).state('landings', {
            url: '/landings',
            templateUrl: 'modules/landings/landings.html',
            controller: 'landingsCtrl'
        }).state('signup', {
            url: '/signup',
            templateUrl: 'modules/signup/signup.html',
            controller: 'signupCtrl'
        }).state('payment', {
            url: '/payment/:flightId',
            templateUrl: 'modules/payment/payment.html',
            controller: 'paymentCtrl'
        }).state('paymentMethod', {
            url: '/paymentMethod',
            templateUrl: 'modules/paymentMethod/paymentMethod.html',
            controller: 'paymentMethodCtrl'
        }).state('confirm', {
            url: '/confirm',
            templateUrl: 'modules/confirm/confirm.html',
            controller: 'confirmCtrl'
        }).state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html',
            controller: 'homeCtrl'
        });
});