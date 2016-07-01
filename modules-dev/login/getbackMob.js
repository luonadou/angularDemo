define( [
    'htmlModule/login/getbackMobCtrl',
    'text!htmlModule/login/getbackMob.html',
], function(
  ctrl,
  html) {
  return function(app, elem, attrs, scope){
    ctrl(app, elem, attrs, scope);
    elem.append(html);
  }
});