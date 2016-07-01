define( [
	'angular'
], function () {

	return function(app){
		app.factory('httpService', ['$rootScope', '$http', function($rootScope, $http) {
			return{
				post: function(obj){
                    var posts = transformJson(posts);                    
                    return $http({
                        method: 'post',
                        url: obj.url,
                        data: obj.data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });
                },
                get: function(obj) {
                    return $http({
                        method: 'get',
                        url: obj.url,
                        params: obj.params
                    });
                }
			}

			function transformJson(obj) {
                var str = [];
                for(var p in obj){
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                return str.join("&");
            }
		}]).factory('cService',['$http',function($http){
            var service = {
                deepExtend : function(destination, source) {
                    for (var property in source) {
                        if (source[property] && source[property].constructor &&
                            source[property].constructor === Object) {
                            destination[property] = destination[property] || {};
                            arguments.callee(destination[property], source[property]);
                        } else {
                          destination[property] = source[property];
                      }
                  }
                  return destination;
                },
                ajax : function(opts){
                    var defaultOptions = {
                        method: 'get', 
                        headers: {'Content-Type': 'application/json'}
                    }
                    opts = service.deepExtend(defaultOptions,opts);
                    return $http(opts);
                    
                }
            }
            return service;
        }]);
	}
});

