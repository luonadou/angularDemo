define( [
    'htmlModule/account/accountCtrl',
    'htmlModule/account/accountService',
    'jsCommon/opPagingDirective',
    'text!htmlModule/account/account.html',
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