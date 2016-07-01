define([
	'angular',
	'text!htmlModule/common/header/headerDirective.html',
], function(
	angular,
	html) {
	return function(app, elem, attrs, scope) {
		app.directive('testDirective', ['$rootScope', '$window', function($rootScope, $window) {
			return {
				template: html,
				restrict: 'EA',
				replace: true,
				link: function postLink(scope, element, attrs) {
					element.on('click', function(){
						alert('测试指令成功');
					});
				}
			};
		}]);
	}
});