define([
    'htmlModule/account/accountSetCtrl',
    'text!htmlModule/account/accountSet.html'
],function(ctrl,
	html){
	return function(app,elem,attrs,scope){
		ctrl(app,elem,attrs,scope);		
		elem.append(html);
	}
});