multi.controller('listCtrl', function($scope, userData) {
    $scope.users = userData.list();
    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.currentPage = 1;
    $scope.pageSize = 5;
    $scope.pageStart = 0;

    $scope.deleteUser = function(id) {
        userData.deleteUser(id);
    };

    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.changePageSize = function(size) {
        $scope.pageSize =  Number(size);
        $scope.currentPage = 1;
        $scope.pageStart = 0;
    };

    $scope.viewAll = function() {
        $scope.pageSize = $scope.users.length;
        $scope.currentPage = 1;
        $scope.pageStart = 0;
    };

    $scope.numberOfPages = function(){
        return Math.ceil($scope.users.length/$scope.pageSize);
    };
    $scope.nextPage = function(){
        $scope.currentPage = $scope.currentPage + 1;
        $scope.pageStart = $scope.pageStart + $scope.pageSize;
    };
    $scope.previousPage = function(){
        $scope.currentPage = $scope.currentPage - 1;
        $scope.pageStart = $scope.pageStart - $scope.pageSize;
    };
});

multi.controller('showCtrl', function($scope, $routeParams,  userData) {
    $scope.users = userData.list();
    $scope.userId = $routeParams.userId;
    $scope.newUser = userData.getUser($routeParams.userId);

    $scope.go = function (path) {
        userData.go(path);
    };

    $scope.goBack = function() {
        window.history.back();
    };
});

multi.controller('directReportsCtrl', function($scope, $routeParams, userData) {
    $scope.users = userData.list();
    $scope.pageSize = 5;
    $scope.pageStart = 0;
    $scope.userId = $routeParams.userId;
    $scope.directReports = userData.getUser($routeParams.userId).directReports;
    $scope.reports = [];

    if ($scope.directReports.length == 0) {
        $scope.currentPage = 0;
    }
    else {
        $scope.currentPage = 1;
    }

    for (var i= 0; i<$scope.directReports.length; i++) {
        var id = $scope.directReports[i];
        $scope.reports.push($scope.users[id]);
    }

    $scope.changePageSize = function(size) {
        $scope.pageSize =  parseInt(size, 10);
        $scope.currentPage = 1;
        $scope.pageStart = 0;
    };

    $scope.viewAll = function() {
        $scope.pageSize = $scope.directReports.length;
        $scope.currentPage = 1;
        $scope.pageStart = 0;
    };

    $scope.numberOfPages = function(){
        return Math.ceil($scope.directReports.length/$scope.pageSize);
    };
    $scope.nextPage = function(){
        $scope.currentPage = $scope.currentPage + 1;
        $scope.pageStart = $scope.pageStart + $scope.pageSize;
    };
    $scope.previousPage = function(){
        $scope.currentPage = $scope.currentPage - 1;
        $scope.pageStart = $scope.pageStart - $scope.pageSize;
    };

    $scope.goBack = function() {
        window.history.back();
    };
});



multi.controller('editCtrl', function($scope, $routeParams, userData) {
    $scope.edit = true;
    $scope.userId = $routeParams.userId;
    $scope.incomplete = true;
    if ($scope.userId == 'new') {
        $scope.edit = false;
        $scope.newUser = {};
    }
    else {
        $scope.edit = true;
        $scope.newUser = userData.getUser($routeParams.userId);
        $scope.initialValue = angular.copy($scope.newUser);
    }

    $scope.$watch('newUser.fName', function() {$scope.test();});
    $scope.$watch('newUser.lName', function() {$scope.test();});
    $scope.$watch('newUser.title', function() {$scope.test();});
    $scope.$watch('newUser.age', function() {$scope.test();});
    $scope.$watch('newUser.officePhone', function() {$scope.test();});
    $scope.$watch('newUser.cellPhone', function() {$scope.test();});
    $scope.$watch('newUser.email', function() {$scope.test();});
    $scope.$watch('newUser.sex', function() {$scope.test();});


    $scope.test = function() {
        if (!$scope.newUser.fName.length || !$scope.newUser.lName.length || !$scope.newUser.title.length ||
            !$scope.newUser.age.length || !$scope.newUser.officePhone.length ||
            !$scope.newUser.cellPhone.length || !$scope.newUser.email.length || !$scope.newUser.sex.length) {
            $scope.incomplete = true;
        }
        else {
            $scope.incomplete = false;
        }
    };

    $scope.saveUser = function (path) {
        userData.saveUser($scope.newUser);
        userData.go(path);
        $scope.newUser = {};
    };

    $scope.reset = function () {
        angular.copy($scope.initialValue, $scope.newUser);
    }

    $scope.goBack = function() {
        window.history.back();
    };
});