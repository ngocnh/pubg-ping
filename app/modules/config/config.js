define(["angular", "config/configuration"], function (angular, configuration) {
    "use strict";

    var standardAngularModules = ["ngRoute", "home", "navbar", "pascalprecht.translate", "config", "templates", "ngSanitize", "ui.materialize"],
        config = angular.module('config', []);


    if (configuration.useMock) {
        standardAngularModules.push("ngMockE2E");
    }
    configuration.standardAngularModules = standardAngularModules;

    config.constant("config", configuration);

    return configuration;

});
