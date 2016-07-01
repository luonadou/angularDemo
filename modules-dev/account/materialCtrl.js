define([
    'angular'
], function(
) {
    return function(app, elem, attrs, scope) {
        app.controller('materialCtrl', ['$scope','cService', function( $scope,cService) {
            $scope.upload = {};
        	$scope.testAct = function(event){
        		var e = event||window.event;
                if(e){elem = e.srcElement || e.target;} 
        		cService.ajax({
        			url:"/resources/interface/accountRecord",
        			elem: elem
        		}).success(function(data,status){
        			
        		})
        	}        	
        }])
    }
});