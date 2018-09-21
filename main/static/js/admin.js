Ext.onReady(function () {
    Ext.Msg.alert('Remember', 'Remember to include date paid(invoice when cleared)on in invoices and the payment mode ')
    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                {
                 text: "My Profile", 
                 id: 'node1',
                 disabled: true,
                 expanded: true, 
                 children: [
                 	{text: 'My Profile', leaf: true, id: 'uprofile'},
                 	{text: 'work', leaf: true, id: 'work'},
                 	
                 ],
             },
                {
                 text: "Clients / Customers", 
                 id: 'node2',
                 expanded: true,
                 children: [
                 	{text: 'Customers', leaf: true, id: 'customers'},
                 	{text: 'Invoices', leaf: true, id: 'custInvoices'},
                 	
                 ], 
             },
                {
                 text: "Suppliers", 
                 id: 'node4',
                 expanded: true,
                 children: [
                    {text: 'Suppliers', leaf: true, id: 'suppliers'},
                    {text: 'Invoices', leaf: true, id: 'suppInvoices'},
                 ]
             }


            ]
        }
    });


         var myTab = Ext.create('Ext.tab.Panel',{
            id: 'willow',
            region: 'center',
            margins: '1, 1, 1, 1',
            // title: 'Intouch transactions',
            defaults: {bodyPadding: 10},
            html: "<div id='firstpage'><h1 class='testaaa'><bold>  <br /> <br />INTOUCH COMMUNICATIONS LTD</bold></h1</div>"            
           
        });

        var userfullnames = 'word'
        var userfull = document.getElementById("full_names")
        var gotit = userfull.innerHTML
        console.log(gotit)

        var mynorthpanel = Ext.create('Ext.panel.Panel', {
        	// layout: 'fit',
        	region: 'north',
        	html: "<div id='top'><div class='title'><h1>INTOUCH COMMUNICATIONS LTD</h1></div><div class='welcome'><p> Welcome, "+ userfullnames + " <a href='/logout'>Logout</a></p></div></div>",
        	height: 40,
        	// width: '100%',
        	
        });


        var southpanel = Ext.create('Ext.panel.Panel', {
        	region: 'south',
        	html: '<div style="color: dark-grey; margin-left: 9px; text-align: center">Copyright &copy;. All rights reserverd By INTOUCH COMMUNICATIONS LTD</div>',
        	frame: true,
        });

         
 

    function createaccord() {
         var accord = Ext.create('Ext.panel.Panel', {
         	renderTo: Ext.getBody(),
            region: 'center',
            title: 'My accordion for tab 1',
            id: 'accorda',
            layout: 'accordion',
            margins: '1, 1, 1, 1',
            // border: false,
           
            frame: true,
            width: 200,

           
            
            items: [{
                title: 'Accordion 1',
                html: 'Accordion 1',
            },{
                title: 'Accordion 2',
                html: 'Accordion 2',
            },{
                title: 'Accordion 2',
                html: 'Accordion 2',
            }]
        });

        return accord


    }
    


    function createForm() {
        var form = Ext.create('Ext.panel.Panel', {
        	renderTo: Ext.getBody(),
            region: 'center',
            title: 'My Panel Form',
            items: [{
                
                xtype: 'form',
                frame: true,
                
               
                defaultType: 'textfield',
                frame: true,
                items: [{
                    fieldLabel: 'First Name',
                    name: 'fname',
                },{
                    fieldLabel: 'Last Name',
                    name: 'lname'
                }]

            }]
        });

        return form
    }

function createHtmlEditor() {
    var htmleditor= Ext.create('Ext.panel.Panel', {
    	renderTo: Ext.getBody(),
        region: 'center',
        title: 'My Html Editor ',
        frame: true,
        layout: 'fit',
        items: [{
            
            xtype: 'htmleditor',
            // height: '100%',
            // width: '100%',
            
            

        }]
    });

    return htmleditor
}

function createGrid() {

    // First we create a data store
    Ext.create('Ext.data.Store', {
        storeId: 'people',
        fields: ['firstname', 'lastname', 'email', 'phonenumber'],
        data: [
            {firstname: 'William', lastname: 'Muganwa', email: 'muganwa0801@gmail.com', phonenumber: '+250783204240'},
            {firstname: 'Elia', lastname: 'Munyaneza', email: 'munyaneza@gmail.com', phonenumber: '+250786422160'},
            {firstname: 'Ann ', lastname: 'Munyana', email: 'munyana@gmail.com', phonenumber: '+250786069672'},
            {firstname: 'Edwin', lastname: 'Baijje', email: 'edwinhub@gmail.com', phonenumber: '+250785971082'},
            {firstname: 'Robert', lastname: 'Ndungutse', email: 'r.ndungutse@gmail.com', phonenumber: '+250788304441'},

        ]
    });

    var myGrid = Ext.create('Ext.grid.Panel', {
        title: 'Information',
        renderTo: Ext.getBody(),
        // margins: '-1 -1 -1 -1',
        // defaults: {bodyPadding: 0},
        columnLines: true,
        stripeRows: true,

        // autoSizeColumns: true,
        store: Ext.data.StoreManager.lookup('people'),
        columns: [
        	{xtype: 'rownumberer'},
            {text: 'First Name', dataIndex: 'firstname', flex: 50 / 100},
            {text: 'Last Name', dataIndex: 'lastname', flex: 50 / 100},
            {text: 'Email', dataIndex: 'email', flex: 50 / 100},
            {text: 'Phone Number', dataIndex: 'phonenumber', flex: 50 / 100}
        ]
    });

    return myGrid
}

// Functionalites of the project


// func for my profile
function userprofile() {
	var userprofilepanel = Ext.create('Ext.form.Panel', {
        title: 'My Profile',
        iconCls: 'accountinfo-icon',
        // layout: 'fit',
        region: 'center',
        frame: true,
        // frame: true,
        layout: 'hbox',
        items: [{
            xtype: 'fieldset',
            title: 'General Information',
            flex: 45 / 100,
            layout: 'vbox',
            height: '100%',
            items: [{
                fieldLabel: 'User Name',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'uuname', 
                width: 300, 
            },{
                fieldLabel: 'First Name',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'ufname',
                width: 300,
            },{
                fieldLabel: 'Last Name',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'ulname',
                width: 300,
            },{
                fieldLabel: 'Email',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'uemail',
                width: 300,
            }],
        },{xtype: 'splitter', width: 20,},{
            xtype: 'fieldset',
            title: 'Phone Numbers',
            layout: 'vbox',
            flex: 45 / 100,
            height: '100%',
            items: [{
                fieldLabel: 'Home',
                xtype: 'textfield',
                labelWidth: 75,
                name: 'uhome',
                width: 300,
            },{
                fieldLabel: 'Business',
                xtype: 'textfield',
                labelWidth: 75,
                name: 'ubusiness',
                width: 300,
            },{
                fieldLabel: 'Mobile',
                xtype: 'textfield',
                labelWidth: 75,
                name: 'umobile',
                width: 300,
            },{
                fieldLabel: 'Fax',
                xtype: 'textfield',
                labelWidth: 75,
                name: 'ufax',
                width: 300,
            }],
        }],
        
        buttons: [{
            text: 'Save Changes',
            handler: function() {
                Ext.Msg.alert('Save', 'Save changes on userprofile has been activated')
            }
        }]
            


    });

    return userprofilepanel
}

function work() {
	Ext.Msg.alert('work activated')
}

function finishedprojects() {
	Ext.Msg.alert('Finished Projects activated')
}
function other() {
	Ext.Msg.alert('Other activated')
}

// End of func for my profile


// func for My Customers
function customers() {

    // the below has a global scope for it to be accessed in any function for a reload purpose
	customersstore = Ext.create('Ext.data.Store', {
        storeId: 'customers',
        id: 'storeforcustomers',
        autoLoad: true,
        fields: [
           {name: 'id', type: 'int', mapping: 'fields.id'},
           {name: 'number', type: 'string', mapping: 'fields.number'},
           {name: 'name', type: 'string', mapping: 'fields.name'},
           {name: 'type', type: 'string', mapping: 'fields.type'},
           {name: 'location', type: 'string', mapping: 'fields.location'},
           {name: 'telephone', type: 'number', mapping: 'fields.telephone'},
           {name: 'email', type: 'string', mapping: 'fields.email'},
           {name: 'typeofwork', type: 'string', mapping: 'fields.typeofwork'},
           {name: 'tin', type: 'number', mapping: 'fields.tin'},
           {name: 'website', type: 'string', mapping: 'fields.website'},


        ],
        proxy: {
            type: 'ajax',
            url: '/customers/getcustomers',
            actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
            reader: {
                type: 'json',
                root: 'response', // which should match at the back
            },
        }
    });

    var customersgrid = Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        title: 'Customers Information',
        store: Ext.data.StoreManager.lookup('customers'),
        columnLines: true,
        selType: 'rowmodel',
        columns: [
            {xtype: 'rownumberer', text: 'No'},
            {text: 'Customer N0', dataIndex: 'number', flex: 20 / 100,  renderer: Ext.util.Format.uppercase,},
            {text: 'Name', dataIndex: 'name', flex: 35 / 100},
            {text: 'Type', dataIndex: 'type', flex: 18 / 100},
            {text: 'Email', dataIndex: 'email', flex: 35 / 100},
            {text: 'Mobile', dataIndex: 'telephone', flex: 20 / 100,},
            {text: 'website', dataIndex: 'website', flex: 45 / 100},

        ],
        plugins: [{
            ptype: 'rowexpander',
            frame: true,
            rowBodyTpl : [
                '<p><b>Tin:</b> {tin, }</p><br>',
                '<p><b>Location:</b> {location}</p>',
                '<p><b>Service:</b> {typeofwork}</p>'
            ],
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: 'New Customer',
                id: 'addcustomer',
                iconCls: 'add-icon',
                handler: function() {
                    addCustomer()
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Edit Customer',
                iconCls: 'edit-icon',
                id: 'editcustomer',
                disabled: true,
                handler: function() {
                    editCustomer(cust_id, cust_number, cust_name, cust_type, cust_location, cust_telephone, cust_email, cust_typeofwork, cust_tin, cust_website)
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Refresh',
                iconCls: 'refresh-icon',
                action: 'refresh',
                handler: function() {
                    customersstore.reload();
                }
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Remove Customer',
                iconCls: 'remove-icon',
                id: 'removecustomer',
                disabled: true,
                handler: function() {
                    removeCustomer(cust_id, cust_name)
                }

            },'->',{
                xtype: 'textfield',
                emptyText: 'Search.....',
                labelWidth:50,
                width: 250,
                store: Ext.data.StoreManager.lookup('customers'),
                enableKeyEvents: true,
            }],
        },{
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            pageSize: 2,
            store : Ext.data.StoreManager.lookup('customers'),
            displayInfo : true,
            displayMsg : "Displaying customers {0} - {1} of {2}",
            emptyMsg : "Nothing to display",
        }],

        listeners: {
           itemclick: function(data, record, position) {
            Ext.getCmp('editcustomer').setDisabled(false)
            Ext.getCmp('removecustomer').setDisabled(false)

              cust_id = record.data.id
              cust_number = record.data.number
              cust_name = record.data.name
              cust_type = record.data.type
              cust_location = record.data.location
              cust_telephone = record.data.telephone
              cust_email = record.data.email
              cust_typeofwork = record.data.typeofwork
              cust_tin = record.data.tin
              cust_website = record.data.website
             // The above variables all have a global scope means to be accessed anywhere in the program
            
           },
           itemdblclick: function(data, record, position) {

            var cust_id = record.data.id
            var cust_number = record.data.number
            var cust_name = record.data.name
            var cust_type = record.data.type
            var cust_location = record.data.location
            var cust_telephone = record.data.telephone
            var cust_email = record.data.email
            var cust_typeofwork = record.data.typeofwork
            var cust_tin = record.data.tin
            var cust_website = record.data.website
            
            // editCustomer(cust_id, cust_number, cust_name, cust_type, cust_location, cust_telephone, cust_email, cust_typeofwork, cust_tin, cust_website)
           
           },
        }


    });


  return customersgrid

}

