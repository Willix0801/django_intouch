Ext.onReady(function() {

	(function(){
		
		var loginform = Ext.create('Ext.panel.Panel', {
			// width: '180%',
			// height: '1000%',
			// region: 'center',
			// resizable: true,
			// autoshow: true,
			// layout: 'card',
			// renderTo: Ext.getBody(),
			pack: 'center',
			// layout: 'fit',
			width: 400,
			items: [{
				// region: 'center',
				xtype: 'form',
				method: 'POST',
				id: 'form',
				margins:'-1 -1 -1 -1',
				layout: 'anchor',
				// frame:true,
                defaults: { anchor: '100%' },
				bodyPadding: 13,
				title: 'Login',
				iconCls: 'login-icon',
				items: [{

					fieldLabel: 'Username',
					name: 'uname',
					xtype: 'textfield',
					allowBlank:false,

				},{
					fieldLabel: 'Password',
					name: 'passwd',
					xtype:'textfield',
					inputType:'password', 
					allowBlank:false,
					listeners: {
						'specialkey': function(field, e){
							if((e.getKey() == e.ENTER) && (loginform.getComponent(0).getComponent(0).getValue().length > 0) && (loginform.getComponent(0).getComponent(1).getValue().length > 0) ){
								var mask = new Ext.LoadMask(Ext.getBody(), {msg:"Authenticating.... Please wait..."});
								mask.show();	
								var myForm = Ext.getCmp('form');
								var values = myForm.getValues();
								Ext.Ajax.request({
									url: '/logi',
									method: 'POST',
									params: {
										username: values.uname,  /* username and password are the values to be got by django*/
										password: values.passwd,
										platform: window.navigator.platform
									},

									success: function() {
										/*var myMask = new Ext.LoadMask(myPanel, {msg:"Please wait..."});
										myMask.show();*/
										Ext.get(loginform.getEl()).unmask();
										window.location = '/'
										// console.log(response.responseText)
									},
									failure: function() {
										mask.hide();
										Ext.Msg.alert('Login Failed', 'User Name and/or Password not correct');
										// window.location = '/login'
									}
								});
							}
						}
					}
				
				}],

				

				buttons: [{
					text: 'Login',
					formBind: true,

					handler: function(f,e) {
						var myForm = Ext.getCmp('form');
						var values = myForm.getValues();
						
						Ext.get(loginform.getEl()).mask("Authenticating... Please wait...",'loading');
						Ext.Ajax.request({
							url: '/logi',
							method: 'POST',
							params: {
								username: values.uname,  /* username and password are the values to be got by django*/
								password: values.passwd,
								platform: window.navigator.platform
							},

							success: function() {
								/*var myMask = new Ext.LoadMask(myPanel, {msg:"Please wait..."});
								myMask.show();*/
								
								Ext.get(loginform.getEl()).unmask();
								window.location = '/'
							},
							failure: function() {
								Ext.get(loginform.getEl()).unmask();
								Ext.Msg.alert('Login Failed', 'User Name and/or Password not correct');
								// window.location = '/login'
							}
						});
										
					}
				}]
			}],
		

		});
		
		var viewP = Ext.create('Ext.container.Viewport', {
			// padding: '250%, 600%, 0% 400%',
			layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center',
			},
			
			style: {
		        background:'#ffffff',
		        backgroundImage: 'url(/static/images/intouchbackground.png)',
		        backgroundSize: '100% 100%',
		        backgroundRepeat: 'no-repeat',
		        
		    },

			items: [loginform]
		})

		return loginform
	})();
});