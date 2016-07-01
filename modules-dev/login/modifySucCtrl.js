define([
	'angular'
],function(){
	return function(app,elem,attrs,scope){
		app.controller('modifySucCtrl',['$scope','$rootScope','$state','$window', function( $scope,$rootScope,$state,$window){
			$scope.user = {name:"",password:"",info:"27",account:"东方不败",user:"陈乔恩"};
			
		}])
	}
})