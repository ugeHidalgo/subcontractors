Ext.define('Subcontractors.view.main.ContractsList', {
    extend: 'Ext.grid.Grid',
    xtype: 'contractlist',

    requires: [
        'Subcontractors.store.Contracts'
    ],

    title: 'Contracts',

    store: {
        type: 'contracts'
    },

    columns: [
        { text: 'Contract Id',  dataIndex: 'contractId', width: 100 },
        { text: 'Project Id', dataIndex: 'projectId', width: 100 },
        { text: 'Supplier Id', dataIndex: 'supplierId', width: 100 },
        { text: 'Supplier Description', dataIndex: 'supplierDescr', width: 200 },
        { text: 'Contract Description', dataIndex: 'contractDescr', width: 200 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
