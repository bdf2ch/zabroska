angular
    .module("zabroska")
    .controller(["$log","$scope", "$zabroska", function ($log, $scope) {
        $scope.zabroska = $zabroska;
    }]);