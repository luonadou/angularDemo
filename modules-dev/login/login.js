define( [
    'htmlModule/login/loginCtrl',
    'text!htmlModule/login/login.html',
], function(
  ctrl,
  html) {
  return function(app, elem, attrs, scope){
    ctrl(app, elem, attrs, scope);
    elem.append(html);
  }
});