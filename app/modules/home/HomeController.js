define(function () {
    "use strict";

    var HomeController = function ($scope, $translate, $http, $sce, $interval, $filter, homeService) {
        $scope.servers = [];
        $scope.serverInterval = [];
        $scope.checkedServer = [];
        $scope.latencies = [];

        homeService.getServers().then(function (response) {
            if (response.data.length > 0) {
                $scope.servers = response.data;
            }
        });

        $scope.ping = function (server) {
            if ($scope.serverInterval[server.id] === undefined) {
                $scope.serverInterval[server.id] = $interval(function () {
                    doPing(server);
                }, 1000);
            }
        };

        $scope.pingAll = function () {
            $scope.intervalAll = true;
            $scope.servers.forEach(function (server) {
                if ($scope.checkedServer[server.id] === true) {
                    if ($scope.serverInterval[server.id] === undefined) {
                        $scope.serverInterval[server.id] = $interval(function () {
                            doPing(server);
                        }, 1000);
                    }
                }
            });
        };

        $scope.stop = function (server) {
            if ($scope.serverInterval[server.id] !== undefined) {
                $interval.cancel($scope.serverInterval[server.id]);
                $scope.serverInterval[server.id] = undefined;
            }
        };

        $scope.stopAll = function () {
            $scope.servers.forEach(function (server) {
                if ($scope.serverInterval[server.id] !== undefined) {
                    $interval.cancel($scope.serverInterval[server.id]);
                    $scope.serverInterval[server.id] = undefined;
                }
            });

            $scope.intervalAll = false;
        };

        $scope.clear = function (server) {
            $scope.latencies[server.id] = [];
        };

        $scope.trustAsHtml = function (string) {
            return $sce.trustAsHtml(string);
        };

        $scope.selectAll = function () {
            $scope.servers.forEach(function (server) {
                $scope.checkedServer[server.id] = true;
            });
        };

        $scope.unselectAll = function () {
            $scope.servers.forEach(function (server) {
                $scope.checkedServer[server.id] = false;
            });
        };

        $scope.clearAllLatency = function () {
            $scope.latencies = [];
        };

        $scope.selectRegion = function (region) {
            $scope.servers.forEach(function (server) {
                if (server.group === region) {
                    $scope.checkedServer[server.id] = true;
                } else {
                    $scope.checkedServer[server.id] = false;
                }
            });
        };

        $scope.average = function (server) {
            var average = 0;

            if ($scope.latencies[server.id] !== undefined) {
                $scope.latencies[server.id].forEach(function (latency) {
                    average = average + latency.ping;
                });

                average = average / $scope.latencies[server.id].length;
            }

            return average;
        };

        function doPing(server) {
            var startTime = new Date();

            $http.get(server.endpoint).then(function () {
                var endTime = new Date();

                if ($scope.latencies[server.id] === undefined) {
                    $scope.latencies[server.id] = [];
                }

                var elapsed = endTime.getTime() - startTime.getTime();
                var red = parseInt(255 * pingQuality(elapsed));
                var green = parseInt(255 - red);

                $scope.latencies[server.id].push({
                    "ping": elapsed,
                    "text": "<span style='color:rgba(" + red + ", " + green + ", 0, 1.0); font-weight:900;'>" + elapsed + "</span> "
                });
            });
        }

        function pingQuality(ping) {
            var quality = ping / 300;

            if (quality > 1) {
                quality = 1;
            } else if (quality < 0) {
                quality = 0;
            }
            return quality;
        }
    };

    HomeController.$inject = ["$scope", "$translate", "$http", "$sce", "$interval", "$filter", "HomeService"];

    return HomeController;
});