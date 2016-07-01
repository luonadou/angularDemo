define( [
    'htmlModule/register/registerThiCtrl',
    'text!htmlModule/register/registerThi.html',
], function(
    ctrl,
    html) {
    return function(app, elem, attrs, scope){
        ctrl(app, elem, attrs, scope);
        elem.append(html);
    }
});