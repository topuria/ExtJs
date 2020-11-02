Ext.define('SL.new.MainViewModel',{
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

