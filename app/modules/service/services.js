define(function () {
    "use strict";

    var services = function($rootScope, config, $http, $q) {
        this.get = function (resource) {
            return call(resource, 'GET');

        };

        this.post = function (resource, data) {
            return call(resource, 'POST', data);
        };

        this.put = function (resource, data) {
            return call(resource, 'PUT', data);
        };

        this.delete = function (resource) {
            return call(resource, 'DELETE');
        };

        function call(resource, method, data) {
            var deferred = $q.defer();
            var req = {
                method: method,
                url: resource,
                headers: {
                    "Content-Type": 'application/json;charset=UTF-8',
                    "Accept": 'application/json;charset=UTF-8'
                },
                dataType: "json",
                crossDomain: true
            };

            if (data !== undefined) {
                req.data = data;
            }

            $http(req).success(function (response) {
                deferred.resolve(response);
            }).error(function (error) {
                console.log(error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    };

    services.$inject = ['$rootScope', 'config', '$http', '$q'];

    return services;
});