Ext.define('Subcontractors.view.main.MainTree', {
    extend: 'Ext.list.Tree',
    xtype: 'maintree',

    requires: 'Subcontractors.store.Projects',

    title: 'Projects',
    store: {
        type: 'projects'
    }
});