define( [
    'htmlModule/account/paymentCtrl',
    'htmlModule/account/paymentService',
    'text!htmlModule/account/payment.html',
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
