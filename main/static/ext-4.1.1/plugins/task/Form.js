Ext.define('Form', {
    extend: 'Ext.form.Panel',
    xtype: 'taskForm',
    requires: [
       'Ext.layout.container.HBox',
       'Ext.form.field.Date',       
    ],
    layout: 'hbox',
    cls: 'tasks-new-form',

    initComponent: function() {        

        this.callParent(arguments);
    }

});
