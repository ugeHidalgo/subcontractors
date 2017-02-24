Ext.define('Subcontractors.store.Contracts', {
    extend: 'Ext.data.Store',

    alias: 'store.contracts',

    fields: [
        'contractId', 'projectId', 'supplierId', 'supplierDescr', 'contractDescr'
    ],

    data: { items: [
        { contractId: '1', projectId: 'PR1', supplierId: 'sup1', supplierDescr: 'Pepe Gotera', contractDescr: 'House 1' },
        { contractId: '2', projectId: 'PR1', supplierId: 'sup1', supplierDescr: 'Pepe Gotera', contractDescr: 'House 2' },
        { contractId: '3', projectId: 'PR1', supplierId: 'sup2', supplierDescr: 'Otilio', contractDescr: 'House 3' },
        { contractId: '4', projectId: 'PR1', supplierId: 'sup2', supplierDescr: 'Otilio', contractDescr: 'House 4' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
