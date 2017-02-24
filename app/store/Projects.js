Ext.define('Subcontractors.store.Projects', {
    extend: 'Ext.data.Store',

    alias: 'store.projects',

    fields: [
        'projectId', 'projectDescr'
    ],

    data: { items: [
        { projectId: 'PR1', projectDescr: 'Alder House' },
        { projectId: 'PR2', projectDescr: 'Alder View Court' },
        { projectId: 'PR3', projectDescr: 'Algar Court' },
        { projectId: 'PR4', projectDescr: 'Alton' },
        { projectId: 'PR5', projectDescr: 'Amersham' },
        { projectId: 'PR6', projectDescr: 'Ampthill' },
        { projectId: 'PR7', projectDescr: 'Ashwood Court' },
        { projectId: 'PR8', projectDescr: 'Augustus House' },
        { projectId: 'PR9', projectDescr: 'Azaleas' },
        { projectId: 'PR10', projectDescr: 'Bainbridge Court' },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});