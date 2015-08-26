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
                .when('/newUser', {
                    templateUrl: 'newUser.html',
                    controller: 'newCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
}]);
