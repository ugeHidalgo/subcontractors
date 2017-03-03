/**
 * This view is an example list of people.
 */
Ext.define('subcontractors.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'subcontractors.store.Suppliers'
    ],

    title: 'Suppliers',

    store: {
        type: 'suppliers'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
