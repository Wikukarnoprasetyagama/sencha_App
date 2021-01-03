/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Pertemuan.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var nama = record.data.name;
        Ext.Msg.confirm('Confirm', 'Are you sure' + nama + '?', 'onConfirm', this);
        console.log(record.data.name);
    },

    onLogout: function(){ 
        Ext.Msg.confirm('logout', 'Are you sure want to logout?', 'onConfirm', this);
    },

    onConfirm: function(choice){
        if(choice === 'yes'){
            localStorage.removeItem('loggedIn');
            this.getView().destroy();
            Ext.getCmp('login').destroy();
            this.overlay = Ext.Viewport.add({
                xtype: 'login',
                floated: true,
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                width: "100%",
                height: "100%",
                scrollable: true,
            });
            this.overlay.show();
            Ext.Msg.alert('Logout', 'Berhasil Logout.');
        }
    },
});