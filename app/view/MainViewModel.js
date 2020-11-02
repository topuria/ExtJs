Ext.define('SL.view.MainViewModel',{
    extend:'Ext.app.ViewModel',
    navItems:{
        type:'tree',
        root:{
            items:[{
                xtype:'button',
                text: 'Home'
            },{
                xtype: 'button',
                text: 'Archive'
            }]
        }
    }
})

