define([
    'angular'
],function(
   
){
	return function(app,elem,attrs,scope){
        app.controller('modifyPswCtrl',['$scope','httpService',function($scope,httpService){
        	'use strict';
             $scope.submit = function(form){
             	if(form.$valid){

             	}
             }
        }])
	}
})