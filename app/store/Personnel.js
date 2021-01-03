Ext.define('Pertemuan.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'npm', 'name', 'email', 'phone'
    ],

    data: {
        items: [{
                npm: '183510192',
                name: 'Wiku Karno Prasetyagama',
                email: "wikukarno@gmail.com",
                phone: "555-111-1111"
            },
            {
                npm: '183510121',
                name: 'Worf',
                email: "worf.moghsson@enterprise.com",
                phone: "555-222-2222"
            },
            {
                npm: '183510200',
                name: 'Deanna',
                email: "deanna.troi@enterprise.com",
                phone: "555-333-3333"
            },
            {
                npm: '183510211',
                name: 'Data',
                email: "mr.data@enterprise.com",
                phone: "555-444-4444"
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
    
});