/**
 * Created by ngocnh on 5/4/16.
 */
require([
    "jquery",
    "angular",
    "app",
    "angular-materialize",
    "angular-sanitize",
    "material-kit",
    "translate",
    "translate-static-loader",
    "translate-handler-log",
    "config/config"
], function ($, angular, app) {
    'use strict';

    return angular.bootstrap(document, [app.name]);
});