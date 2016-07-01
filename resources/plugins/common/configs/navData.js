define( [
	'angular'
], function(angular) {
	return function(app) {   
		app.constant('navData', [{
				'name': '我的账户',
				'state': 'account',
				'abstract': true,
				'params': 'id',
				'subState': [{
						'name': '我的账户',
						'state': 'account.myaccount',
						'params': 'id',
					},{
						'name': '账户充值',
						'state': 'account.recharge',
						'params': 'id',
					},
					{
						'name': '账户提现',
						'state': 'account.withdrawals',
						'params': 'id',
					},{
						'name': '信用额度',
						'state': 'account.credit',
						'params': 'id',
					},{
						'name': '我的投资',
						'state': 'account.invest',
						'params': 'id',
					},{
						'name': '我的优惠',
						'state': 'account.discount',
						'params': 'id',
					},{
						'name': '回款计划',
						'state': 'account.payment',
						'params': 'id',
					},{
						'name': '好友邀请',
						'state': 'account.invitation',
						'params': 'id',
					},{
						'name': '借款详情',
						'state': 'account.borrowdetail',
						'params': 'id',
					},{
						'name': '还款详情',
						'state': 'account.back',
						'params': 'id',
					},
					{
						'name': '债权转让',
						'state': 'account.creditorRight',
						'params': 'id',
					},
					{
						'name': '支付账户',
						'state': 'account.payAccount',
						'params': 'id',
					},
					{

					'name': '资金记录',
					'state': 'account.accountRecord',
					'params': 'id',
				   },
				   {
				   	'name': '账户设置',
				   	'state': 'account.accountSet',
				   	'params':'id',
				   },
				   {

						'name': '我的消息',
						'state': 'account.message',
						'params': 'id',
					},
					{
						'name': '证明资料',
						'state': 'account.material',
						'params': 'id',
					},
					{
						'name': '银行卡',
						'state': 'account.bankCard',
						'params': 'id',
					}
					]
			},
			{
				'name': '首页',
				'state': 'home',				
				'params': 'id'
			},
			{
				'name': '登陆',
				'state': 'login',				
				'params': 'id',
				'subState':[{
					'name':'修改密码',
					'state' :'login.modifyPsw',
					'params':'id'
				},
				{
                    'name':'修改邮箱',
                    'state':'login.modifyEmail',
                    'params':'id'
				},
				{
					'name':'忘记密码-手机',
					'state':'login.getbackMob',
					'params':'id'
				},
				{
					'name':'忘记密码-邮箱',
					'state':'login.getbackEma',
					'params':'id'
				},
				{
					'name':'忘记密码-手机验证',
					'state':'login.checkPsw',
					'params':'id'
				},
				{
					'name':'忘记密码-修改成功',
					'state':'login.modifySuc',
					'params':'id'
				},
				{
					'name':'忘记密码-邮箱验证',
					'state':'login.checkEma',
					'params':'id'
				}]
			},
			{
				'name': '注册',
				'state': 'register',				
				'params': 'id',
				'subState':[
				{
                    'name':'注册第二步',
                    'state':'register.registerSec',
                    'params':'id'
				},
				{
					'name':'注册第三步',
					'state':'register.registerThi',
					'params':'id'
				}
				]
			},
			{
				'name': '我要投资',
				'state': 'invest',				
				'params': 'id',
				'subState':[{
					'name':'标详情',
					'state' :'invest.borrowDetail',
					'params':'id'
				},
				{
					'name':'债权详情',
					'state' :'invest.bondDetail',
					'params':'id'
				}]
			},
			{
				'name':'安全保障',
				'state':'safeguard',
				'params':'id'
			}
		]);
	}
});