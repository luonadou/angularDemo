define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('registerThiCtrl', ['$scope', function( $scope) {
            $scope.countdown = 4;
            var timer = setInterval(function(){
                $scope.countdown--;
                $scope.$apply()
                if($scope.countdown==0){
                	clearInterval(timer);
                	//执行跳转页面************************************
                }
            },1000)
        }])
    }
});