define([
	'htmlModule/safeguard/safeguardCtrl',
	'text!htmlModule/safeguard/safeguard.html'
],function(
     ctrl,
     html){
	return function(app,elem,attrs,scope){
		ctrl(app,elem,attrs,scope);
		elem.append(html);
	}
});