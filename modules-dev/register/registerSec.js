define( [
    'htmlModule/register/registerSecCtrl',
    'htmlModule/register/registerSecService',
    'text!htmlModule/register/registerSec.html',
], function(
    ctrl,
    service,
    html) {
    return function(app, elem, attrs, scope){
        ctrl(app, elem, attrs, scope);
        service(app, elem, attrs, scope);
        elem.append(html);
    }
});