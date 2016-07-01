define( [
    'htmlModule/invest/investCtrl',
    'htmlModule/invest/investService',
    'jsCommon/opPagingDirective',
    'text!htmlModule/invest/invest.html',
], function(
    ctrl,
    service,
    opPagingDirective,
    html) {
    return function(app, elem, attrs, scope){
        ctrl(app, elem, attrs, scope);
        service(app, elem, attrs, scope);
        opPagingDirective(app, elem, attrs, scope);
        elem.append(html);
    }
});