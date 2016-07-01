define([
	'angular'
],function(
	angular
){
	return function(app,elem,attrs,scope){
		app.controller('accountRecordCtrl',['$scope','httpService',function($scope,httpService){
			'use strict';
			$scope.data = {} ;
			$scope.pageSerch = function(){
                httpService.get({
                	url : '/resources/interface/accountRecord'
                }).success(function(data, status, header, config){
                	$scope.data = data.result.list;
                }).error(function(data, status, header, config){
                	console.log(data);
                })
			};
			httpService.get({
            	url: '/resources/interface/accountRecord'
            }).success(function(data, status, headers, config){
                $scope.data = data.row;
                $scope.page = 1;
                $scope.total = 10;
                $scope.pageSize = 3;
            }).error(function(data, status, headers, config){
            	console.log(data);
            });
		}]);
	}
});