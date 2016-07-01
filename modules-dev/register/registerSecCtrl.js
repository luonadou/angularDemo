define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('registerSecCtrl', ['$scope', function( $scope) {
            $scope.email = "lxt000@qq.com" ;
        }])
    }
});