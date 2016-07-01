define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('investCtrl', ['$scope','navData','cService', function( $scope,navDate,cService) {
        	'use strict';
        	$scope.navDate = navDate[0].subState;
            // 投资列表
        	$scope.investPage = 1;
            $scope.investPageSize = 3;
            $scope.investTotal = 12;
        	$scope.investPageSearch = function(page){
                cService.ajax({
                        method : 'get',
                        url: '/resources/interface/index-rxj1'
                }).success(function(data, status, headers, config){
                    $scope.investTotal = 12; 
                    $scope.investData = data.result.list;  
            
                }).error(function(data, status, headers, config){
                    console.log(data);
                })

            }
            $scope.investPageSearch(1);
            $scope.value1 = -1;
            $scope.value2 = -1;
            $scope.value3 = -1;
            function request(){
                cService.ajax({
                        method: 'get',
                        params:{
                            value1:$scope.value1,
                            value2:$scope.value2,
                            value3:$scope.value3
                        },
                        url: '/resources/interface/index-rxj1'
                }).success(function(data, status, headers, config){
                    $scope.investData = data.result.list;  
                    $scope.investTotal = 12;   
                }).error(function(data, status, headers, config){
                    console.log(data);
                })
            }
            $scope.switchAction1 = function(value){
                $scope.value1 = value;
                request();	
            }
            $scope.switchAction2 = function(value){
                $scope.value2 = value;
                request();  
            }
            $scope.switchAction3 = function(value){
                $scope.value3 = value;
                request();  
            }
            // 债权列表
            $scope.bondPage = 1;
            $scope.bondPageSize = 3;
            $scope.bondTotal = 12;  
            $scope.bondPageSearch = function(page){
                cService.ajax({
                        method : 'get',
                        url: '/resources/interface/index-rxj1'
                }).success(function(data, status, headers, config){
                    $scope.bondTotal = 12;  
                    $scope.bondData = data.result.list;  
                }).error(function(data, status, headers, config){
                    console.log(data);
                })

            }
            $scope.bondPageSearch(1);
        
        }])
    }
});