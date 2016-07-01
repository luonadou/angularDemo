define( [
     'htmlModule/home/homeCtrl',
     'htmlModule/account/accountService',
    'text!htmlModule/home/home.html',
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