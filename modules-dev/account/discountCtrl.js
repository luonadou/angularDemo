define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('discountCtrl', ['$scope','navData','httpService', function( $scope,navDate,httpService) {
        	'use strict';
            $scope.navDate = navDate[0].subState;
            //加息券
            $scope.couponPage = 1;
            $scope.couponPageSize = 3;
            $scope.couponPageSearch = function(page){
                httpService.get({
                        url: '/resources/interface/test_rxj'
                }).success(function(data, status, headers, config){
                    $scope.couponData = data.result.list;  
                    $scope.couponTotal = 10;               
                }).error(function(data, status, headers, config){
                    console.log(data);
                })

            }
            $scope.couponPageSearch(1);

            //红包
            $scope.packagePage = 1;
            $scope.packagePageSize = 3;
            $scope.packagePageSearch = function(page){
                httpService.get({
                        url: '/resources/interface/test_rxj'
                }).success(function(data, status, headers, config){
                    $scope.packageData = data.result.list;           
                    $scope.packageTotal = 10;
                }).error(function(data, status, headers, config){
                    console.log(data);
                })

            }
            $scope.packagePageSearch(1);

        }])
    }
});