// func for Adding a new customer

 function addCustomer() {

    var customerwin = Ext.create('Ext.window.Window', {
        title: 'New Customer',
        iconCls: 'add-icon',
        animateTarget: 'addcustomer',
        modal: true,
        width: '60%',
        items: [{
            xtype: 'form',
            frame: true,
            id: 'addcustomerform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Customer Information',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'cname',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Customer No',
                        name: 'cnumber',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Tin No',
                        name: 'ctin',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    }],
                },{
                    xtype: 'splitter', 
                    width: 20,
                },{
                    xtype: 'fieldset',
                    title: 'Customer Contacts',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Website',
                        name: 'cwebsite',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'cmail',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Tel No',
                        name: 'ctelephone',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    }],  

                }],
            },{
                xtype: 'container',
                items: [{
                    xtype: 'fieldset',
                    title: 'More Information',
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: 'Type',
                        emptyText: 'i.e Private, Local, etc...',
                        name: 'ctype',
                        labelWidth: 20,
                        width: '100%',
                        height: '15%',
                        allowBlank: false,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Service',
                        emptyText: 'i.e Logistics, Marketing Agency, Telecom etc...',
                        name: 'cservice',
                        labelWidth: 20,
                        width: '100%',
                        height: '15%',
                        allowBlank: false,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Location',
                        emptyText: 'i.e Kacyiru, Nyamirambo etc...',
                        name: 'clocation',
                        labelWidth: 20,
                        width: '100%',
                        height: '15%',
                        allowBlank: false,
                    }],
                }],

            }],
            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {
                    var add_Customer = Ext.getCmp('addcustomerform')
                    var customer_values = add_Customer.getValues()
                    Ext.Ajax.request({
                        url: '/customers/addcustomer',
                        method: 'POST',
                        params: {
                            cust_name: customer_values.cname,
                            cust_number: customer_values.cnumber,
                            cust_tin: customer_values.ctin,
                            cust_website: customer_values.cwebsite,
                            cust_email: customer_values.cmail,
                            cust_telephone: customer_values.ctelephone,
                            cust_type: customer_values.ctype,
                            cust_service: customer_values.cservice,
                            cust_location: customer_values.clocation,
                        },
                        success: function() {
                            customerwin.close()
                            customersstore.reload()
                            Ext.Msg.alert('Successfully', 'Successfully created a new customer Account')
                        },
                        failure: function() {
                            Ext.Msg.alert('Failed', 'Failed to create a new customer account')
                        }
                    });
                }
            },{
                text: 'Cancel',
                handler: function () {
                    customerwin.close();
                }
            }],
        }],
    });
    customerwin.show();
 }

// Ending of func for adding anew customer


// func for editing customers profile

 function editCustomer(cust_id, cust_number, cust_name, cust_type, cust_location, cust_telephone, cust_email, cust_typeofwork, cust_tin, cust_website) {

    var edit_customerwin = Ext.create('Ext.window.Window', {
        title: 'Edit Customer',
        iconCls: 'edit-icon',
        animateTarget: 'editcustomer',
        modal: true,
        width: '60%',
        items: [{
            xtype: 'form',
            frame: true,
            id: 'editcustomerform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Customer Information',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'edcname',
                        value: cust_name,
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Customer No',
                        name: 'edcnumber',
                        value: cust_number,
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Tin No',
                        name: 'edctin',
                        value: cust_tin,
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    }],
                },{
                    xtype: 'splitter', 
                    width: 20,
                },{
                    xtype: 'fieldset',
                    title: 'Customer Contacts',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Website',
                        name: 'edcwebsite',
                        value: cust_website,
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'edcmail',
                        value: cust_email,
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Tel No',
                        name: 'edctelephone',
                        value: cust_telephone,
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    }],  

                }],
            },{
                xtype: 'container',
                items: [{
                    xtype: 'fieldset',
                    title: 'More Information',
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: 'Type',
                        emptyText: 'i.e Private, Local, etc...',
                        name: 'edctype',
                        value: cust_type,
                        labelWidth: 20,
                        width: '100%',
                        height: '15%',
                        allowBlank: false,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Service',
                        emptyText: 'i.e Logistics, Marketing Agency, Telecom etc...',
                        name: 'edcservice',
                        value: cust_typeofwork,
                        labelWidth: 20,
                        width: '100%',
                        height: '15%',
                        allowBlank: false,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Location',
                        emptyText: 'i.e Kacyiru, Nyamirambo etc...',
                        name: 'edclocation',
                        value: cust_location,
                        labelWidth: 20,
                        width: '100%',
                        height: '15%',
                        allowBlank: false,
                    }],
                }],

            }],
            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {
                    var edit_Customer = Ext.getCmp('editcustomerform')
                    var edit_customervalues = edit_Customer.getValues()
                    var customeryek = cust_id
                    Ext.Ajax.request({
                        url: '/customers/editcustomer',
                        method: 'POST',
                        params: {
                            custa_id: customeryek,
                            cust_name: edit_customervalues.edcname,
                            cust_number: edit_customervalues.edcnumber,
                            cust_tin: edit_customervalues.edctin,
                            cust_website: edit_customervalues.edcwebsite,
                            cust_email: edit_customervalues.edcmail,
                            cust_telephone: edit_customervalues.edctelephone,
                            cust_type: edit_customervalues.edctype,
                            cust_service: edit_customervalues.edcservice,
                            cust_location: edit_customervalues.edclocation,
                        },
                        success: function() {
                            edit_customerwin.close()
                            customersstore.reload()
                            Ext.Msg.alert('Successfully', 'Successfully edited a customer account')
                        },
                        failure: function() {
                            Ext.Msg.alert('Failed', 'Failed to create a new customer account')
                        }
                    });
                }
            },{
                text: 'Cancel',
                handler: function () {
                    edit_customerwin.close();
                }
            }],
        }],
    });
    edit_customerwin.show();
 }    
  
// End of func for editing customer


// func for removing a customer

function removeCustomer(key, customer_name) {
   
   Ext.Msg.confirm('Delete ' + customer_name, 'Are you sure you want to remove  ' + customer_name + ' from Your Customers', function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/customers/removecustomer',
        method: 'POST',
        params: {
            customerkey: key,
            
        },

        success: function() {
            
            customersstore.reload() // usersstore has a global scope
            Ext.Msg.alert('Success', 'Successfully removed a customer')
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed to remove a customer')
        }

     });

    }

   });

   

}

// End of func for removing a customer


