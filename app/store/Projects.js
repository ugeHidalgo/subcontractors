Ext.define('Subcontractors.store.Projects', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.projects',

    root: {
        expanded: true,
        children: [
            { text: 'Alder House', leaf: true},
            { text: 'Alder View Court', leaf: true},
            { text: 'Algar Court', leaf: true},
            { text: 'Alton', leaf: true},
            { text: 'Amersham', leaf: true},
            { text: 'Ampthill', leaf: true},
            { text: 'Ashwood Court', leaf: true },
            { text: 'Augustus House', leaf: true},
            { text: 'Azaleas', leaf: true},
            { text: 'Bainbridge Court', leaf: true }
        ]
    }
});