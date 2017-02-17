/**
 * Created by hxsd on 2016/9/22.
 */

//创建一个新的模块，在这个模块中定义新的过滤器


angular.module("marsFilter",[]);

//在该模块中注册一个分页的过滤器
angular.module("marsFilter").filter("pagerFilter", function () {

    //过滤函数接受三个参数
    //参数一：被过滤的数组（商品集合）
    //参数二：请求的页码
    //参数三：页码大小
    return function (productList,pageNum,pageSize) {

        if(angular.isArray(productList) && angular.isNumber(pageNum) && angular.isNumber(pageSize)){
            //根据分页算法，计算请求页面数据的起始索引
            var starIndex = (pageNum-1)*pageSize;

            if(starIndex>=productList.length){
                return [];
            }
            return productList.slice(starIndex,starIndex+pageSize)
        }else {
            return productList
        }
    }
})
    .filter("pageNavFilter", function () {
        return function (productList,pageSize) {

            if(angular.isArray(productList) && angular.isNumber(pageSize)){
            //计算页码
                var pageNumber = Math.ceil(productList.length/pageSize);
                //声明一个新数据，并返回
                var nav = [];
                for (var i=0;i<pageNumber;i++){
                   nav.push(i+1)   // nav => [1,2,3,4]
                }
                return nav;
            }else {
                return productList
            }
        }
    });


