// func for customers invoice
function custInvoices() {

    // the below has a global scope for it to be accessed in any function for a reload purpose
    customersinvoice_store = Ext.create('Ext.data.Store', {
        storeId: 'storeforcustomers_invoice',
        id: 'customersInvoice',
        autoLoad: true,
        fields: [
           {name: 'id', /*type: 'int',*/ mapping: 'fields.id'},
           {name: 'invoiceID', type: 'string', mapping: 'fields.invoiceID'},
           {name: 'customer_no', /*type: 'string',*/ mapping: 'fields.customer_no'},
           {name: 'customer_name', /*type: 'string',*/ mapping: 'fields.customerName'},
           {name: 'invdate', /*type: 'string',*/ mapping: 'fields.invoice_date'},
           {name: 'invdue', /*type: 'int',*/ mapping: 'fields.invoice_due_date'},
           {name: 'reference', /*type: 'string',*/ mapping: 'fields.reference'},
           {name: 'desc', /*type: 'string',*/ mapping: 'fields.invoice_desc'},
           {name: 'status', /*type: 'int',*/ mapping: 'fields.status'},
           {name: 'amountpay', /*type: 'string',*/ mapping: 'fields.amount_tobe_paid'},
           {name: 'amountpaid', /*type: 'string',*/ mapping: 'fields.amount_paid'},
           {name: 'amountremain', /*type: 'string',*/ mapping: 'fields.amount_remaining'},
           {name: 'received_by', /*type: 'string',*/ mapping: 'fields.received_by'},
           {name: 'received_on', /*type: 'string',*/ mapping: 'fields.received_on'},
           {name: 'cust_notes', /*type: 'string',*/ mapping: 'fields.notes'},


        ],
        proxy: {
            type: 'ajax',
            url: '/customers/getinvoices',
            actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
            reader: {
                type: 'json',
                root: 'response', // which should match at the back
            },
        },
    });

    var customersinvoice_grid = Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        title: 'Customers Invoices',
        store: Ext.data.StoreManager.lookup('storeforcustomers_invoice'),
        columnLines: true,
        selType: 'rowmodel',
        columns: [
            {xtype: 'rownumberer', text: 'No'},
            {text: 'Invoice ID', dataIndex: 'invoiceID', flex: 25 / 100,  renderer: Ext.util.Format.uppercase,},
            {text: 'Customer Name', dataIndex: 'customer_name', flex: 30 / 100},
            {text: 'Invoice Description', dataIndex: 'desc', flex: 40 / 100},
            {text: 'Status', dataIndex: 'status', flex: 18 / 100},
            {text: 'Amount To Pay', dataIndex: 'amountpay', xtype: 'numbercolumn', format:'0,000', flex: 18 / 100},
            {text: 'Amount Paid', dataIndex: 'amountpaid', xtype: 'numbercolumn', format:'0,000', flex: 18 / 100},
            {text: 'Remaining Amt', dataIndex: 'amountremain', xtype: 'numbercolumn', format:'0,000', flex: 20 / 100},
            {text: 'Invoice Date', dataIndex: 'invdate', flex: 20 / 100,},
            {text: 'Invoice Due Date', dataIndex: 'invdue', flex: 20 / 100,},

        ],
        
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: 'New Invoice',
                id: 'addcustomeris_nvoice',
                iconCls: 'add-icon',
                handler: function() {
                    addcustomers_invoice()
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Edit Invoice',
                iconCls: 'edit-icon',
                id: 'editcustomers_invoice',
                disabled: true,
                handler: function() {
                    editcustomers_invoice(customer_invoice_pk, customer_invoice_Id, customer_invoice_no, customer_invoice_name, customer_invoice_invdate, customer_invoice_invduedate, customer_invoice_reference, customer_invoice_status, customer_invoice_amountpay, customer_invoice_amountpaid, customer_invoice_amountremain, customer_invoice_received_by, customer_invoice_received_on, customert_invoice_descri, customert_invoice_notess)
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Refresh',
                iconCls: 'refresh-icon',
                action: 'refresh',
                handler: function() {
                    customersinvoice_store.reload();
                }
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Remove Invoice',
                iconCls: 'remove-icon',
                id: 'removecustomers_invoice',
                disabled: true,
                handler: function() {
                    removecustomers_invoice(customer_invoice_pk, customer_invoice_name)
                }

            },'->',{
                xtype: 'textfield',
                emptyText: 'Search.....',
                labelWidth:50,
                width: 250,
                store: Ext.data.StoreManager.lookup('storeforcustomers_invoice'),
                enableKeyEvents: true,
            }],
        },{
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            pageSize: 2,
            store : Ext.data.StoreManager.lookup('storeforcustomers_invoice'),
            displayInfo : true,
            displayMsg : "Displaying Invoices {0} - {1} of {2}",
            emptyMsg : "Nothing to display",
        }],

        listeners: {
           itemclick: function(data, record, position) {
            Ext.getCmp('editcustomers_invoice').setDisabled(false)
            Ext.getCmp('removecustomers_invoice').setDisabled(false)

              customer_invoice_pk = record.data.id
              customer_invoice_Id = record.data.invoiceID
              customer_invoice_no = record.data.customer_no
              customer_invoice_name = record.data.customer_name
              customer_invoice_invdate = record.data.invdate
              customer_invoice_invduedate = record.data.invdue
              customer_invoice_reference = record.data.reference
              customert_invoice_descri = record.data.desc
              customer_invoice_status = record.data.status
              customer_invoice_amountpay = record.data.amountpay
              customer_invoice_amountpaid = record.data.amountpaid
              customer_invoice_amountremain = record.data.amountremain 
              customer_invoice_received_by = record.data.received_by
              customer_invoice_received_on = record.data.received_on
              customert_invoice_notess = record.data.cust_notes
             // The above variables all have a global scope means to be accessed anywhere in the program
            
           },
           itemdblclick: function(data, record, position) {

            var cust_id = record.data.id
            var cust_number = record.data.number
            var cust_name = record.data.name
            var cust_type = record.data.type
            var cust_location = record.data.location
            var cust_telephone = record.data.telephone
            var cust_email = record.data.email
            var cust_typeofwork = record.data.typeofwork
            var cust_tin = record.data.tin
            var cust_website = record.data.website
            editcustomers_invoice(customer_invoice_pk, customer_invoice_Id, customer_invoice_no, customer_invoice_name, customer_invoice_invdate, customer_invoice_invduedate, customer_invoice_reference, customer_invoice_status, customer_invoice_amountpay, customer_invoice_amountpaid, customer_invoice_amountremain, customer_invoice_received_by, customer_invoice_received_on, customert_invoice_descri, customert_invoice_notess)
            

            
            // editCustomer(cust_id, cust_number, cust_name, cust_type, cust_location, cust_telephone, cust_email, cust_typeofwork, cust_tin, cust_website)
            

           },
        }


    });


  return customersinvoice_grid

}


// End of func for my Customers



// Statuses

var statuses = Ext.create('Ext.data.Store', {
    fields: ['name'],
    data : [
        {"name":"Paid"},
        {"name":"Pending"},
        {"name":"Unpaid"}
              
    ]
});

// func for adding customers invoice

function addcustomers_invoice() {
    var addcustomers_invoice_win = Ext.create('Ext.window.Window', {
        title: 'New Customer Invoice',
        modal: true,
        width: 700,
        minWidth: 350,
        height: 420,
        animateTarget: 'addcustomeris_nvoice',
        iconCls: 'add-icon',
        items: [{
            xtype: 'tabpanel',
            // title: 'Customer Invoice Information',
            width: '100%',
            height: '100%',
            items: [{
                title: 'Invoice Information',
                xtype: 'form',
                frame: true,
                id: 'customerInvoiceform',
                layout: 'vbox',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'fieldset',
                        title: 'Invoice Information',
                        frame: true,
                        items: [{
                           
                                xtype: 'textfield',
                                fieldLabel: 'Invoice ID',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'cust_invoiceID',
                                frame: true,
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Customer No',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'cust_no',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Customer Name',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'cust_invoice_name',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                format:'d/m/Y',
                                name: 'cust_invoicedate',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Due Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                format:'d/m/Y',
                                name: 'cust_invoiceduedate',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Reference',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'cust_invoice_reference',
                          
                        }],
                    },{
                        xtype: 'splitter',
                        width: 30,
                    },{
                        xtype: 'fieldset',
                        title: 'Invoice Payments',
                        height: 215,
                        items: [{
                                xtype: 'combobox',
                                fieldLabel: 'Status',
                                labelWidth: 75,
                                allowBlank: false,
                                store: statuses,
                                displayField: 'name',
                                // queryMode: 'local',
                                width: 300,
                                name: 'customer_status_invoice',
                                frame: true,
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt To Pay',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'customer_amountpay_invoice',
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt Paid',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'amountpaid_invoice',
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Remaining Amt',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'remaining_cust_invoice',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Received By',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'cust_received_by',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Received On',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                format:'d/m/Y',
                                name: 'customer_invoice_receivedon',
                        }],
                    }],
                },{
                    xtype: 'container',
                    frame: true,
                    layout: 'hbox',
                    items: [{
                        xtype: 'splitter',
                        width: 8,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Invoice Desc',
                        name: 'customer_invoice_desc',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        labelAlign: 'top',
                    },{
                        xtype: 'splitter',
                        width: 22,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Notes',
                        name: 'customer_invoice_notes',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        labelAlign: 'top',
                    }]
                }],
            },{
                xtype: 'gridpanel',
                title: 'Associated Items',
                columns: [
                    {text: 'Item Description', flex: 30 / 100},
                    {text: 'Quantity'},
                    {text: 'Unit Price(rwf)'},
                    {text: 'Total exclu VAT'},
                    {text: 'VAT'},
                    {text: 'Total'},
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: ['->',{
                    xtype: 'button',
                    text: 'Save',
                    // formBind: true,
                    iconCls: 'save-icon',
                    handler: function() {
                        var customerInvoice_info = Ext.getCmp('customerInvoiceform')
                        var customerInvoice_value = customerInvoice_info.getValues()
                        console.log(customerInvoice_value)
                        Ext.Ajax.request({
                            url: '/customers/addnewcustomerinvoice',
                            method: 'POST',
                            params: {
                                customerInvId: customerInvoice_value.cust_invoiceID,
                                customerInvNo: customerInvoice_value.cust_no,
                                customerName: customerInvoice_value.cust_invoice_name,
                                customerInvDate: customerInvoice_value.cust_invoicedate,
                                customerInvDueDate: customerInvoice_value.cust_invoiceduedate,
                                customerReference: customerInvoice_value.cust_invoice_reference,
                                customerStatus: customerInvoice_value.customer_status_invoice,
                                customerAmtToPay: customerInvoice_value.customer_amountpay_invoice,
                                customerAmtPaid: customerInvoice_value.amountpaid_invoice,
                                customerRemAmt: customerInvoice_value.remaining_cust_invoice,
                                customerInvReceivedBy: customerInvoice_value.cust_received_by,
                                customerInvReceivedOn: customerInvoice_value.customer_invoice_receivedon,
                                customerInvDescri: customerInvoice_value.customer_invoice_desc,
                                customerNotes: customerInvoice_value.customer_invoice_notes,

                            },

                            success: function() {
                                addcustomers_invoice_win.close()
                                customersinvoice_store.reload() // usersstore has a global scope
                                Ext.Msg.alert('Success', 'Successfully created a New Invoice')
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to create a New Invoice')
                            }
                        });
                        
                    },
                },{
                    xtype: 'button',
                    text: 'Cancel',
                    iconCls: 'remove-icon',
                    handler: function() {
                        addcustomers_invoice_win.close()
                    }
                }]
            }],
        }],
    });

    addcustomers_invoice_win.show();

}

