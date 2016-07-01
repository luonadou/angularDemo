define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('payAccountCtrl', ['$scope','navData','httpService', function( $scope,navDate,httpService) {
        	'use strict';
            $scope.id = '330327198810011852';
            $scope.name = 'yjz';
            $scope.submit = function(form){
               if (form.$valid){

               }

            }
           

        }])
    }
});