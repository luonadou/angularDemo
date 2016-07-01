define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('registerCtrl', ['$scope','regularExpression' function( $scope,regularExpression) {
            $scope.init = {};
            $scope.init.regularExpression = regularExpression;
        }])
    }
});