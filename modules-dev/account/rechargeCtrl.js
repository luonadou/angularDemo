define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('rechargeCtrl', ['$scope','httpService','$http', function( $scope,httpService,$http) {
            'use strict';
            $scope.data={};
            $scope.balance = 800.33;
            $scope.bank="农业银行";
            $scope.cardNo="6228***********3614";
            $scope.bankKind="储蓄卡";
            $scope.submit = function(form){
                if(form.$valid){

                }
            } 
        	$scope.pageSerch = function(page){
                httpService.get({
                        url: '/resources/interface/recharge'
                }).success(function(data, status, headers, config){
                    $scope.data = data.result.list;                 
                }).error(function(data, status, headers, config){
                    console.log(data);
                })

            }
            httpService.get({
                url: '/resources/interface/recharge'
            }).success(function(data, status, headers, config){
                $scope.data = data.row;
                $scope.page = 1;
                $scope.total = 10;
                $scope.pageSize = 3;
            }).error(function(data,status,headers,config){
                console.log(data);
            })
           
        }])
    }
});