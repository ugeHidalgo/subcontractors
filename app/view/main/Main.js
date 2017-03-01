/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('Subcontractors.view.main.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'app-main',

    requires: [
        'Subcontractors.view.main.MainController',
        'Subcontractors.view.main.MainModel',
        'Subcontractors.view.main.MainTree'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'top',

    items: [
        {
            title: 'Subcontractors dashboard',
            layout: 'fit',
            items: [{
                xtype: 'maintree'
            }]
        }
    ]
});
