define([
    'angular'
], function(angular) {
  
    return function(app, elem, attrs, scope) {
        app.controller('messageCtrl',function($scope,cService) {
        	'use strict';
            $scope.url = '/resources/interface/message';
            $scope.page = 1;
            $scope.pageSize = 10;
            $scope.getRows = function(page,type){
                cService.ajax({
                    url : $scope.url,
                    method : 'get',
                    params : {
                        page : page,
                        pageSize : $scope.pageSize,
                        type : type != undefined ? type : -1
                    }
                }).success(function(response){
                    $scope.data = response.rows;
                    $scope.total = response.total;
                })
            };

            function getCheckedRows(){
                var arr = [];
                angular.forEach($scope.data,function(item,index){
                    if (item.checked){
                        arr.push(item.id);
                    }
                });
                return arr;
            }
            $scope.deleteRow = function(id){

                var arr = getCheckedRows();
                if (arr.length > 0){
                    confirm('确定要删除选中项吗？',{
                        buttons:'default',
                        showClassName : 'confirm-dialog',
                        callBack : function(){
                            cService.ajax({
                                url : $scope.url,
                                method : 'get',
                                data : {
                                   id : arr
                                }
                            }).success(function(response){
                                 $scope.getRows($scope.page);
                            })
                        }
                    })                
                }
            }

            $scope.signRow = function(status){
                var arr = getCheckedRows();
                if (arr.length > 0){
                    cService.ajax({
                        url : $scope.url,
                        method : 'put',
                        data : {
                           id : arr,
                           status : status
                        }
                    }).success(function(response){
                         $scope.getRows($scope.page);
                    }) 
                }
            }
            
            $scope.expandRow = function(item,expand){
               item.expand = expand;
            }
           
            $scope.checkedAll = function(checked){
                angular.forEach($scope.data,function(item,index){
                    item.checked = checked;
                })
                $scope.bAll = checked;
             
            }

            //initialize
            $scope.getRows(1);
           
        })
        app.factory('service',[function(){
            return {
               
            }
        }])
    }
});