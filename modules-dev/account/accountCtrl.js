define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('accountCtrl', ['$scope','navData','$rootScope', function( $scope,navDate,$rootScope) {
        	$scope.navDate = navDate[0].subState;
        	
        }])
    }
});