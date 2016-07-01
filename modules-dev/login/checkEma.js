define([
    'htmlModule/login/checkEmaCtrl',
    'text!htmlModule/login/checkEma.html'
],function(
    ctrl,
    html){
    return function(app,elem,attrs,scope){
    	ctrl(app,elem,attrs,scope);
    	elem.append(html);
    }
})