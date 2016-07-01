define([
    'htmlModule/login/checkPswCtrl',
    'text!htmlModule/login/checkPsw.html'
],function(
    ctrl,
    html){
    return function(app,elem,attrs,scope){
    	ctrl(app,elem,attrs,scope);
    	elem.append(html);
    }
})