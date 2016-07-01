define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('withdrawlsCtrl', ['$scope','httpService' ,function( $scope,httpService) {
            'use strict' ;
            $scope.data = {};
            $scope.submit = function(form){
                if(form.$valid){
                    
                }
            }
            $scope.getData = function(){
            	httpService.get({
            		url: '/resources/interface/withdraw'
            	}).success(function(data, status, headers, config){
            		$scope.data = data.result.list;
            	}).error(function(data, status, headers, config){
            		console.log(data);
            	})
            };
            httpService.get({
            	url: '/resources/interface/withdraw'
            }).success(function(data, status, headers, config){
                $scope.data = data.row;
                $scope.page = 1;
                $scope.total = 10;
                $scope.pageSize = 3;
            }).error(function(data, status, headers, config){
            	console.log(data);
            })
        }])
    }
});