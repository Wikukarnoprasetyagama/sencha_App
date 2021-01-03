Ext.define('Pertemuan.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    id: 'app-main',

    requires: [
        'Ext.MessageBox',

        'Pertemuan.view.main.MainController',
        'Pertemuan.view.main.MainModel',
        'Pertemuan.view.form.User',
        'Pertemuan.view.form.Login',
        'Pertemuan.view.main.List',
        'Pertemuan.view.chart.Column',
        'Pertemuan.view.chart.Bar',
        'Pertemuan.view.chart.Bubble',
        'Pertemuan.view.main.Logout',
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [{
        title: 'Home',
        iconCls: 'x-fa fa-user',
        layout: 'fit',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist',
        }]
    },{
        title: 'Users',
        iconCls: 'x-fa fa-user',
        layout: 'fit',
        items: [{
            xtype: 'user'
        }]
    }, {
        title: 'Groups',
        iconCls: 'x-fa fa-users',
        layout: 'fit',
        items: [{
        xtype: 'bubble-chart'
    }] 
    },
    {
        title: 'Logout',
        iconCls: 'x-fa fa-users',
        layout: 'fit',
        items: [{
        xtype: 'logout'
    }] 
    },
    {
        title: 'Setting',
        iconCls: 'x-fa fa-cog',
        layout: 'fit',
        items: [{
        xtype: 'bar-chart'
    }] 
}]
});