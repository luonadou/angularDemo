define([
    'angular',
    'echarts'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('myaccountCtrl', function( $scope,cService) {
        	'use strict';
        	$scope.isBorrower = false;
            $scope.isInvestor = true;

            $scope.process = '100%';

            $scope.url = '/resources/interface/bondCanTransfer';
            $scope.page = 1;
            $scope.pageSize = 5;

            
          
            $scope.getRows = function(page){
                cService.ajax({
                    url : $scope.url,
                    method : 'get',
                    params : {
                        page : page,
                        pageSize : $scope.pageSize
                    }
                }).success(function(response){
                    $scope.data = response.rows;
                })
            };

            $scope.investChartOptions = {};

            $scope.getInvestChartData = function(){
                cService.ajax({
                    url : '/resources/interface/investChartData',
                    method : 'get'
                }).success(function(data){
                    $scope.investChartOptions = {
                        color  : ['#5eccff'],
                        tooltip: {
                            show: true
                        },
                        grid: {
                            x:0,
                            y:20,
                            x2:0,
                            y2:20,
                            borderWidth : 0
                        },
                        xAxis : [
                            {
                                type : 'category',
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show : false
                                },
                                splitLine : false,
                                data : data.dates
                            }
                        ],
                        yAxis : [
                            {
                                'type':'value',
                                'name':'金额（元）',
                                axisLine: {
                                    show: false
                                },
                                splitLine : false,

                            }
                        ],
                        series : [
                            {
                                "name":"金额（元）",
                                "type":"line",
                                "data":data.accounts
                            }
                        ]
                    };
                })
            }

            $scope.getRows(1);
            $scope.getInvestChartData();

        });
        app.directive('echarts',function(){
            return {
                scope: {
                    options: '='
                },
                link: function(scope, elm, attrs){

                     var myChart = echarts.init(elm[0]);
                     scope.$watch('options',function(){
                        scope.options && myChart.setOption(scope.options); 
                     });
                }
            }
        });
    }
});