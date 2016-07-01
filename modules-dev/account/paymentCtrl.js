define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('paymentCtrl', ['$scope','navData','httpService', function( $scope,navDate,httpService) {
            'use strict';
            var previousState = 1;//prevous tab state          
            $scope.navDate = navDate[0].subState;
            $scope.hidePage = false;//hide the pagingDirective
            $scope.type = 1;//type for request url
            $scope.page = 1;
            $scope.pageSize = 8;
            var tab = $scope.tab ={
                cont1 : true,
                cont2 : false,
            }
            function resetState(){
                tab.cont1 = false;
                tab.cont2 = false;
                $scope.hidePage = false;        
            }
            $scope.tabSearch = function(num){
                resetState();
                tab['cont'+num] = true;
                $scope.page = 1;
                $scope.pageSearch(1);
                //save previous tab state for return function
                previousState = num;
            }
            
            
            $scope.pageSearch = function(page){
                httpService.get({
                        url: '/resources/interface/test_rxj'
                }).success(function(data, status, headers, config){
                    $scope.total = 10;
                    $scope.data = data.result.list;                   
                }).error(function(data, status, headers, config){
                    console.log(data);
                })

            }
            $scope.pageSearch(1);//初始化显示首页

            //return from edit page
            $scope.tabReturn = function(){
                resetState();
                tab['cont' + previousState] = true;
            }

        }])
    }
});