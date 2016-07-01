define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('homeCtrl', ['$scope','navData','httpService', function( $scope,navDate,httpService) {
        	'use strict';
        	$scope.navDate = navDate[0].subState;
        	$scope.webtip="工商银行、农业银行、中国银行系统维护的公告";
        	httpService.get({
                    url: '/resources/interface/index-rxj'
            }).success(function(data, status, headers, config){
                $scope.data = data.result.list;
                $scope.status = data.result.list.status;
                
                
            }).error(function(data, status, headers, config){
                console.log(data);
            })

        }])
    }
});