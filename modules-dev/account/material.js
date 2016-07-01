define( [
    'htmlModule/account/materialCtrl',    
    'text!htmlModule/account/material.html',
    'jsCommon/uploadDirective'
], function(
    ctrl,
    html,
    upload) {
    return function(app, elem, attrs, scope){
        ctrl(app, elem, attrs, scope);
        elem.append(html);
        upload(app, elem, attrs, scope);
    }
});