define( [
    'htmlModule/borrow/borrowCtrl',
    'htmlModule/borrow/borrowService',
    'text!htmlModule/borrow/borrow.html',
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