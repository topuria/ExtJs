Ext.define("SL.view.Main", {
    extend: 'Ext.tab.Panel',
    layout: 'fit',
    viewModel: {
        xclass: 'SL.view.MainViewModel'
    },
    items: [{
        xtype: 'panel',
        title: 'hbox',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: "panel",
            title: "panel1",
            flex: 1,
            html: "Panel 1 sadasdsadasd"

        }, {
            xtype: "panel",
            title: "panel2",
            flex: 1,
            html: "Panel 2 sadasdsadasd"

        }, {
            xtype: "panel",
            title: "panel3",
            flex: 1,
            html: "Panel 3 sadasdsadasd"
        }]
    }, {
        xtype: 'panel',
        title: 'vbox',
        layout: {
            type: 'vbox',
            align: 'stretch',
            border: false
        },
        items: [{
            xtype: 'panel',
            title: 'Panel1',
            html: "this is vbox's first tab panels html",
            flex: 1
        }, {
            xtype: 'panel',
            title: 'Panel2',
            html: "this is second Vbox's panels html",
            flex: 1
        }, {
            xtype: 'panel',
            title: 'Panel3',
            html: "this is second Vbox's panels html",
            flex: 1
        }]

    }, {
        xtype: 'panel',
        title: 'FitLayout',
        autoScroll: true,
        html: "\n" +
            "Where does it come from?\n" +
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n" +
            "\n" +
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n" +
            "\n" +
            "Where can I get some?\n" +
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n" +
            "\n" +
            "5\n" +
            "\tparagraphs\n" +
            "\twords\n" +
            "\tbytes\n" +
            "\tlists\n" +
            "\tStart with 'Lorem\n" +
            "ipsum dolor sit amet...'\n",
    }, {
        xtype: 'panel',
        title: 'border',
        layout: 'border',
        tbar: [{
            xtype: 'textfield',
            label: 'searchText',
            id: 'searchValue'
        }, {
            text: 'search',
        }
        ],
        items: [{
            xtype: 'panel',
            layout: {
                type: 'vbox'
            },
            region: "west",
            title: "Menu",
            width: 150,
            split: true,
            collapsible: true,
            items: [{
                xtype: 'button',
                text: 'Home',
                padding: '5'
            }, {
                xtype: 'button',
                text: 'Posts',
                padding: '5'
            }, {
                xtype: 'button',
                text: 'Customers',
                padding: '5'
            }]
        }, {
            xtype: "panel",
            region: "center",
            title: "panel1",
            flex: 1,
            items: [{
                xtype: 'button',
                text: 'Press this Button',
            }]
        }, {
            xtype: "panel",
            region: "east",
            title: "panel2",
            flex: 1,
            items: [{
                xtype: 'button',
                text: 'Press this Button too'
            }]
        }]

    }, {
        xtype: 'grid',
        title: 'Grid',
        tbar: [{
            xtype: 'textfield'
        }, {
            text: 'search',
        }, {
            xtype: 'button',
            text: 'press',
            handler: 'Hello'
        }
        ],
        columns: [
            {text: 'Name', dataIndex: 'name'},
            {text: 'Email', dataIndex: 'email'},
            {text: 'Phone', dataIndex: 'phone'}
        ]
    }, {
        xtype: 'form',
        title: 'Form',
        items: [{
            xtype: 'numberfield',
            anchor: '50%',
            name: 'age',
            fieldLabel: 'Age',
            minValue: 0, //prevents negative numbers

            // Remove spinner buttons, and arrow key and mouse wheel listeners
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        }]
    }, {
        xtype: 'panel',
        layout: 'border',
        title: 'border with accordion',
        items: [{
            xtype: 'panel',
            region: 'center',
            flex: 2,
            layout: {
                type: 'vbox',
                align: 'stretch',
                border: false
            },
            items: [{
                tbar: [{
                    text: 'search',
                }, {
                    text: 'press',
                }
                ],
                xtype: 'panel',
                title: 'first ',
                html: 'asdasdasd',
                flex: 1
            }, {
                xtype: 'panel',
                title: 'second',
                flex: 1

            }]
        }, {
            xtype: 'panel',
            region: 'east',
            flex: 1,
            layout: 'accordion',
            defaults: {
                bodyPadding: 5
            },
            items: [{
                title: 'group1',
                layout: 'vbox',
                items: [{
                    xtype: 'component',
                    autoEl: 'h1',
                    html: 'Card Title'
                }]
            }, {
                title: 'group2',
                layout: 'vbox',
                items: [{
                    xtype: 'component',
                    autoEl: 'h1',
                    html: 'Card Title 2'
                }]
            }, {
                title: 'group 3',
                items: [{
                    xtype: 'component',
                    autoEl: 'h1',
                    html: 'Cart Title 3'
                }]
            }]
        }]
    }
    ]
})
