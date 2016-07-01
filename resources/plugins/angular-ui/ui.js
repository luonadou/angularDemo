/* commonjs package manager support (eg componentjs) */

var test;
(function(angular){
	'use strict'
	angular.module('ui',[]);
}(angular));
(function(angular){
	'use strict'
	angular.module('ui')
	.factory('browserInfo',[function(){
		var agent = navigator.userAgent.toLowerCase(),
			regStr_ie = /msie [\d.]+;/gi ,
			regStr_ff = /firefox\/[\d.]+/gi,
			regStr_chrome = /chrome\/[\d.]+/gi,
			regStr_saf = /safari\/[\d.]+/gi ;
		//IE
		if(agent.indexOf("msie") != -1)
		{
		return agent.match(regStr_ie)[0];
		}

		//firefox
		if(agent.indexOf("firefox") != -1)
		{
		return agent.match(regStr_ff)[0] ;
		}

		//Chrome
		if(agent.indexOf("chrome") != -1)
		{
		return agent.match(regStr_chrome)[0];
		}

		//Safari
		if(agent.indexOf("safari") != -1 && agent.indexOf("chrome") == -1)
		{
		return agent.match(regStr_saf)[0] ;
		}
	}])
	.factory("regularExpression",[function(){
		var regularExpression;
		return regularExpression = {
			name: /^[a-zA-Z0-9]{3,16}$/,
			mobile: /^1[3|5|4|7|8]\d{9}$/,
			password: /(?![a-zA-Z]+$)(?![0-9]+$)[a-zA-Z0-9]{6-16}$/,
			email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
		}
	}])
	.factory("regularErrorInfo",[function(){
		var regularErrorInfo;
		return regularErrorInfo = {
			name: '用户名格式有误',
			mobile: "手机格式有误",
			password: "密码格式有误",
			email: "邮箱格式有误" 
		}
	}])
	.directive('uiTab',function(){
		/**
		* active-class="active" 活动标签样式
		* active-index="0" 初始化活动标签索引
		<div ui-tab active-class="active" active-index="0">
			<ul><li><a href="">标签一</a></li><li><a href="">标签二</a></li><li><a href="">标签三</a></li></ul>
			<div>
				<div>内容一</div>
				<div>内容二</div>
				<div>内容三</div>
			</div>
		</div>*/
		return {
			restrict: 'EA',
			scope:{
				activeClass :'@activeClass',
				activeIndex :'@activeIndex'
			},
			replace: false,
			link: function($scope,elem,attrs){
				var $childs = elem.children(), $navs = $childs.eq(0).children(), $conts = $childs.eq(1).children(),len = $navs.length,
					activeIndex = $scope.activeIndex||0,
					activeClass = $scope.activeClass||0,
					preActiveIndex = activeIndex;
				for(var i = 0; i< len; i++){
					angular.element($navs[i]).attr("tab-index",i);
				}
				$conts.css("display", "none");
				$navs.eq(activeIndex).addClass(activeClass);
				$conts.eq(activeIndex).css("display","block");
				$navs.on("click",function(){
					var _this = angular.element(this);
					activeIndex = _this.attr("tab-index");
					$navs.eq(preActiveIndex).removeClass(activeClass);
					$conts.eq(preActiveIndex).css("display","none");
					$navs.eq(activeIndex).addClass(activeClass);
					$conts.eq(activeIndex).css("display","block");
					preActiveIndex = activeIndex;
				})
			}
		}
	}).directive('tipBox',['browserInfo',function(browserInfo){
		/**  
		* element need to be blcock
		*<span style="display: inline-block;" tip-box="{{}}">这是一个测试</span>
		*<span style="display: inline-block;" tip-box="这是一个测试这是一个测试这是一个测试<br/>试这是一个测试">这是一个测试</span>
		*/
		return {
			restrict: 'A',
			scope: {
				tipBox: '@tipBox',
				showEvent: '@showEvent',
				hideEvent: '@hideEvent'
			},
			link: function($scope,elem,attr,ctrl){
				var tipWrap,tipBoxHtml;
				var showEvent = $scope.showEvent||"mouseenter",
					hideEvent = $scope.hideEvent||"mouseleave";
					document.getElementById("tipWrap")?tipWrap = document.getElementById("tipWrap"):(function(){tipWrap = document.createElement('div');document.getElementsByTagName("body")[0].appendChild(tipWrap);tipWrap.id = "tipWrap";			tipWrap.className = "tipBoxWrap";}());
					tipBoxHtml = '<div class="tipBox"></div>';
					tipWrap.style.position = "absolute";
					tipWrap.style.display = "none";
					tipWrap.style.zIndex = "999";
					tipWrap.style.left = "0px";
					tipWrap.style.top = "0px";
					tipWrap.innerHTML = tipBoxHtml;

					elem.on(showEvent,function(){
						tipWrap.style.display = "block";
						var	tipWrapInfo,elemInfo={},													
							winScrollY = window.scrollY || window.pageYOffset||document.documentElement.scrollTop,
							winScrollX = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
							// alert(browserInfo)
							browserInfo.indexOf("msie 8.0") != 0? elemInfo = elem[0].getBoundingClientRect() : (function(){
								var elemPos  = elem[0].getBoundingClientRect(); //对象不能简单的赋值
								elemInfo.left = elemPos.left;
								elemInfo.right = elemPos.right;
								elemInfo.top = elemPos.top;
								elemInfo.bottom = elemPos.bottom;								
								elemInfo.width = elem[0].clientWidth;
								elemInfo.height = elem[0].clientHeight;
							}())											
						tipWrap.firstChild.innerHTML = $scope.tipBox ;
						tipWrap.style.left = elemInfo.left+winScrollX+elemInfo.width/2-tipWrap.offsetWidth/2+"px";
						tipWrap.style.top = elemInfo.top+winScrollY-tipWrap.offsetHeight/2-32+"px";
					}).on(hideEvent,function(){
						tipWrap.style.display = "none";
					})
			}
		}

	}]).directive('scrollView',[function(){
		return {
			restrict: 'AC',
			scope:{},
			link: function(elem,scope,attrs){

			}
		}

	}]).directive('myCustomer', function() {
	  return {
	    restrict: 'E',
	    scope: {
	      customerInfo: '=info'
	    },
	    template: 'my-customer-plus-vojta.html'
	  };
	}).directive('myDraggable', ['$document', function($document) {
  return {
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);;
}(angular))