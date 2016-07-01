define( [
	'angular'	
], function(angular) {
	return function(app) {
		app.run(['$rootScope', '$state', '$stateParams','$location',function($rootScope, $state, $stateParams,$location) {		
	        $rootScope.$on('$locationChangeStart',function(event){
	            if( $state.includes('account')){	            	
	            	if($rootScope.user.name==""){
	            		// $state.go('login');
	            	}
	            }
	        })
	    }]).run(['validator', 'defaultErrorMessageResolver', function(validator, defaultErrorMessageResolver) {
			defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          		errorMessages['required'] = '必填项';
          		errorMessages['minlength'] = '输入不能少于{0}个字符';
          		errorMessages['maxlength'] = '输入不能多于{0}个字符';
          		errorMessages['pattern'] = '格式不正确';
          		errorMessages['email'] = '邮箱格式不正确';
          		errorMessages['number'] = '输入必须是数字';
          		errorMessages['url'] = '格式不正确';
          		errorMessages['min'] = "输入不能小于{0}";
          		errorMessages['max'] = "输入不能大于{0}";
          		errorMessages['loginError'] = "账号或者密码错误，请确认后重新登录";
          		errorMessages['repeat'] = "两次密码不一致";
        	});
        	validator.setValidElementStyling(false);
		}]).factory('G', [function() {
			function G() {
				this.interfaceType = 1; //真实接口1， 模拟接口0，默认为1
				this.user = {};
			}
			G.prototype = {
				construtor: G,				
				init: function(user, $rootScope, $compile) {
					
				},
				useMockInterface: function(type){					
					this.interfaceType = type;
				},
				jumpLogin: function(){
					
				},
				index: function(item,group){//require the index of dom from siblings
					for (var i = 0; i < group.length; i++){
						if (group[i] == item) return i;
					}
					return null;
				},
				getIndex: function(dom){
					var i = 0;							
					while( (dom = dom.previousSibling) != null ){								
						dom.nodeType == 1 && i++;
					} 
					return i;
				}
				
			};
			var GObj = new G();
			window._G = GObj;
			return GObj;
		}]).directive('compareTo', function() {
			return {
				require: 'ngModel',
				scope: {
		            otherModelValue: "=compareTo"
		        },
				link: function(scope, elm, attrs, ctrl) {

					ctrl.$parsers.push(function(value){
		                
		                ctrl.$setValidity("repeat", value == scope.otherModelValue);
		            });
					/*scope.$watch("otherModelValue", function() {
		                ctrl.$validate();
		            });*/
				}
			};
		}).directive('tabs',function(){
			/**
			*用法:
			<div tabs>
				<div>
					<a tab-index="0">tab1</a> <!--说明：当a被选中时，会自动加上class:"active",tab-index对应tab1和tab2的index,如果不填，则为a的index-->
					<a tab-index="1">tab2</a>
				</div>
				<div>
					<div>tab1</div>
					<div>tab2</div>
				</div>
			</div>				
			**/
			return {
				scope:{
				},
				link: function(scope, elm, attrs){
					var $navs = elm.children().eq(0).find('a');
					var $contents = elm.children().eq(1).children();
					$navs.removeClass('active');
					$navs.eq(0).addClass('active');
					$contents.css({display: 'none'});
					$contents.eq(0).css({display: 'block'});					
					$navs.on('click',function(){
						var _this = angular.element(this);
						var targetIndex = _this.attr('tab-index') ;
						if (targetIndex == undefined){
							var e = this;
							var i = 0;							
							while( (e = e.previousSibling) != null ){								
								e.nodeType == 1 && i++;
							} 
							targetIndex = i;							
						}
						$navs.removeClass('active');						
						$contents.css({display: 'none'});						
						_this.addClass('active');
						$contents.eq(targetIndex).css({display: 'block'});				
					})
				}
			}
		}).directive('rdSwitch',function(){
			/*
			*用法：
				<ul rd-switch
				switch-type="switchType"
				switch-action="switchAction(switchType)">
					<li class="active" switchType="-1">不限</li>
					<li switchType="0">招标中</li>
					<li switchType="1">还款中</li>
					<li switchType="2">完成</li>
				</ul>
			*/
			function setScopeValues(scope, attrs) {
                attrs.switchType = attrs.switchType || 'type';
                attrs.activeClass = attrs.activeClass || 'active';
               	scope.switchAction = scope.switchAction || function(){};
               
               	
            }

			return {
				
				scope:{
					switchAction : '&'
				},
				link: function(scope, elm, attrs){
					 
					setScopeValues(scope,attrs);
					var $switchs = elm.children();						
					$switchs.on('click',function(){
						var _this = angular.element(this);
						$switchs.removeClass(attrs.activeClass);												
						_this.addClass(attrs.activeClass);
						var o = {};
						o[attrs.switchType] = _this.attr(attrs.switchType);				
						scope.switchAction(o);								
					});

				}
			}
		}).directive('rdSlide',function(){
			function build(scope, elm, attrs){
				var $banner = elm.children().eq(0).find('a');
				var $nav = elm.children().eq(1).children();
				var len=$nav.length*86;
				var now=0;
				var mleft=len/2;
				var secend=5000;//循环的时间
				$nav.parent().css({"width": len+'px',"margin-left":-mleft+'px'});

				for (var i=0; i<$nav.length; i++){
					$nav[i].index=i;
					$nav[i].onclick=function (){
						now=this.index;
						tab();
					};
					$nav[i].onmouseover=function (){
						now=this.index;
						tab();
					};
				}
				// 自动播放
				var timer=setInterval(next, secend);
			
				// 清除
				elm.on('mouseover',function (){
					clearInterval(timer);
				});
			
				elm.on('mouseout',function (){
					timer=setInterval(next, secend);
				});
			
				function next(){
					now++;	
					if (now == $nav.length)
					{
						now=0;
					}
					tab();
				}
				function tab(){
					$banner[0].className='imgAnimation';
					for (var i=0; i<$nav.length; i++)
					{
						$nav[i].className='';
						$banner[i].className='';
					}
					$nav[now].className='active';
					$banner[now].className='imgAnimation';
				}
				tab();
				
			}
			return {
				scope:{
					data: '='
				},
				link: function(scope, elm, attrs){
					scope.$watch('data',function(){	
						if (scope.data)
							build(scope, elm, attrs);
		
					});			
					
				}
			}
		}).directive('rdSelect',['$compile','G','$templateCache',function($compile,g,$templateCache){
			function setScopeValues(scope, attrs) {
				   var iscope = scope.iscope = {}
				   
				   attrs.textField = attrs.textField || 'text';	
            }

            function factory(scope, elm, attrs){
            	 
            	var $wrap = elm.wrap('<div class="rd-select" style="position:relative;overflow:visible;"></div>').parent().addClass(elm.attr('class'));
            	//create the display layer
            	var $display = angular.element('<div class="display"></div>');
            	$display.html(attrs.placeholder);
            	//create the trigger
            	var $trigger = angular.element('<a class="trigger" tabindex="-1"></a>');
            	//create the body
            	var $content = angular.element('<div class="content" style="display:none;position:absolute;top:100%;left:-1px;width:100%;"></div>');
            	
            	if (attrs.templateDiv){//if exits the templateCache,create the templateCache,or create the options
            		var $template = angular.element($templateCache.get(attrs.templateDiv)).addClass('template-div');
            		$content.append($compile($template)(scope)).css({overflow: 'visible',border:'none'});
            	}else{
            		var ul = '<ul>';
            		//static options. note do not to use ng-repeat create the option becase directive will do it if exist the options attribute
            		var $options = elm.find('option');         
            		  		
            		for (var i = 0; i < $options.length; i ++){
            			var $option = $options.eq(i);
            			var text = $option.text() ;
            			ul += '<li><a class="option" ng-click="iscope.optionHandler($event)">' 
            			+  text
            			+ '</a></li>';
            			if ($option.attr('selected') == 'selected' || i == 0) $display.html(text);  
            		}
            		//dynamic options
            		if (attrs.options){
            			var $doptions = scope[attrs.options];
            			if ($doptions){
            				for (var j = 0; j < $doptions.length; j ++){
		            			var $doption = $doptions[j];
		            			var text = $doption[attrs.textField];
		            			ul += '<li><a class="option" ng-click="iscope.optionHandler($event)">' 
		            			+  text
		            			+ '</a></li>';

		            			if (j == 0 && $options.length == 0) $display.html(text);  
		            		}
            			}           			
            		}
            		ul += '</ul>';

            		$content.append(ul);
            	}

            	scope.iscope.optionHandler = function(e){
            		var _this = angular.element(e.target);
            		var text = _this.text();
            		var index= g.getIndex(_this.parent()[0]);
            		elm[0].selectedIndex = index; 
            		$display.html(text);
            		hideContent();
            	}

            	function showContent(){
            		$content.css({display:'block'});
            	}

            	function hideContent(){
            		$content.css({display:'none'});
            	}

            	//bind events
   				var readyClose = true;
            	$trigger.on('click',function(){
            		showContent();
            	})

            	$wrap.on('mouseenter',function(){           		
            		readyClose = false;
            	}).on('mouseleave',function(){           		
            		readyClose = true;
            	})
            	angular.element(document).on('click',function(e){
            		if (readyClose) hideContent();
            	})
				

            	//compile elements and append to wrap
            	$wrap.append($compile($display)(scope));
            	$wrap.append($compile($trigger)(scope));
            	$wrap.append($compile($content)(scope));


            }

			return {
				scope:true,
				link: function(scope, elm, attrs){
					elm.css({display:'none'});//hide the select
					//elm.css({position:'relative',top:'-30px'})
					setScopeValues(scope, attrs);
					scope.$watch(attrs.options,function(){
						factory(scope, elm, attrs);	
					})					
				}
			}
		}]).directive('confirmInsert',function(){
			return {
				require: 'ngModel',
				scope: {
		            otherModelValue: "=confirmInsert",
		            compareValue: "=compareValue"
		        },
				link: function(scope, elm, attrs, ctrl) {
					elm[0].onkeyup = function(){
						scope.compareValue = elm[0].value.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
					}
					ctrl.$parsers.push(function(value){		                
		                ctrl.$setValidity("repeat", value == scope.otherModelValue);
		            });					
				}
			};
		}).directive('formatNum',function(){
			return {
				require: 'ngModel',
				scope: {		            
		            formatValue: "=formatValue"
		        },
				link: function(scope, elm, attrs, ctrl) {
					elm[0].onkeyup = function(){						
						scope.formatValue = elm[0].value.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
						console.log(scope.formatValue);
					}									
				}
			};
		})

	}
});