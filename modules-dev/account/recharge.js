define( [
    'htmlModule/account/rechargeCtrl',
    // 'htmlModule/account/accountRechargeDirective',
    // 'htmlModule/account/navDate.account',
    'htmlModule/account/rechargeService',
    'text!htmlModule/account/recharge.html',
], function(
  ctrl,
  // directive,
  // navDate,
  service,
  html) {
  return function(app, elem, attrs, scope){
    ctrl(app, elem, attrs, scope);
    // directive(app, elem, attrs, scope);
    // navDate(app, elem, attrs, scope);
    service(app, elem, attrs, scope);
    elem.append(html);
  }
});