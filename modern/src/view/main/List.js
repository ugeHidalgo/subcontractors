/**
 * This view is an example list of people.
 */
Ext.define('subcontractors.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'subcontractors.store.Suppliers'
    ],

    title: 'Suppliers',

    store: {
        type: 'suppliers'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
