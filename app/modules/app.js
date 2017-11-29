define([
    'angular',
    'config/config',
    'angular-route',
    'navbar/navbar',
    'home/home',
    'templates'
], function (angular, config) {
    "use strict";

    var app = angular.module("app", config.standardAngularModules);

    app.config([
        '$httpProvider',
        '$routeProvider',
        '$translateProvider',
        function ($httpProvider, $routeProvider, $translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'translations/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('vi');
            $translateProvider.useMissingTranslationHandlerLog();
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $routeProvider.otherwise({redirectTo: '/'});
        }]);

    return app;
});
