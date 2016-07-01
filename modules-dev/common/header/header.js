
define( [
    'htmlModule/common/header/headerCtrl',
    'htmlModule/common/header/headerDirective',
    'htmlModule/common/header/headerService',
    'text!htmlModule/common/header/header.html'
], function(
    ctrl,
    directive,
    service,
    html
) {
return function(app, elem, attrs, scope){

      ctrl(app, elem, attrs, scope);
      directive(app, elem, attrs, scope);
      service(app, elem, attrs, scope);
      elem.append(html);
    }
});