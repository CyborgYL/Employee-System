var multi = angular.module('multiCtrl', ['ngRoute']);

multi.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/listUser', {
                    templateUrl: 'listUser.html',
                    controller: 'listCtrl'
                })
                .when('/showUser/:userId', {
                    templateUrl: 'showUser.html',
                    controller: 'showCtrl'
                })
                .when('/editUser/:userId', {
                    templateUrl: 'editUser.html',
                    controller: 'editCtrl'
                })
                .when('/directReports/:userId', {
                    templateUrl: 'directReports.html',
                    controller: 'directReportsCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
}]);
