define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('creditorRightCtrl', ['$scope','navData','httpService', function( $scope,navDate,httpService) {
        	'use strict';

            $scope.title = '债权转让';
            $scope.showTabs = true;
            $scope.showOutSet = false;

            $scope.pageSizes = 5;
            $scope.totals = 100;
        	
            function reset(){
                $scope.showTabs = false;
                $scope.showOutSet = false;
            }
        	
        	
            $scope.getRows = function(page,url){

        		httpService.get({
	                    url: '/resources/interface/bondCanTransfer'
	            }).success(function(data, status, headers, config){
                   // $scope.total = data.total;
	                $scope.data = data.rows;	                
	            }).error(function(data, status, headers, config){
	                console.log(data);
	            })

        	}
            $scope.getRows(1);//初始化显示首页

            $scope.outSet = function(){
                reset();
                $scope.showOutSet = true;
            }

            //return from edit page
            $scope.back = function(){
                reset();
                $scope.showTabs = true;
            }

        }])
    }
});