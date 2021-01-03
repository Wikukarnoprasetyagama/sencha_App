Ext.define('Pertemuan.view.form.Register', {
    extend: 'Ext.form.Panel',
    xtype: 'register',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    shadow: true,
    cls: 'demo-solid-background',
    id: 'basicform',
    items: [
        {
            xtype: 'fieldset',
            id: 'fieldset1',
            title: 'Personal Info',
            instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name',
                    placeHolder: 'Tom Roy',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    name : 'password',
                    label: 'Password',
                    clearIcon: true
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    placeHolder: 'me@sencha.com',
                    clearIcon: true
                },{
                    xtype: 'checkboxfield',
                    name: 'cool',
                    label: 'Cool',
                    platformConfig: {
                        '!desktop': {
                            bodyAlign: 'end'
                        }
                    }
                },
                {
                    xtype: 'datepickerfield',
                    destroyPickerOnHide: true,
                    name: 'date',
                    label: 'Start Date',
                    value: new Date(),
                    picker: {
                        yearFrom: 1990
                    }
                },{
                    xtype: 'textareafield',
                    name: 'bio',
                    label: 'Bio'
                }
            ]
        },{
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
                    text: 'Disable fields',
                    ui: 'action',
                    scope: this,
                    hasDisabled: false,
                    handler: function(btn){
                        var fieldset1 = Ext.getCmp('fieldset1'),
                            fieldset2 = Ext.getCmp('fieldset2');

                        if (btn.hasDisabled) {
                            fieldset1.enable();
                            fieldset2.enable();
                            btn.hasDisabled = false;
                            btn.setText('Disable fields');
                        } else {
                            fieldset1.disable();
                            fieldset2.disable();
                            btn.hasDisabled = true;
                            btn.setText('Enable fields');
                        }
                    }
                },
                {
                    text: 'Reset',
                    ui: 'action',
                    handler: function(){
                        Ext.getCmp('basicform').reset();
                    }
                }
            ]
        }
    ]
});