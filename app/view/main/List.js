/**
 * This view is an example list of people.
 */
Ext.define('Pertemuan.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'Pertemuan.store.Personnel',
        'Ext.grid.plugin.Editable'
    ],
    plugins: [{
        type: 'grideditable'
    }],

    title: 'Data Anggota',

    store: {
        type: 'personnel'
    },

    columns: [{
            text: 'Npm',
            dataIndex: 'npm',
            width: 250,
            Editable : true
        },
        {
            text: 'Nama',
            dataIndex: 'name',
            width: 250,
            Editable : true
        },
        {
            text: 'Email',
            dataIndex: 'email',
            width: 250,
            Editable : true
        },
        {
            text: 'Telephone',
            dataIndex: 'phone',
            width: 250,
            Editable : true
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});