// end of func adding customers invoice
  
// func for editing Customers invoice

function editcustomers_invoice(inv_pk, invoice_Id, invoice_no, invoice_name, invoice_invdate, invoice_invduedate, invoice_reference, invoice_status, invoice_amountpay, invoice_amountpaid, invoice_amountremain, invoice_received_by, invoice_received_on, invoice_descri, invoice_notess) {
    var editcustomers_invoice_win = Ext.create('Ext.window.Window', {
        title: 'Edit Customer Invoice',
        modal: true,
        width: 700,
        minWidth: 350,
        height: 420,
        animateTarget: 'editcustomers_invoice',
        iconCls: 'edit-icon',
        items: [{
            xtype: 'tabpanel',
            // title: 'Customer Invoice Information',
            width: '100%',
            height: '100%',
            items: [{
                title: 'Invoice Information',
                xtype: 'form',
                frame: true,
                layout: 'vbox',
                id: 'edcustomerInvoiceform',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'fieldset',
                        title: 'Invoice Information',
                        frame: true,
                        items: [{
                           
                                xtype: 'textfield',
                                fieldLabel: 'Invoice ID',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcust_invoiceID',
                                value: invoice_Id,
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Customer No',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcust_no',
                                value: invoice_no,
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Customer Name',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcust_invoice_name',
                                value: invoice_name,
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcust_invoicedate',
                                value: invoice_invdate,
                                format: 'd-m-Y',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Due Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcust_invoiceduedate',
                                value: invoice_invduedate,
                                format: 'd-m-Y',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Reference',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcust_invoice_reference',
                                value: invoice_reference,
                                format: 'd-m-Y',
                          
                        }],
                    },{
                        xtype: 'splitter',
                        width: 30,
                    },{
                        xtype: 'fieldset',
                        title: 'Invoice Payments',
                        height: 215,
                        items: [{
                                xtype: 'combobox',
                                fieldLabel: 'Status',
                                labelWidth: 75,
                                allowBlank: false,
                                store: statuses,
                                displayField: 'name',
                                // queryMode: 'local',
                                width: 300,
                                name: 'edcustomer_status_invoice',
                                frame: true,
                                value: invoice_status,
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt To Pay',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcustomer_amountpay_invoice',
                                value: invoice_amountpay,
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt Paid',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edamountpaid_invoice',
                                value: invoice_amountpaid,
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Remaining Amt',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edremaining_cust_invoice',
                                value: invoice_amountremain,
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Received By',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcust_received_by',
                                value: invoice_received_by,
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Received On',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'edcustomer_invoice_receivedon',
                                value: invoice_received_on,
                                format: 'd-m-Y',
                        }],
                    }],
                },{
                    xtype: 'container',
                    frame: true,
                    layout: 'hbox',
                    items: [{
                        xtype: 'splitter',
                        width: 8,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Invoice Desc',
                        name: 'edcustomer_invoice_desc',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        labelAlign: 'top',
                        value: String(invoice_descri),
                    },{
                        xtype: 'splitter',
                        width: 22,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Notes',
                        name: 'edcustomer_invoice_notes',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        labelAlign: 'top',
                        value: String(invoice_notess),
                    }]
                }],
            },{
                xtype: 'gridpanel',
                title: 'Associated Items',
                columns: [
                    {text: 'Item Description', flex: 30 / 100},
                    {text: 'Quantity'},
                    {text: 'Unit Price(rwf)'},
                    {text: 'Total exclu VAT'},
                    {text: 'VAT'},
                    {text: 'Total'},
                ],
            }],

            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: ['->',{
                    xtype: 'button',
                    text: 'Save',
                    iconCls: 'save-icon',
                    handler: function() {
                        var edcustomerInvoice_info = Ext.getCmp('edcustomerInvoiceform')
                        var edcustomerInvoice_value = edcustomerInvoice_info.getValues()
                        var edcust_pk = inv_pk
                        Ext.Ajax.request({
                            url: '/customers/editcustomerinvoice',
                            method: 'POST',
                            params: {
                                cust_inv_id: edcust_pk,
                                edcustomerInvId: edcustomerInvoice_value.edcust_invoiceID,
                                edcustomerInvNo: edcustomerInvoice_value.edcust_no,
                                edcustomerName: edcustomerInvoice_value.edcust_invoice_name,
                                edcustomerInvDate: edcustomerInvoice_value.edcust_invoicedate,
                                edcustomerInvDueDate: edcustomerInvoice_value.edcust_invoiceduedate,
                                edcustomerReference: edcustomerInvoice_value.edcust_invoice_reference,
                                edcustomerStatus: edcustomerInvoice_value.edcustomer_status_invoice,
                                edcustomerAmtToPay: edcustomerInvoice_value.edcustomer_amountpay_invoice,
                                edcustomerAmtPaid: edcustomerInvoice_value.edamountpaid_invoice,
                                edcustomerRemAmt: edcustomerInvoice_value.edremaining_cust_invoice,
                                edcustomerInvReceivedBy: edcustomerInvoice_value.edcust_received_by,
                                edcustomerInvReceivedOn: edcustomerInvoice_value.edcustomer_invoice_receivedon,
                                edcustomerInvDescri: edcustomerInvoice_value.edcustomer_invoice_desc,
                                edcustomerNotes: edcustomerInvoice_value.edcustomer_invoice_notes,

                            },

                            success: function() {
                                editcustomers_invoice_win.close()
                                customersinvoice_store.reload() // usersstore has a global scope
                                Ext.Msg.alert('Success', 'Successfully edited Customer Invoice')
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to edit Customer Invoice')
                            }
                        });
                        
                    },
                },{
                    xtype: 'button',
                    text: 'Cancel',
                    iconCls: 'remove-icon',
                    handler: function() {
                        editcustomers_invoice_win.close()
                    }
                }]
            }],

        }],
    });

    editcustomers_invoice_win.show();

}

// End of func for editing customers invoice

// func for removing invoice
 
 function removecustomers_invoice(cust_invoice_pk, cust_invoice_namee) {
    Ext.Msg.confirm('Delete ' + cust_invoice_namee, 'Are you sure you want to remove  ' + cust_invoice_namee + ' invoice from Your Customers Invoices', function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/customers/removecustomerinvoice',
        method: 'POST',
        params: {
            customerinvoicekey: cust_invoice_pk,
            
        },

        success: function() {
            
            customersinvoice_store.reload() // usersstore has a global scope
            Ext.Msg.alert('Success', 'Successfully removed Customer Invoice')
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed to remove Customer Invoice')
        }

     });

    }

   });
 }
// end of func for removing invoice



// func for my suppliers

function suppliers() {

    // the below has a global scope for it to be accessed in any function for a reload purpose
    suppliersstore = Ext.create('Ext.data.Store', {
        storeId: 'suppliers_store',
        id: 'storeforsuppliers',
        autoLoad: true,
        fields: [
           {name: 'id', type: 'int', mapping: 'fields.id'},
           {name: 'name', type: 'string', mapping: 'fields.name'},
           {name: 'type', type: 'string', mapping: 'fields.type'},
           {name: 'service', type: 'string', mapping: 'fields.service'},
           {name: 'location', type: 'string', mapping: 'fields.location'},
           {name: 'telephone', type: 'number', mapping: 'fields.telephone'},
           {name: 'email', type: 'string', mapping: 'fields.email'},
           {name: 'tin', type: 'number', mapping: 'fields.tin'},
           {name: 'website', type: 'string', mapping: 'fields.website'},
           {name: 'bank_name', type: 'string', mapping: 'fields.bank_name'},
           {name: 'bank_account', type: 'string', mapping: 'fields.bank_account'},
           {name: 'notes', type: 'string', mapping: 'fields.notes'},


        ],
        proxy: {
            type: 'ajax',
            url: '/suppliers/getsuppliers',
            actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
            reader: {
                type: 'json',
                root: 'response', // which should match at the back
            },
        }
    });

    var suppliersgrid = Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        title: 'Suppliers Information',
        store: Ext.data.StoreManager.lookup('suppliers_store'),
        columnLines: true,
        columns: [
            {xtype: 'rownumberer', text: 'No'},
            {text: 'Name', dataIndex: 'name', flex: 35 / 100},
            {text: 'Type', dataIndex: 'type', flex: 18 / 100},
            {text: 'Service', dataIndex: 'service', flex: 30 / 100},
            {text: 'Email', dataIndex: 'email', flex: 45 / 100},
            {text: 'Mobile', dataIndex: 'telephone', flex: 20 / 100,},
            {text: 'website', dataIndex: 'website', flex: 45 / 100},
            {text: 'TIN', dataIndex: 'tin', flex: 18 / 100},

        ],
        plugins: [{
            ptype: 'rowexpander',
            frame: true,
            rowBodyTpl : [
                '<p><b>Bank Name:</b> {bank_name}</p><br>',
                '<p><b>Bank Account:</b> {bank_account}</p>',
                '<p><b>Location:</b> {location}</p>',

            ],
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: 'New Supplier',
                id: 'addsupplier',
                iconCls: 'add-icon',
                handler: function() {
                    addSupplier()
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Edit Supplier',
                iconCls: 'edit-icon',
                id: 'editsupplier',
                disabled: true,
                handler: function() {
                    editSupplier(supp_pk, supplier_name, supplier_type, supplier_service, supplier_tin, supplier_website, supplier_email, supplier_telephone, supplier_location, supplier_bankName, supplier_bankAccount, supplier_notes)
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Refresh',
                iconCls: 'refresh-icon',
                action: 'refresh',
                handler: function() {
                    suppliersstore.reload();
                }
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Remove Supplier',
                iconCls: 'remove-icon',
                id: 'removesupplier',
                disabled: true,
                handler: function() {
                    removeSupplier(supp_pk, supplier_name)
                }

            },'->',{
                xtype: 'textfield',
                emptyText: 'Search.....',
                labelWidth:50,
                width: 250,
                store: Ext.data.StoreManager.lookup('suppliers_store'),
                enableKeyEvents: true,
            }],
        },{
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            pageSize: 2,
            store : Ext.data.StoreManager.lookup('suppliers_store'),
            displayInfo : true,
            displayMsg : "Displaying customers {0} - {1} of {2}",
            emptyMsg : "Nothing to display",
        }],

        listeners: {
           itemclick: function(data, record, position) {
            Ext.getCmp('editsupplier').setDisabled(false)
            Ext.getCmp('removesupplier').setDisabled(false)
            supp_pk = record.data.id
            supplier_name = record.data.name
            supplier_type = record.data.type
            supplier_service = record.data.service
            supplier_location = record.data.location
            supplier_telephone = record.data.telephone
            supplier_email = record.data.email
            supplier_tin = record.data.tin
            supplier_website = record.data.website
            supplier_bankName = record.data.bank_name 
            supplier_bankAccount = record.data.bank_account
            supplier_notes = record.data.notes
           },
           itemdblclick: function(data, record, position) {

            
           
           },
        }


    });


  return suppliersgrid

}


