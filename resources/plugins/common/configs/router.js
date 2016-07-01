define([
	'angular'
], function () {

	return function(app){
		app.config(['$stateProvider', '$urlRouterProvider', 'navData', '$httpProvider', function($stateProvider, $urlRouterProvider, navData, $httpProvider){
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Request-With'];

			var states = [];	
			setState(navData);	
			function setState(navData){
				angular.forEach(navData, function(item,index) {
					var setSubState = {};
					setSubState.name = item.name;					
					setSubState.state = item.state;
					setSubState.url = '/' + item.state;
					setSubState.template = '<div ng-component="htmlModule/'+ item.state +'/'+item.state+'"></div>'	
					states.push(setSubState);
					if(item.subState&&item.subState.length>0){
						angular.forEach(item.subState,function(item,index){	
							var setsubState_2 = {},indexPos;
							setsubState_2.name = item.name;				
							setsubState_2.state = item.state;
							indexPos = item.state.indexOf('.')+1;
							setsubState_2.url = '/'+item.state.substr(indexPos).replace(/\./g,'/');
							setsubState_2.template = '<div ng-component="htmlModule/'+ item.state.replace(/\./g,'/') +'"></div>'	
							states.push(setsubState_2);
						})
					}
			    });	
			}			
		    angular.forEach(states, function(item) {
	    		$stateProvider.state(item.state, {	
	    			name: item.name,    			
					url: item.url,
					template: item.template
				});	
		    });

		}])
		
	
	}
});