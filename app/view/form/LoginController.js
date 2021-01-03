Ext.define('Pertemuan.view.form.LoginContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLogin: function(){
        var form = this.getView();
        var me = this;
        var username = form.getFields('username').getValue();
        var password = form.getFields('password').getValue();
        var store = Ext.getStore('login');
        if(username && password){
        if(username=="wikukarno" && password=="12345"){
        localStorage.setItem('loggedin', true);
        Ext.Msg.alert('<center>Login Berhasil</center>');
        form.hide();
        }else{
        localStorage.setItem('loggedin', false);
        form.show();
        Ext.Msg.alert('<center>Login Gagal</center>');
    }
}
},
onRegister: function(){
    if(!this.overlay){
        this.overlay = Ext.Viewport.add({
            xtype: 'panel',
            floated: true,
            hideOnMasktap: true,
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'eas-out'
            },
            hideAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'eas-out'
            },
            width: '100%',
            height: '100%',
            title: 'Form Registrasi',
            id: 'register',

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
                },
                {
                    xtype: 'textareafield',
                    name: 'bio',
                    label: 'Bio'
                },
                {
                    xtype: 'button',
                    text: 'Register',
                    ui: 'action',
                    handler: function(){
                        Ext.Msg.alert('Registrasi Berhasil', 'You have been registered!');
                    }
                },
                {
                    xtype: 'button',
                    text: 'Back',
                    style: 'background-color:#D50000; margin:14px;color: white',
                    ui: 'action',
                    handler: function(){
                        var reg =  Ext.getCmp('register');
                        reg.close();
                    }
                }
            ],
            scrollable: true

        });
        this.overlay.show();
    }
}
});