define([
	'angular'
],function(){
	return function(app,elem,attrs,scope){
		app.controller('checkEmaCtrl',['$scope','$rootScope','$state','$window', function( $scope,$rootScope,$state,$window){
			$scope.user = {name:"",password:"",info:"27",account:"东方不败",user:"陈乔恩"};
			$scope.email = "407058438@qq.com";
			$scope.getCode = function(){
				//给出验证码的代码段 ,且禁止按按钮
				var oA = document.getElementById('getcode');
				oA.setAttribute('disabled','false');
				var str = "秒后重新获取";
				var i = 60;
				var timer= setInterval(function(){
                    oA.value = i + str ;
                    i--;
                    if(i<0){
                    	clearInterval(timer);
                        oA.value = "获取验证码" ;
                        oA.removeAttribute('disabled');
                        return ;
                    }
				},1000);
			}
			$scope.submit = function(){
				if(form.$valid){

				}
			}
		}])
	}
})