// End of func for Suppliers


// Func for adding new supplier

function addSupplier() {

    var supplierwin = Ext.create('Ext.window.Window', {
        title: 'New Supplier',
        iconCls: 'add-icon',
        animateTarget: 'addsupplier',
        modal: true,
        width: '60%',
        items: [{
            xtype: 'form',
            frame: true,
            id: 'addsupplierform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Supplier Information',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'sname',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Type',
                        name: 'stype',
                        emptyText: 'i.e Private, Local, NGO',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Service',
                        name: 'sservice',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'numberfield',
                        minValue: 0, // preventing negative number
                        hideTrigger: true,
                        keyNavEnabled: false,
                        mouseWheelEnabled: false,
                        fieldLabel: 'Tin',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                        name: 'stin',
                    }],
                },{
                    xtype: 'splitter', 
                    width: 20,
                },{
                    xtype: 'fieldset',
                    title: 'Supplier Contacts',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Website',
                        name: 'swebsite',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'smail',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Tel No',
                        name: 'stelephone',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Location',
                        name: 'slocation',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 300,
                    }],  

                }],
            },{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Bank Details',
                    width: '50%',
                    height: 120,
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: 'Name',
                        emptyText: 'i.e Bank Of Kigali...',
                        name: 'sbankname',
                        labelWidth: 75,
                        width: 300,
                        height: 40,
                        allowBlank: true,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Account No',
                        name: 'sbankaccount',
                        labelWidth: 75,
                        width: 300,
                        height: 40,
                        allowBlank: true,
                    }],
                },{
                    xtype: 'splitter', 
                    width: 20,
                },{
                    xtype: 'fieldset',
                    title: 'Comments',
                    width: '50%',
                    items: [{
                        labelAlign: 'top',
                        xtype: 'textarea',
                        fieldLabel: 'Notes',
                        name: 'snotes',
                        labelWidth: 20,
                        width: 300,
                        allowBlank: true,
                    }]
                    
                }],

            }],
            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {

                    var add_supplier = Ext.getCmp('addsupplierform')
                    var supplier_values = add_supplier.getValues()
                    console.log(supplier_values)

                    Ext.Ajax.request({
                        url: '/suppliers/addsupplier',
                        method: 'POST',
                        params: {
                            supp_name: supplier_values.sname,
                            supp_type: supplier_values.stype,
                            supp_service: supplier_values.sservice,
                            supp_tin: supplier_values.stin,
                            supp_website: supplier_values.swebsite,
                            supp_mail: supplier_values.smail,
                            supp_tele: supplier_values.stelephone,
                            supp_location: supplier_values.slocation,
                            supp_bank_name: supplier_values.sbankname,
                            supp_bank_account: supplier_values.sbankaccount,
                            supp_notes: supplier_values.snotes,
                            
                        },
                        success: function() {
                            supplierwin.close()
                            suppliersstore.reload()
                            Ext.Msg.alert('Successfully', 'Successfully created a new supplier Account')
                        },
                        failure: function() {
                            Ext.Msg.alert('Failed', 'Failed to create a new supplier account')
                        }
                    });
                }
            },{
                text: 'Cancel',
                handler: function () {
                    supplierwin.close();
                }
            }],
        }],
    });

    supplierwin.show();
 }

// end of func for adding new supplier


// Func for Editing supplier

function editSupplier(pk, supplier_name, supplier_type, supplier_service, supplier_tin, supplier_website, supplier_email, supplier_telephone, supplier_location, supplier_bankName, supplier_bankAccount, supplier_notes) {

    var edit_supplierwin = Ext.create('Ext.window.Window', {
        title: 'New Supplier',
        iconCls: 'add-icon',
        animateTarget: 'addsupplier',
        modal: true,
        width: '60%',
        items: [{
            xtype: 'form',
            frame: true,
            id: 'editsupplierform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Supplier Information',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'sname',
                        labelWidth: 75,
                        value: supplier_name,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Type',
                        name: 'stype',
                        emptyText: 'i.e Private, Local, NGO',
                        labelWidth: 75,
                        value: supplier_type,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Service',
                        name: 'sservice',
                        labelWidth: 75,
                        value: supplier_service,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'numberfield',
                        minValue: 0, // preventing negative number
                        hideTrigger: true,
                        keyNavEnabled: false,
                        mouseWheelEnabled: false,
                        fieldLabel: 'Tin',
                        labelWidth: 75,
                        value: supplier_tin,
                        allowBlank: false,
                        width: 300,
                        name: 'stin',
                    }],
                },{
                    xtype: 'splitter', 
                    width: 20,
                },{
                    xtype: 'fieldset',
                    title: 'Supplier Contacts',
                    width: '50%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Website',
                        name: 'swebsite',
                        labelWidth: 75,
                        value: supplier_website,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'smail',
                        labelWidth: 75,
                        value: supplier_email,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Tel No',
                        name: 'stelephone',
                        labelWidth: 75,
                        value: supplier_telephone,
                        allowBlank: false,
                        width: 300,
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Location',
                        name: 'slocation',
                        labelWidth: 75,
                        value: supplier_location,
                        allowBlank: false,
                        width: 300,
                    }],  

                }],
            },{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Bank Details',
                    width: '50%',
                    height: 120,
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: 'Name',
                        emptyText: 'i.e Bank Of Kigali...',
                        name: 'sbankname',
                        labelWidth: 75,
                        value: supplier_bankName,
                        width: 300,
                        height: 40,
                        allowBlank: true,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Account No',
                        name: 'sbankaccount',
                        labelWidth: 75,
                        value: supplier_bankAccount,
                        width: 300,
                        height: 40,
                        allowBlank: true,
                    }],
                },{
                    xtype: 'splitter', 
                    width: 20,
                },{
                    xtype: 'fieldset',
                    title: 'Comments',
                    width: '50%',
                    items: [{
                        labelAlign: 'top',
                        xtype: 'textarea',
                        fieldLabel: 'Notes',
                        value: supplier_notes,
                        name: 'snotes',
                        labelWidth: 20,
                        width: 300,
                        allowBlank: true,
                    }]
                    
                }],

            }],
            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {

                    var edit_supplier = Ext.getCmp('editsupplierform')
                    var edit_supplier_values = edit_supplier.getValues()
                    var supp_prik = pk

                    Ext.Ajax.request({
                        url: '/suppliers/editsupplier',
                        method: 'POST',
                        params: {

                            edsupp_prik: supp_prik,
                            edsupp_name: edit_supplier_values.sname,
                            edsupp_type: edit_supplier_values.stype,
                            edsupp_service: edit_supplier_values.sservice,
                            edsupp_tin: edit_supplier_values.stin,
                            edsupp_website: edit_supplier_values.swebsite,
                            edsupp_mail: edit_supplier_values.smail,
                            edsupp_tele: edit_supplier_values.stelephone,
                            edsupp_location: edit_supplier_values.slocation,
                            edsupp_bank_name: edit_supplier_values.sbankname,
                            edsupp_bank_account: edit_supplier_values.sbankaccount,
                            edsupp_notes: edit_supplier_values.snotes,
                            
                        },
                        success: function() {
                            edit_supplierwin.close()
                            suppliersstore.reload()
                            Ext.Msg.alert('Successfully', 'Successfully edited supplier Account')
                        },
                        failure: function() {
                            Ext.Msg.alert('Failed', 'Failed to edit supplier account')
                        }
                    });
                }
            },{
                text: 'Cancel',
                handler: function () {
                    edit_supplierwin.close();
                }
            }],
        }],
    });

    edit_supplierwin.show();
 }

// End of func for editing supplier


// Func for deleting supplier

function removeSupplier(supplier_pk, supplierr_name) {
    Ext.Msg.confirm('Delete ' + supplierr_name, 'Are you sure you want to remove  ' + supplierr_name + ' from Your Suppliers', function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/suppliers/removesupplier',
        method: 'POST',
        params: {
            supplierkey: supplier_pk,
            
        },

        success: function() {
            
            suppliersstore.reload() // usersstore has a global scope
            Ext.Msg.alert('Success', 'Successfully removed Supplier Account')
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed to remove Supplier Account')
        }

     });

    }

   });
 }
// End of func for deleting supplier


// Func for suppliers invoice

