define([
        'angular',
        'home/HomeController',
        'home/HomeService'
    ],
    function (angular, HomeController, HomeService) {
        "use strict";

        var home = angular.module("home", ['ngRoute']);

        home.service("HomeService", HomeService);

        home.config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'modules/home/home.html',
                controller: HomeController
            });

        }]);

        return home;
    });