define( [
    'htmlModule/invest/bondDetailCtrl',
    'htmlModule/invest/bondDetailService',
    'jsCommon/imagePagingDirective',
    'text!htmlModule/invest/bondDetail.html',
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