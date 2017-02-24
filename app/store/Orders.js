Ext.define('Subcontractors.store.Orders', {
    extend: 'Ext.data.Store',

    alias: 'store.orders',

    fields: [
        'contractId', 'workOrderId', 'orderId', 'orderDescr', 'amount'
    ],

    data: { items: [
        { contractId: '1', workOrderId: 'WO1', orderId: 'ord1', orderDescr: 'Electricity', amount: 12000 },
        { contractId: '1', workOrderId: 'WO1',    orderId: 'ord2', orderDescr: 'Plumbing', amount: 20000 },
        { contractId: '1', workOrderId: 'WO1',  orderId: 'ord3', orderDescr: 'Masonry', amount: 25000 },
        { contractId: '1', workOrderId: 'WO1',    orderId: 'ord4', orderDescr: 'Carpentry', amount: 10000 }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});