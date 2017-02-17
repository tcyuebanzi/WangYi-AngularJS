
//创建主模块
var myapp = angular.module("myapp",["marsFilter"]);

//注册主控制器
myapp.controller("myCtrl", function ($scope,$http) {

    $scope.menuState = {'show':true};
    $scope.showCommet = function () {

        $scope.menuState.show = !$scope.menuState.show;
    };

    //$http获取json数据
    $http({url:"data.json"}).success(function (data) {
        $scope.product = data;
    });

});