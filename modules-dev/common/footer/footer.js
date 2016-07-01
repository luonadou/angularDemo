
define( [
    'htmlModule/common/footer/footerCtrl',
    'htmlModule/common/footer/footerService',
    'text!htmlModule/common/footer/footer.html'
], function(
    ctrl,
    service,
    html
) {
return function(app, elem, attrs, scope){
      ctrl(app, elem, attrs, scope);
      service(app, elem, attrs, scope);
      elem.append(html);
    }
});