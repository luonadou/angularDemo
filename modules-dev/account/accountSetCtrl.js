define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('accountSetCtrl', ['$scope','$rootScope','$state','$window', function( $scope,$rootScope,$state,$window) {
        	$scope.user = {name:"",password:"",info:"27",account:"东方不败",user:"陈乔恩"};
            $scope.email="156@qq.com";
            $scope.getcode = function(){
                //发送验证码的代码*****************************
                var oA = document.getElementById('getcode');
                oA.setAttribute("disabled","true");
                var i=60;
                oA.value = "(60)秒后重新获取";
                var timer = setInterval(function(){
                    i--;
                    oA.value = "(" + i + ")秒后重新获取" ;
                    if(i==0){
                        clearInterval(timer);
                        oA.value = "发送验证邮件";
                        oA.removeAttribute("disabled");
                    }
                },1000);
            }
        }])
    }
});