function suppInvoices() {

    // the below has a global scope for it to be accessed in any function for a reload purpose
    suppliersinvoice_store = Ext.create('Ext.data.Store', {
        storeId: 'storeforsuppliers_invoice',
        id: 'suppliersInvoice',
        autoLoad: true,
        fields: [
           {name: 'id', type: 'int', mapping: 'fields.id'},
           {name: 'invoiceID', type: 'string', mapping: 'fields.invoiceID'},
           {name: 'I_supplier_name', type: 'string', mapping: 'fields.I_supplier_name'},
           {name: 'I_SDCID', type: 'string', mapping: 'fields.I_SDCID'},
           {name: 'I_reference', type: 'string', mapping: 'fields.I_reference'},
           {name: 'I_description', type: 'string', mapping: 'fields.I_description'},
           {name: 'I_status', type: 'string', mapping: 'fields.I_status'},
           {name: 'I_package', type: 'string', mapping: 'fields.I_package'},
           {name: 'I_amount_tobepaid', type: 'int', mapping: 'fields.I_amount_tobepaid'},
           {name: 'I_amountpaid', type: 'int', mapping: 'fields.I_amountpaid'},
           {name: 'I_amountremaining', type: 'int', mapping: 'fields.I_amountremaining'},
           {name: 'I_invoicedate', mapping: 'fields.I_invoicedate'},
           {name: 'I_invoiceduedate', mapping: 'fields.I_invoiceduedate'},
           {name: 'I_receivedon', mapping: 'fields.I_receivedon'},
           {name: 'I_suppnotes', type: 'string', mapping: 'fields.I_suppnotes'},
           {name: 'I_supp_service_id', mapping: 'fields.I_supp_service_id'},
           


        ],
        proxy: {
            type: 'ajax',
            url: '/suppliers/getsuppliersinvoices',
            actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
            reader: {
                type: 'json',
                root: 'response', // which should match at the back
            },
        },
    });

    var suppliersinvoice_grid = Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        title: 'Suppliers Invoices',
        store: Ext.data.StoreManager.lookup('storeforsuppliers_invoice'),
        columnLines: true,
        columns: [
            {xtype: 'rownumberer', text: 'No'},
            {text: 'Invoice ID', dataIndex: 'invoiceID', flex: 25 / 100,  renderer: Ext.util.Format.uppercase,},
            {text: 'Supplier Name', dataIndex: 'I_supplier_name', flex: 30 / 100},
            {text: 'Invoice Description', dataIndex: 'I_description', flex: 40 / 100},
            {text: 'Status', dataIndex: 'I_status', flex: 18 / 100},
            {text: 'Amount To Pay', dataIndex: 'I_amount_tobepaid', xtype: 'numbercolumn', format:'0,000', flex: 18 / 100},
            {text: 'Amount Paid', dataIndex: 'I_amountpaid', xtype: 'numbercolumn', format:'0,000', flex: 18 / 100},
            {text: 'Remaining Amt', dataIndex: 'I_amountremaining', xtype: 'numbercolumn', format:'0,000', flex: 20 / 100},
            {text: 'Invoice Date', dataIndex: 'I_invoicedate', flex: 20 / 100,},
            {text: 'Invoice Due Date', dataIndex: 'I_invoiceduedate', flex: 20 / 100,},

        ],
        
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: 'New Invoice',
                id: 'addsupplier_invoice',
                iconCls: 'add-icon',
                handler: function() {
                    addSuppliers_invoice()
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Edit Invoice',
                iconCls: 'edit-icon',
                id: 'editsupplier_invoice',
                disabled: true,
                handler: function() {
                  editsuppliers_invoice(supp_inv_pk, supp_Invoice_ID, supp_supplier_name, suppSDCID, supp_reference, supp_description, supp_status, supp_package, supp_amount_tobepaid, supp_amountpaid, supp_amount_remaining, supp_invoice_date, supp_invoice_due_date, supp_notes_a, supp_receivedon, supp_service_ID)
                },
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Refresh',
                iconCls: 'refresh-icon',
                action: 'refresh',
                handler: function() {
                    suppliersinvoice_store.reload();
                }
            },{
                xtype: 'tbseparator'
            },{
                xtype: 'button',
                text: 'Remove Invoice',
                iconCls: 'remove-icon',
                id: 'removesupplier_invoice',
                disabled: true,
                handler: function() {
                    removeSupplierInvoice(supp_inv_pk, supp_supplier_name)
                }

            },'->',{
                xtype: 'textfield',
                emptyText: 'Search.....',
                labelWidth:50,
                width: 250,
                store: Ext.data.StoreManager.lookup('storeforsuppliers_invoice'),
                enableKeyEvents: true,
            }],
        },{
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            pageSize: 2,
            store : Ext.data.StoreManager.lookup('storeforsuppliers_invoice'),
            displayInfo : true,
            displayMsg : "Displaying Invoices {0} - {1} of {2}",
            emptyMsg : "Nothing to display",
        }],

        listeners: {
           itemclick: function(data, record, position) {
            Ext.getCmp('editsupplier_invoice').setDisabled(false)
            Ext.getCmp('removesupplier_invoice').setDisabled(false)
            supp_inv_pk = record.data.id
            supp_Invoice_ID = record.data.invoiceID
            supp_supplier_name = record.data.I_supplier_name
            suppSDCID = record.data.I_SDCID
            supp_reference = record.data.I_reference
            supp_description = record.data.I_description
            supp_status = record.data.I_status
            supp_package = record.data.I_package
            supp_amount_tobepaid = record.data.I_amount_tobepaid
            supp_amountpaid = record.data.I_amountpaid
            supp_amount_remaining = record.data.I_amountremaining
            supp_invoice_date = record.data.I_invoicedate
            supp_invoice_due_date = record.data.I_invoiceduedate
            supp_notes_a = record.data.I_suppnotes
            supp_service_ID = record.data.I_supp_service_id   // error check 2288
            supp_receivedon = record.data.I_receivedon
            console.log(supp_amount_tobepaid)


           },
           itemdblclick: function(data, record, position) {
            editsuppliers_invoice(supp_inv_pk, supp_Invoice_ID, supp_supplier_name, suppSDCID, supp_reference, supp_description, supp_status, supp_package, supp_amount_tobepaid, supp_amountpaid, supp_amount_remaining, supp_invoice_date, supp_invoice_due_date, supp_notes_a, supp_receivedon, supp_service_ID)

           },
        }


    });


  return suppliersinvoice_grid

}

// End of func for my suppliers Invoice


// func for adding a new supplier invoice

function addSuppliers_invoice() {
    var addsuppliers_invoice_win = Ext.create('Ext.window.Window', {
        title: 'New Supplier Invoice',
        modal: true,
        width: 700,
        minWidth: 350,
        height: 420,
        animateTarget: 'addsupplier_invoice',
        iconCls: 'add-icon',
        items: [{
            xtype: 'tabpanel',
            // title: 'Customer Invoice Information',
            width: '100%',
            height: '100%',
            items: [{
                title: 'Invoice Information',
                xtype: 'form',
                frame: true,
                id: 'supplierInvoiceform',
                layout: 'vbox',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'fieldset',
                        title: 'Invoice Information',
                        frame: true,
                        items: [{
                           
                                xtype: 'textfield',
                                fieldLabel: 'Bill ID',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'supp_invoiceID',
                                frame: true,
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Supplier Name',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'supp_invoice_name',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'SDCID',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                name: 'supp_SDCID',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                format:'d/m/Y',
                                name: 'supp_invoicedate',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Due Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                format:'d/m/Y',
                                name: 'supp_invoiceduedate',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Reference',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                name: 'supp_invoice_reference',
                          
                        }],
                    },{
                        xtype: 'splitter',
                        width: 30,
                    },{
                        xtype: 'fieldset',
                        title: 'Invoice Payments',
                        height: 215,
                        items: [{
                                xtype: 'combobox',
                                fieldLabel: 'Status',
                                labelWidth: 75,
                                allowBlank: false,
                                store: statuses,
                                displayField: 'name',
                                // queryMode: 'local',
                                width: 300,
                                name: 'supplier_status_invoice',
                                frame: true,
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt To Pay',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'supplier_amountpay_invoice',
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt Paid',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'supplier_amountpaid_invoice',
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Remain Amt',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'remaining_supp_invoice',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Package',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                name: 'supp_package',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Received On',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                format:'d/m/Y',
                                name: 'supplier_invoice_receivedon',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Service Id',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                name: 'supp_serviceId',
                        }],
                    }],
                },{
                    xtype: 'container',
                    frame: true,
                    layout: 'hbox',
                    items: [{
                        xtype: 'splitter',
                        width: 8,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Invoice Desc',
                        name: 'supplier_invoice_desc',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        labelAlign: 'top',
                    },{
                        xtype: 'splitter',
                        width: 22,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Notes',
                        name: 'supplier_invoice_notes',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        labelAlign: 'top',
                    }]
                }],
            },{
                xtype: 'gridpanel',
                title: 'Associated Items',
                columns: [
                    {text: 'Item Description', flex: 30 / 100},
                    {text: 'Quantity'},
                    {text: 'Unit Price(rwf)'},
                    {text: 'Total exclu VAT'},
                    {text: 'VAT'},
                    {text: 'Total'},
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: ['->',{
                    xtype: 'button',
                    text: 'Save',
                    // formBind: true,
                    iconCls: 'save-icon',
                    handler: function() {
                        var supplierInvoice_info = Ext.getCmp('supplierInvoiceform')
                        var supplierInvoice_value = supplierInvoice_info.getValues()
                        console.log(supplierInvoice_value)
                        Ext.Ajax.request({
                            url: '/suppliers/addsupplierinvoice',
                            method: 'POST',
                            params: {
                                supplierInvId: supplierInvoice_value.supp_invoiceID,
                                supplierName: supplierInvoice_value.supp_invoice_name,
                                supplierSDCID: supplierInvoice_value.supp_SDCID,
                                supplierInvDate: supplierInvoice_value.supp_invoicedate,
                                supplierInvDueDate: supplierInvoice_value.supp_invoiceduedate,
                                supplierReference: supplierInvoice_value.supp_invoice_reference,
                                supplierStatus: supplierInvoice_value.supplier_status_invoice,
                                supplierAmtToPay: supplierInvoice_value.supplier_amountpay_invoice,
                                supplierAmtPaid: supplierInvoice_value.supplier_amountpaid_invoice,
                                supplierRemAmt: supplierInvoice_value.remaining_supp_invoice,
                                supplierPackage: supplierInvoice_value.supp_package,
                                supplierInvReceivedOn: supplierInvoice_value.supplier_invoice_receivedon,
                                supplierServiceID: supplierInvoice_value.supp_serviceId,
                                supplierInvDescri: supplierInvoice_value.supplier_invoice_desc,
                                supplierNotes: supplierInvoice_value.supplier_invoice_notes,

                            },

                            success: function() {
                                addsuppliers_invoice_win.close()
                                suppliersinvoice_store.reload() // usersstore has a global scope
                                Ext.Msg.alert('Success', 'Successfully created a New Invoice')
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to create a New Invoice')
                            }
                        });
                        
                    },
                },{
                    xtype: 'button',
                    text: 'Cancel',
                    iconCls: 'remove-icon',
                    handler: function() {
                        addsuppliers_invoice_win.close()
                    }
                }]
            }],
        }],
    });

    addsuppliers_invoice_win.show();

}
// End of func for adding a new supplier invoice



