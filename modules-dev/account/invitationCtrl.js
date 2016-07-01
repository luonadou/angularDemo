define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('invitationCtrl', ['$scope','navData','httpService', function( $scope,navDate,httpService) {
        	'use strict';
        	$scope.navDate = navDate[0].subState;
            $scope.txt="http://localhost:9000/modules-dev/#/account/invitation";
        	$scope.pageSerch = function(page){
        		httpService.get({
	                    url: '/resources/interface/test_rxj'
	            }).success(function(data, status, headers, config){
	                $scope.data = data.result.list;	                
	            }).error(function(data, status, headers, config){
	                console.log(data);
	            })

        	}
        	httpService.get({
                    url: '/resources/interface/test_rxj'
            }).success(function(data, status, headers, config){
                $scope.data = data.result.list;
                $scope.status = data.result.list.status;
                $scope.page = 1;
                $scope.total = 10;
                $scope.pageSize = 3;
            }).error(function(data, status, headers, config){
                console.log(data);
            })
                 　  var clip = new ZeroClipboard( document.getElementById("d_clip_button"), {
                  moviePath: "/modules-dev/account/ZeroClipboard.swf"
                } );
    // 复制内容到剪贴板成功后的操作
                clip.on( 'complete', function(client, args) {
                   alert("复制成功，复制内容为："+ args.text);
                } );
            $scope.copy=function(){
       

            
           
            }
           
        }])
    }
});