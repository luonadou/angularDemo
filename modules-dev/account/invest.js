define( [
    'htmlModule/account/investCtrl',
    'htmlModule/account/investService',
    'text!htmlModule/account/invest.html',
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