// Func for editing suppliers invoice

function editsuppliers_invoice(supp_inv_pk, supp_Invoice_ID, supp_supplier_name, suppSDCID, supp_reference, supp_description, supp_status, supp_package, supp_amount_tobepaid, supp_amountpaid, supp_amount_remaining, supp_invoice_date, supp_invoice_due_date, supp_notes_a, supp_receivedon, supp_service_ID) {
    var editsuppliers_invoice_win = Ext.create('Ext.window.Window', {
        title: 'New Supplier Invoice',
        modal: true,
        width: 700,
        minWidth: 350,
        height: 420,
        animateTarget: 'addsupplier_invoice',
        iconCls: 'add-icon',
        items: [{
            xtype: 'tabpanel',
            // title: 'Customer Invoice Information',
            width: '100%',
            height: '100%',
            items: [{
                title: 'Invoice Information',
                xtype: 'form',
                frame: true,
                id: 'supplierInvoiceform',
                layout: 'vbox',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'fieldset',
                        title: 'Invoice Information',
                        frame: true,
                        items: [{
                           
                                xtype: 'textfield',
                                fieldLabel: 'Bill ID',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'supp_invoiceID',
                                value: supp_Invoice_ID,
                                frame: true,
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Supplier Name',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                name: 'supp_invoice_name',
                                value: supp_supplier_name,
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'SDCID',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                name: 'supp_SDCID',
                                value: suppSDCID,
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                format:'d-m-Y',
                                value: supp_invoice_date,
                                name: 'supp_invoicedate',
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Invoice Due Date',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                format:'d-m-Y',
                                value: supp_invoice_due_date,
                                name: 'supp_invoiceduedate',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Reference',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                name: 'supp_invoice_reference',
                                value: supp_reference,
                          
                        }],
                    },{
                        xtype: 'splitter',
                        width: 30,
                    },{
                        xtype: 'fieldset',
                        title: 'Invoice Payments',
                        height: 215,
                        items: [{
                                xtype: 'combobox',
                                fieldLabel: 'Status',
                                labelWidth: 75,
                                allowBlank: false,
                                store: statuses,
                                displayField: 'name',
                                // queryMode: 'local',
                                width: 300,
                                name: 'supplier_status_invoice',
                                frame: true,
                                value: supp_status,
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt To Pay',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                value: supp_amount_tobepaid,
                                name: 'supplier_amountpay_invoice',
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Amt Paid',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                value: supp_amountpaid,
                                name: 'supplier_amountpaid_invoice',
                            },{
                                xtype: 'numberfield',
                                minValue: 0, // preventing negative number
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                fieldLabel: 'Remain Amt',
                                labelWidth: 75,
                                allowBlank: false,
                                width: 300,
                                value: supp_amount_remaining,
                                name: 'remaining_supp_invoice',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Package',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                name: 'supp_package',
                                value: supp_package,
                            },{
                                xtype: 'datefield',
                                fieldLabel: 'Received On',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                format:'d-m-Y',
                                value: supp_receivedon,
                                name: 'supplier_invoice_receivedon',
                            },{
                                xtype: 'textfield',
                                fieldLabel: 'Service Id',
                                labelWidth: 75,
                                allowBlank: true,
                                width: 300,
                                emptyText: 'Optional',
                                value: supp_service_ID,
                                name: 'supp_serviceId',
                        }],
                    }],
                },{
                    xtype: 'container',
                    frame: true,
                    layout: 'hbox',
                    items: [{
                        xtype: 'splitter',
                        width: 8,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Invoice Desc',
                        name: 'supplier_invoice_desc',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        labelAlign: 'top',
                        value: supp_description,
                    },{
                        xtype: 'splitter',
                        width: 22,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Notes',
                        name: 'supplier_invoice_notes',
                        labelWidth: 50,
                        width: 320,
                        allowBlank: false,
                        value: supp_notes_a,
                        labelAlign: 'top',
                    }]
                }],
            },{
                xtype: 'gridpanel',
                title: 'Associated Items',
                columns: [
                    {text: 'Item Description', flex: 30 / 100},
                    {text: 'Quantity'},
                    {text: 'Unit Price(rwf)'},
                    {text: 'Total exclu VAT'},
                    {text: 'VAT'},
                    {text: 'Total'},
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: ['->',{
                    xtype: 'button',
                    text: 'Save',
                    // formBind: true,
                    iconCls: 'save-icon',
                    handler: function() {
                        var supplierInvoice_info = Ext.getCmp('supplierInvoiceform')
                        var supplierInvoice_value = supplierInvoice_info.getValues()
                        var primaryS = supp_inv_pk
                        console.log(supplierInvoice_value)
                        Ext.Ajax.request({
                            url: '/suppliers/editsupplierinvoice',
                            method: 'POST',
                            params: {
                                supp_inv_ID: primaryS,
                                supplierInvId: supplierInvoice_value.supp_invoiceID,
                                supplierName: supplierInvoice_value.supp_invoice_name,
                                supplierSDCID: supplierInvoice_value.supp_SDCID,
                                supplierInvDate: supplierInvoice_value.supp_invoicedate,
                                supplierInvDueDate: supplierInvoice_value.supp_invoiceduedate,
                                supplierReference: supplierInvoice_value.supp_invoice_reference,
                                supplierStatus: supplierInvoice_value.supplier_status_invoice,
                                supplierAmtToPay: supplierInvoice_value.supplier_amountpay_invoice,
                                supplierAmtPaid: supplierInvoice_value.supplier_amountpaid_invoice,
                                supplierRemAmt: supplierInvoice_value.remaining_supp_invoice,
                                supplierPackage: supplierInvoice_value.supp_package,
                                supplierInvReceivedOn: supplierInvoice_value.supplier_invoice_receivedon,
                                supplierServiceID: supplierInvoice_value.supp_serviceId,
                                supplierInvDescri: supplierInvoice_value.supplier_invoice_desc,
                                supplierNotes: supplierInvoice_value.supplier_invoice_notes,

                            },

                            success: function() {
                                editsuppliers_invoice_win.close()
                                suppliersinvoice_store.reload() // usersstore has a global scope
                                Ext.Msg.alert('Success', 'Successfully edited an Invoice')
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to edit an Invoice')
                            }
                        });
                        
                    },
                },{
                    xtype: 'button',
                    text: 'Cancel',
                    iconCls: 'remove-icon',
                    handler: function() {
                        editsuppliers_invoice_win.close()
                    }
                }]
            }],
        }],
    });

    editsuppliers_invoice_win.show();

}
// End of func for editing suppliers invoice


// Func for removing suppliers invoice


function removeSupplierInvoice(supplierinv_pk, supplierinv_name) {
    Ext.Msg.confirm('Delete ' + supplierinv_name, 'Are you sure you want to remove  ' + supplierinv_name + ' from Your Suppliers Invoices', function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/suppliers/removesupplierinvoice',
        method: 'POST',
        params: {
            supplierinv_key: supplierinv_pk,
            
        },

        success: function() {
            
            suppliersinvoice_store.reload() // usersstore has a global scope
            Ext.Msg.alert('Success', 'Successfully removed Supplier Invoice')
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed to remove Supplier Invoice')
        }

     });

    }

   });
 }
// End of func for removing suppliers invoice


