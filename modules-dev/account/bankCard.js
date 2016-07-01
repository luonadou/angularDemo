define( [
    'htmlModule/account/bankCardCtrl',        
    'text!htmlModule/account/bankCard.html',
    'jsCommon/areaDirective'
], function(
    ctrl,
    html,
    area) {
    return function(app, elem, attrs, scope){
        ctrl(app, elem, attrs, scope);
        elem.append(html);
        area(app, elem, attrs, scope);
    }
});