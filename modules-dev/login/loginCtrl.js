define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('loginCtrl', ['$scope','$rootScope','$state','$window','cService' ,function( $scope,$rootScope,$state,$window,cService) {
        	$scope.user = {name:"",password:"",info:"27",account:"东方不败",user:"陈乔恩"};
        	// $scope.submit = function(){
        	// 	$rootScope.user.name = $scope.user.name;
        	// 	$rootScope.user.password = $scope.user.password;
        	// 	$scope.$window = $window;
        	// 	$window.history.back();
        	// }
            $scope.submit = function(event){
                console.log(event);
                var e = event||window.event;
                    elem = e.srcElement || e.target;
                cService.ajax({
                    url:"/resources/interface/accountRecord",
                    elem: elem
                }).success(function(data,status){
                    // angular.element(elem).removeClass('disabled');
                })
            }  
        }])
    }
});