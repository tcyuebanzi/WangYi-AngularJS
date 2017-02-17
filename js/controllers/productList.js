/**
 * Created by hxsd on 2016/9/22.
 */


myapp.controller("productCtrl", function ($scope) {

    $scope.pageNum = 1; //当前请求页码数
    $scope.pageSize =6; //页码大小
    //分页跳转--------------
    $scope.selectPage = function (page) {
        $scope.pageNum = page;
    };
    //上一页------------------
    $scope.upPage = function () {
        if ( $scope.pageNum>1){
           $scope.pageNum--;
        }else {
            $scope.pageNum=1;
        }
    };
    //下一页-----------
    $scope.downPage = function () {
        if ($scope.pageNum<$scope.product.length/$scope.pageSize){
           $scope.pageNum++;
        }else {
            $scope.pageNum=Math.ceil($scope.product.length/$scope.pageSize);
        }
    };
        //点赞------------
    $scope.praise= function (n) {
        $scope.product[n+($scope.pageNum-1)*$scope.pageSize].zan=1;

    };
    //点踩-------------
    $scope.tread= function (n) {
        $scope.product[n+($scope.pageNum-1)*$scope.pageSize].cai=1;
    };

    //顶部发帖弹窗-------------
    $scope.pushPost = function () {
        //alert($scope.name)
        $scope.info={
            name:$scope.name,
            city:"北京移动用户",
            text:$scope.post,
            date:new Date(),
            img:"images/20160119200737_Ynyfc.jpeg",
            assist:0,
            noassist:0,
            "zan":true,
            "cai":true
        };
        //判断是否输入内容
        if($scope.post=="" || $scope.post==undefined){
            alert("请输入发表内容")
        }else if($scope.name=="" || $scope.name==undefined || $scope.passwd==undefined ){ //判断是否登录
            alert("请登录")
        }else {
            $scope.product.unshift( $scope.info)
            $scope.post="";
            $scope.pageNum = 1
        }
    };

    //底部发帖栏-----------
    $scope.pushPosto = function () {
        //alert($scope.name)
        $scope.info={
            name:$scope.nameo,
            city:"北京移动用户",
            text:$scope.posto,
            date:new Date(),
            img:"images/u=2056349911,118127238&fm=21&gp=0.jpg",
            assist:0,
            noassist:0,
            "zan":0,
            "cai":0
        };
        if($scope.posto=="" || $scope.posto==undefined){
            alert("写字")
        }else if($scope.nameo=="" || $scope.nameo==undefined || $scope.passwdo==undefined ){
            alert("请登录")
        }else {
            $scope.product.unshift( $scope.info)
            $scope.posto=""
            $scope.pageNum = 1
        }
    }

});