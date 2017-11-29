define(function () {
    "use strict";

    var HomeService = function($http, $q) {

        this.getServers = function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'modules/home/servers.json',
                headers: {
                    "Content-Type": 'application/json;charset=UTF-8',
                    "Accept": 'application/json;charset=UTF-8'
                },
                dataType: "json",
                crossDomain: true
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
    };

    HomeService.$inject = ["$http", "$q"];

    return HomeService ;
});