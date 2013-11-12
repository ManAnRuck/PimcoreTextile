pimcore.registerNS("pimcore.plugin.textile");

pimcore.plugin.textile = Class.create(pimcore.plugin.admin, {
    getClassName: function() {
        return "pimcore.plugin.textile";
    },

    initialize: function() {
        pimcore.plugin.broker.registerPlugin(this);
    },
 
    pimcoreReady: function (params,broker){
        // add a sub-menu item under "Extras" in the main menu
        var toolbar = Ext.getCmp("pimcore_panel_toolbar");

        var action = new Ext.Action({
            id: "my_plugin_menu_item",
            text: "My Plugin",
            iconCls:"fraud_check_menu_icon",
            handler: this.showTab
        });

        //toolbar.items.items[1].menu.add(action);
        layoutToolbar.extrasMenu.add(action); 
    },

    showTab: function() {
        textile.panel = new Ext.Panel({
            id:         "spark_fraud_check_panel",
            title:      "My Plugin",
            iconCls:    "spark_fraud_check_panel_icon",
            border:     false,
            layout:     "fit",
            closable:   true,
            items:      []
        });

        var tabPanel = Ext.getCmp("pimcore_panel_tabs");
        tabPanel.add(textile.panel);
        tabPanel.activate("my_plugin_check_panel");

        pimcore.layout.refresh();
    }
});

var textile = new pimcore.plugin.textile();