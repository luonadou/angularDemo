require.config({
	baseUrl: window.baseUrl,
	paths: {		
		angular: "resources/plugins/angular/angular.min",
		ngAnimate: "resources/plugins/angular/angular-animate",
		uiRouter: "resources/plugins/angular-ui-router/release/angular-ui-router",
		ui: "resources/plugins/angular-ui/ui",
		components: 'resources/plugins/common/components',
		autoValidate: 'resources/plugins/angular-auto-validate/dist/jcs-auto-validate',
		text: 'resources/plugins/requirejs/text',
		dialog: 'resources/plugins/common/dialog',
		plupload: 'resources/plugins/qiniu/demo/js/plupload/plupload.full.min',
		qiniu: 'resources/plugins/qiniu/demo/js/qiniu',
		echarts: 'resources/plugins/echarts/echarts-plain-original',
		placeholders: 'resources/plugins/common/placeholders'
	},
	packages: [
		{name: "jsCommon",location:"resources/plugins/common"},
		{name: "interface",location:"resources/interface"},
		{name: "htmlModule" ,location:"modules-dev"},
		{name: "appCommon" ,location:"resources/js/common"}
	],
	urlArgs: 'v=' + (window.v || '20151405'),
	waitSeconds: 0,
	shim:{
		angular: {
			exports:"angular"
		},		
		uiRouter: {
			deps: ['angular'],
			exports: 'uiRouter'
		},
		components: {
			deps: ['angular']
		},
		ngAnimate:{
			deps: ['angular']
		},
		autoValidate: {
			deps: ['angular']
		},
		ui:{
			deps: ['angular']
		}
	}
});
require(['app'],function(app){	
	'use strict';
	
	app.start();

	_G.useMockInterface(0);
})

