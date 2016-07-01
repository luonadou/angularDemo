define([
    'angular'
], function(
) {
    return function(app, elem, attrs, scope) {
        app.controller('shareCtrl', ['$scope', '$window',function( $scope,$window) {
        	$scope.backTop = document.getElementById('backTop');
        	$scope.goTop = function(){
        		window.scrollTo(0,0);
        	}
        	angular.element($window).bind('scroll',function(){  
        		var scrollDis = window.scrollY || window.pageYOffset||document.documentElement.scrollTop ;  
        		if(scrollDis >= 100 ){
        			$scope.backTop.style.display = "block"
        		}else{        			
        			$scope.backTop.style.display = "none"
        		}
        	})
        	
        }])
    }
});