// func for adding a user
function addUser() {
	var win = Ext.create('Ext.window.Window', {
		title: 'New User',
		iconCls: 'add-icon',
		animateTarget: 'adduser',
		modal: true,
		// width: 700,
		
		items: [
		  {
		  	xtype: 'form',
		  	title: 'User Information',
		  	method: 'POST',
		  	frame: true,
            id: 'addUserForm',
            height: '100',
            layout: 'hbox',
            // margins: '-1 -1 -1 -1',
		  	/*defaults: { 
                anchor: '100%',
                labelWidth: 75,

            },*/
            items: [{
                xtype: 'container',
                layout: 'vbox',
                items: [{
                    fieldLabel: 'User Name',
                    name: 'uname',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'First Name',
                    name: 'fname',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Last Name',
                    name: 'lname',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            },{xtype: 'splitter', width: 20,},{
                xtype: 'container',
                layout: 'vbox', 
                items: [{
                    fieldLabel: 'Email',
                    name: 'email',
                    xtype: 'textfield',
                    allowBlank: 'false',
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Password',
                    name: 'passwd',
                    xtype: 'textfield',
                    inputType: 'password',
                    labelWidth: 75,
                    allowBlank: false,
                    width: 250,
                },{
                    fieldLabel: 'Confirm',
                    xtype: 'textfield',
                    inputType: 'password',
                    name: 'confirmpass',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            }],

		  	buttons: [{
		  			formBind: true,
                    id: 'saveUser',
		  			text: 'Save',
                    // disabled: true,
                    handler: function() {
                        var adduser_form = Ext.getCmp('addUserForm')
                        var user_data = adduser_form.getValues()
                        
                        var firstpass = user_data.passwd
                        var confirmpass = user_data.confirmpass

                        if (firstpass != confirmpass){
                            Ext.Msg.alert('Check Your Password again', 'Password should be the same');
                        }
                        Ext.Ajax.request({
                            url: '/Admin/addUserfunc',
                            method: 'POST',
                            params: {
                                username : user_data.uname,
                                firstname: user_data.fname,
                                lastname: user_data.lname,
                                email: user_data.email,
                                password: user_data.passwd,
                            },

                            success: function() {
                                win.close()
                                usersstore.reload() // usersstore has a global scope
                                Ext.Msg.alert('Success', 'Successfully created a New User Account')
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to create a new User Account')
                            }
                        });


                    }

		  		},{
		  			text: 'Cancel',
		  			handler: function() {
		  				win.close()
		  			}
		  		}
		  	],
		  }

		],

	});
	win.show()
}


//func for editing a user

function editUser(primaryKey, username, firstname, lastname, email) {
    var win = Ext.create('Ext.window.Window', {
        title: 'Users Information',
        iconCls: 'edit-icon',
        animateTarget: 'edituser',
        modal: true,
        // width: '50%',
        
        // height: '80%',
        items: [
          {
            xtype: 'form',
            title: 'User Information',
            method: 'POST',
            id: 'editUserForm',
            frame: true,
            defaults: { anchor: '100%' },
            layout: 'hbox',

            items: [{
                xtype: 'container',
                layout: 'vbox',
                items: [{
                    fieldLabel: 'User Name',
                    name: 'eduname',
                    value: username,
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'First Name',
                    name: 'edfname',
                    xtype: 'textfield',
                    value: firstname,
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Last Name',
                    name: 'edlname',
                    xtype: 'textfield',
                    value: lastname,
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            },{xtype: 'splitter', width: 20,},{
                xtype: 'container',
                layout: 'vbox', 
                items: [{
                    fieldLabel: 'Email',
                    name: 'edemail',
                    xtype: 'textfield',
                    value: email,
                    allowBlank: 'false',
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Password',
                    name: 'edpasswd',
                    xtype: 'textfield',
                    inputType: 'password',
                    value: 'nonenonenonenonenonenone',
                    labelWidth: 75,
                    allowBlank: false,
                    width: 250,
                },{
                    fieldLabel: 'Confirm',
                    xtype: 'textfield',
                    inputType: 'password',
                    value: 'nonenonenonenonenonenone',
                    name: 'edpasswdconf',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            }],
            
            buttons: [
                {
                    formBind: true,
                    text: 'Save',
                    handler: function() {

                        var userdata = Ext.getCmp('editUserForm')
                        var eddata = userdata.getValues()
                        var key = primaryKey
                        var edfirstpass = eddata.edpasswd
                        var edconfirmpass = eddata.edpasswdconf

                        if (edfirstpass != edconfirmpass ){
                            Ext.Msg.alert('Check Your Password again', 'Password should be the same');
                        }

                        Ext.Ajax.request({
                            url: '/Admin/editUserfunc',
                            method: 'POST',
                            params: {
                                primarykey: key,
                                username : eddata.eduname,
                                firstname: eddata.edfname, // for mapping to the database and the front end
                                lastname: eddata.edlname,
                                email: eddata.edemail,
                                password: eddata.edpasswd,
                            },

                            success: function() {
                                win.close()
                                usersstore.reload() // usersstore has a global scope
                                Ext.Msg.alert('Success', 'Successfully edited an Account')
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to edit a User Account')
                            }
                        });
                    }

                },{
                    text: 'Cancel',
                    handler: function() {
                        win.close()
                    }
                }
            ],
          }

        ],

    });
    win.show()
}

// func for removing a user 

function removeUser(key, name) {
   
   Ext.Msg.confirm('Delete ' + name, 'Are you sure you want to delete ' + name, function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/Admin/removeUserfunc',
        method: 'POST',
        params: {
            primarykey: key,
            
        },

        success: function() {
            
            usersstore.reload() // usersstore has a global scope
            Ext.Msg.alert('Success', 'Successfully removed an Account')
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed to remove an Account')
        }

     });  

    }

   });
   

}


// func for Administration
function users() {

	usersstore = Ext.create('Ext.data.Store', {
		storeId: 'users',
        id: 'storeforusers',
		autoLoad: true,
		fields: [
		   {name: 'id', type: 'int', mapping: 'fields.id'},
           {name: 'username', type: 'string', mapping: 'fields.username'},
		   {name: 'firstname', type: 'string', mapping: 'fields.firstname'},
		   {name: 'lastname', type: 'string', mapping: 'fields.lastname'},
		   {name: 'email', type: 'string', mapping: 'fields.email'},
		   {name: 'created', type: 'string', mapping: 'fields.created'},
		   {name: 'lastlogin', type: 'string', mapping: 'fields.lastlogin'},
		   {name: 'active', type: 'string', mapping: 'fields.active'}

		],
		proxy: {
			type: 'ajax',
			url: '/Admin/getusers',
			actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
			reader: {
				type: 'json',
				root: 'response', // which should match at the back
			},
		}
	});

	// End of a store

	// Start of a Grid

	var gridUsers = Ext.create('Ext.grid.Panel', {
		renderTo: Ext.getBody(),
		title: 'Users Information',
		store: Ext.data.StoreManager.lookup('users'),
		columnLines: true,
        selType: 'rowmodel',

        /*plugins: [
            {
                ptype: 'rowediting',
                clicksToEdit: 2,
            }
        ],*/
		columns: [
			{xtype: 'rownumberer', text: 'No'},
            {text: 'User Name', dataIndex: 'username', flex: 30 / 100},
			{text: 'First Name', dataIndex: 'firstname', flex: 30 / 100},
			{text: 'Last Name', dataIndex: 'lastname', flex: 30 / 100},
			{text: 'Email', dataIndex: 'email', flex: 65 / 100, /*renderer: function(value){return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);}*/},
			{text: 'Created On', dataIndex: 'created', flex: 50 / 100},
			{text: 'Last Login', dataIndex: 'lastlogin', flex: 50 / 100},
			{text: 'Active', dataIndex: 'active', flex: 30 / 100, renderer: Ext.util.Format.uppercase},

		],
		dockedItems: [
        {
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					text: 'New User',
					iconCls: 'add-icon',
					id: 'adduser',
					handler: function(){
						// A call to a function for adding user
						addUser()
					}
				},{
					xtype: 'tbseparator',
				},{
					xtype: 'button',
					text: 'Edit User',
                    disabled: true,
					id: 'edituser',
					iconCls: 'edit-icon',
					handler: function() {
						editUser(primaryKey, username, firstname, lastname, email);
					}
				},{
					xtype: 'tbseparator'
				},{
					xtype: 'button',
					text: 'Refresh',
					iconCls: 'refresh-icon',
					action: 'refresh',
                    handler: function() {
                        usersstore.reload();
                    }
				},{
					xtype: 'tbseparator',
				},{
					xtype: 'button',
					text: 'Remove User',
					id: 'removeuser',
                    disabled: true,
					iconCls: 'remove-icon',
					handler: function() {
                        removeUser(primaryKey, username)
                        
					},
				},{
                    xtype: 'tbseparator',
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    store: Ext.data.StoreManager.lookup('users'),
                    enableKeyEvents: true,
                          
                }
			],
		},{
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            pageSize: 2,
            store : Ext.data.StoreManager.lookup('users'),
            displayInfo : true,
            displayMsg : "Displaying users {0} - {1} of {2}",
            emptyMsg : "Nothing to display",



        }],
        
        listeners: {
           itemclick: function(data, record, position) {
            Ext.getCmp('edituser').setDisabled(false)
            Ext.getCmp('removeuser').setDisabled(false)

             primaryKey = record.data.id
             username = record.data.username
             firstname = record.data.firstname
             lastname = record.data.lastname
             email = record.data.email
            
             // The above variables all have a global scope means to be accessed anywhere in the program
            
           },
           itemdblclick: function(data, record, position) {

            var primaryKey = record.data.id
            var username = record.data.username
            var firstname = record.data.firstname
            var lastname = record.data.lastname
            var email = record.data.email
            
            editUser(primaryKey, username, firstname, lastname, email);
           
           },
        }


	});

	return gridUsers
}

// End of func for Administration


// End of functionliteis


    var tree = Ext.create('Ext.tree.Panel', {
        region: 'west', //for border layout
        collapsible: true,
        useArrows:true,
        title: 'Menu',
        height: '100%',
        width: 200,
        store: store,
        rootVisible: false,
        margins: '1 0 1 1',
        listeners: {
            select: function (s, record, m) {  
               /* myTab1.removeAll()//(myTab1.items[0])
                myTab1.add(my)*/
                //console.log(x=myTab1.items); console.log(y=myTab1)
                //cards.getLayout().setActiveItem(m.raw.panel);
               


               


               // in the below 
               var id = record.data.id

               console.log(id)
               // myTab.removeAll()

               if(id === 'node1'){
               myTab.removeAll()
               myTab.add(userprofile())

               }else if(id === 'node2'){
                myTab.removeAll()
                myTab.add(customers())

               }else if(id === 'node3'){
                myTab.removeAll()
                myTab.add(users())
                
               }else if(id === 'node4'){
                myTab.removeAll()
                myTab.add(suppliers())

               }else if(id === 'uprofile'){
                myTab.removeAll()
               	myTab.add(userprofile())

               }else if(id === 'projects'){
                myTab.removeAll()
               	myTab.add(projects())

               }else if(id === 'work'){
                myTab.removeAll()
               	myTab.add(work())

               }else if(id === 'other'){
                myTab.removeAll()
               	myTab.add(other())

               }else if(id === 'customers'){
                myTab.removeAll()
               	myTab.add(customers())

               }else if(id === 'custInvoices'){
                myTab.removeAll()
               	myTab.add(custInvoices())

               }else if(id === 'suppliers'){
                myTab.removeAll()
               	myTab.add(suppliers())

               }else if(id === 'suppInvoices'){
                myTab.removeAll()
                myTab.add(suppInvoices())

               }else if(id === 'usersinfo'){
                myTab.removeAll()
               	myTab.add(users())

               }/*else { 

                alert('Test')
              
               }*/

               

            }
        }
    });
    var viewport = Ext.create('Ext.container.Viewport', {
        layout: 'border',
        width: 600,
        /*height: 250,
        margins: '10, 10, 10, 10',*/
        // defaults: {bodyPadding: 5},  / This was causing my background image not to fit
        items: [
            mynorthpanel, tree, myTab, southpanel
            //cards
        ],
        renderTo: Ext.getBody()
    });
});