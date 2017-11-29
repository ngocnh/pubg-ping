define(['angular', 'service/services'], function (angular, services) {
    "use strict";

    var service = angular.module("service", []);

    service.service("services", services);

    return service;
});