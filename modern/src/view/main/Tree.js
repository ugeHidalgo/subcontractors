Ext.define('subcontractors.view.main.Tree', {
    extend: 'Ext.list.Tree',
    xtype: 'maintree',

    requires: 'subcontractors.store.Projects',

    title: 'Projects',
    store: {
        type: 'projects'
    }
});