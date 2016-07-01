define([
    'angular'
], function(
) {
    return function(app, elem, attrs, scope) {
        app.controller('bankCardCtrl', ['$scope','cService','$rootScope', function( $scope,cService,$rootScope) {
            $scope.formData = {}
            $scope.formData.province = '北京';
            $scope.formData.city = '海淀区';
            $scope.bankListView = false;
            $scope.bankList = [
                "北京银行",
                "工商银行",
                "招商银行"
            ];
            if($rootScope.user.cardbind){
                $scope.formShow = false;
                $scope.cardShow = true;
            }else{
                $scope.formShow = true;
                $scope.cardShow = false;
            }
            // $rootScope.user.cardbind?$scope.formShow = false;$scope.cardShow = true:$scope.formShow = true;$scope.cardShow = false;
            // $scope.format = function(num){
            //     if(num==1){
            //         $scope.formData.accountview = $scope.formData.accountview.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
            //         $scope.formData.account = $scope.formData.accountview.replace(/\s/g,'')
            //     }else if(num==2){                    
            //         $scope.formData.confirmAccount = $scope.formData.confirmAccount.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
            //     }                
                              
            // }
            $scope.searchBank = function(){
                $scope.bankListView = true;
                cService.ajax({
                    url: "",
                    method: "POST",
                    data: 'keyWord='+$scope.formData.bank
                }).success(function(data, status, headers, config){
                    $scope.bankList = data.list;
                })
            }
            $scope.selectBank = function(elem){
                $scope.formData.bank = elem.item;
                $scope.bankListView = false;
            }
            $scope.submit = function(event){
                var e = event||window.event;
                    elem = e.srcElement || e.target;
                cService.ajax({
                    url:"/resources/interface/accountRecord",
                    elem: elem
                }).success(function(data,status){
                    angular.element(elem).removeClass('disabled');
                    $scope.formShow = false;
                    $scope.cardShow = true;
                })
            }  
            $scope.testAct = function(event){
                var e = event||window.event;
                    elem = e.srcElement || e.target;
                cService.ajax({
                    url:"/resources/interface/accountRecord",
                    elem: elem
                }).success(function(data,status){
                    angular.element(elem).removeClass('disabled');
                })
            }           
        }])
    }
});