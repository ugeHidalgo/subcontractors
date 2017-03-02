Ext.define('subcontractors.view.main.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'maintree',

    requires: 'subcontractors.store.Projects',

    title: 'Projects',
    store: {
        type: 'projects'
    }
});