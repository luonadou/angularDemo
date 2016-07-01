define( [
    'htmlModule/invest/borrowDetailCtrl',
    'htmlModule/invest/borrowDetailService',
    'jsCommon/imagePagingDirective',
    'text!htmlModule/invest/borrowDetail.html',
], function(
    ctrl,
    service,
    imagePagingDirective,
    html) {
    return function(app, elem, attrs, scope){
        ctrl(app, elem, attrs, scope);
        service(app, elem, attrs, scope);
        imagePagingDirective(app, elem, attrs, scope);
        elem.append(html);
    }
});