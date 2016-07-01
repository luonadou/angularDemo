define([
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {

        app.controller('bondDetailCtrl', ['$scope','cService', function( $scope,cService) {
          	var images = [
          		'http://tse2.mm.bing.net/th?id=OIP.Mb0b98f98e5c1bca86609e1f264b5d224H0&w=197&h=148&c=7&rs=1&qlt=90&o=4&pid=1.1',
          		'http://tse2.mm.bing.net/th?id=OIP.Mb0b98f98e5c1bca86609e1f264b5d224H0&w=197&h=148&c=7&rs=1&qlt=90&o=4&pid=1.1',
          		'http://tse2.mm.bing.net/th?id=OIP.Mb0b98f98e5c1bca86609e1f264b5d224H0&w=197&h=148&c=7&rs=1&qlt=90&o=4&pid=1.1',
          		'http://tse2.mm.bing.net/th?id=OIP.Mb0b98f98e5c1bca86609e1f264b5d224H0&w=197&h=148&c=7&rs=1&qlt=90&o=4&pid=1.1',
          		'http://tse2.mm.bing.net/th?id=OIP.Mb0b98f98e5c1bca86609e1f264b5d224H0&w=197&h=148&c=7&rs=1&qlt=90&o=4&pid=1.1'
          	]
          	
          	$scope.pageSize = 3;         	
          	$scope.pagingAction = function(page){
          		$scope.imageData = [];
          		for(var i = (page - 1) * $scope.pageSize; i < page* $scope.pageSize ; i++){
          			if (!images[i]) break;
          			$scope.imageData.push({src : images[i]});
          		}
          		$scope.total = images.length;
          	}

          	$scope.recordPageSize = 10;
          	                     
            $scope.getRecords = function(page){
                cService.ajax({
                    url : '/resources/interface/bondCanTransfer',
                    method : 'get',
                    params : {
                        page : page,
                        pageSize : $scope.recordPageSize
                    }
                }).success(function(response){
                    $scope.borrowRecords = response.rows;
                    $scope.recordTotal = 20;
                })
            };
          	$scope.pagingAction(1);
          	$scope.getRecords(1);

            $scope.options = [{text:'红包a'},{text:'红包b'},{text:'红包c'}];
            $scope.options2 = [{text:'红包1'},{text:'红包2'},{text:'红包3'}];

            $scope.redpacketList=[{value:15},{value:15},{value:15},{value:15}]
        }])
    }
});