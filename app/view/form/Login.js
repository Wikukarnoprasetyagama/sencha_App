Ext.define('Pertemuan.view.form.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    id: 'login',
    controller: 'login',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
    ],
    shadow: true,
    cls: 'demo-solid-background',
    items: [
        {
            xtype: 'fieldset',
            id: 'fieldsetlogin',
            title: 'Login Form',
            instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    label: 'UserName',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    name : 'password',
                    label: 'Password',
                    clearIcon: true
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    text: 'Login',
                    ui: 'action',
                    // scope: this,
                    hasDisabled: false,
                    handler: 'onLogin',
                },
                {
                    text: 'Reset',
                    ui: 'action',
                    hasDisabled: false,
                    style: 'background-color:#D50000; margin:14px;color: white',
                    handler: function(){
                        Ext.getCmp('login').reset();
                    }
                },
                {
                    text: 'Registrasi',
                    ui: 'action',
                    hasDisabled: false,
                    handler: 'onRegister'
                }
            ]
        }
    ]
});