/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Pertemuan.Application', {
    extend: 'Ext.app.Application',

    name: 'Pertemuan',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
        var loggedIn;
        loggedIn = localStorage.getItem("logeddin");
        if(!loggedIn){
            this.overlay = Ext.Viewport.add({
                xtype: 'login',
                floated: true,
                // modal: true, 
                // hideOnMaskTap: true,
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
                // centered: true,
                width: "100%",
                height: "100%",
                scrollable: true
            });
            this.overlay.show();
        }

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
