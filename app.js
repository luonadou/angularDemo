define([	
	'angular',	
	'ngAnimate',
    'uiRouter',
    'jsCommon/configs/config',
    'autoValidate',
    'components',
    'dialog',
    'plupload',
    'qiniu',
    'placeholders',
    'ui'
],function( 
	angular,
	ngAnimate,
    uiRouter,
    config,
    autoValidate,
    components,
    ui
){
	'use strict';

	var appName ="investment",
	    investmentApp = angular.module(appName, [
	    	'ui.router',
	    	'components',
            'jcs-autoValidate',
            'ui'
	    ]);        
	config(investmentApp);    
    investmentApp.run(['$rootScope', '$state', '$stateParams', '$compile', 'G','$location',function($rootScope, $state, $stateParams, $compile,G,$location) {
    	$rootScope.$state = $state;
    	$rootScope.$stateParams = $stateParams;
        $rootScope.user = {name:"",password:"",info:"27",account:"东方不败",user:"陈乔恩",cardbind:false}; 
        // $rootScope.user = {name:"admin",password:"admin"}; 
        // G.init(user, $rootScope, $compile);
    }]).config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider,   $urlRouterProvider){        
    	$urlRouterProvider
    	.otherwise('/home');
    }])


	return {
		start: function(ngAppELem){
			angular.bootstrap(ngAppELem||document, [appName]);
		}
	}
})

