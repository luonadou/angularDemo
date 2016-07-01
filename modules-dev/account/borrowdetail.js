define( [
    'htmlModule/account/borrowdetailCtrl',
    'htmlModule/account/borrowdetailService',
    'text!htmlModule/account/borrowdetail.html',
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
