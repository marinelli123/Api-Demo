﻿var p2GoApp = angular.module('p2GoApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'angular-loading-bar', 'angular-cache', 'ui.bootstrap']);

p2GoApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'pages/quote.html',
            controller: 'quoteController'
        })
        .when('/token',
        {
            templateUrl: 'pages/quote.html',
            controller: 'tokenController'
        })
        .when('/results',
        {
            templateUrl: 'pages/results.html',
            controller: 'resultsController'
        })
        .when('/parcels',
        {
            templateUrl: 'pages/parcels.html',
            controller: 'parcelController'
        })
        .when('/order',
        {
            templateUrl: 'pages/order.html',
            controller: 'orderController'
        })
        .when('/overview',
        {
            templateUrl: 'pages/overview.html',
            controller: 'overviewController'
        })
        .when('/dropshops',
        {
            templateUrl: 'pages/dropshop.html',
            controller: 'dropshopController'
        });
});