define([
	'angular',
], function (angular) {
	return function(app){	
		app.config(['$compileProvider', '$controllerProvider', '$provide', '$httpProvider', function($compileProvider, $controllerProvider, $provide, $httpProvider) {
			$httpProvider.interceptors.push('testIntercepter');
		}]).factory('testIntercepter', ['$q', 'G', function($q, G){
			var testIntercepter = {
				request: function(config){			
					this.currentElem = config.elem;
					var angularElem = angular.element(this.currentElem);
					angularElem.css('pointer-events','none');
					angularElem.attr('disabled','disabled');
					if(!_G.interfaceType){
						var pos = config.url.lastIndexOf('/')+1;
						config.url = '/resources/interface/' + config.url.substr(pos) + '.json';
					}								
					return config;
				},
				response: function(res){
					var data = res.data;
					if(res.status==200){
						var angularElem = angular.element(this.currentElem);
						angularElem.css('pointer-events','');
						angularElem.attr('disabled','');						
						if(this.currentElem&&this.currentElem.removeAttribute){
							this.currentElem.removeAttribute('disabled');
						}
						
					}
					if(data && data.apistatus == 0 && (data.result.errorCode === 40000 || data.result.error_code === 40000)){
						_G.jumpLogin();		
						return false;
					}
					return res;	
				},
				requestError: function(rejection){
			
					return $q.reject(rejection);
				},
				responseError: function(rejection){
					return $q.reject(rejection);
				}
			};		
			return testIntercepter;
		}])
	}
});

