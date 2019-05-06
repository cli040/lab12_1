/*
 * File: app/view/TimeTabPanel.js
 *
 * This file was generated by Sencha Architect version 4.2.5.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.7.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.7.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Lab12_1.view.TimeTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.timetabpanel',

    requires: [
        'Lab12_1.view.TimeTabPanelViewModel',
        'Lab12_1.view.TimeTabPanelViewController',
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.Label',
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number'
    ],

    controller: 'timetabpanel',
    viewModel: {
        type: 'timetabpanel'
    },
    fullscreen: false,
    tabBarPosition: 'bottom',

    layout: {
        type: 'card',
        animation: false
    },
    items: [
        {
            xtype: 'container',
            title: 'Day',
            iconCls: 'x-fa fa-calendar',
            layout: 'fit',
            items: [
                {
                    xtype: 'titlebar',
                    id: 'DayId',
                    docked: 'top',
                    title: '03/05/2019',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            maxWidth: 100,
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.create('Lab12_1.view.TimeFormPanel', {fullscreen: true});
                                    },
                                    itemId: 'AddTimeDayId',
                                    ui: 'confirm',
                                    docked: 'top',
                                    margin: 0,
                                    padding: 0,
                                    text: '+'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var currDateString = Ext.getCmp('DayId').getTitle();

                                var splitDate = currDateString.split("/");

                                currDateString = splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2];

                                var currDate = new Date(currDateString);

                                currDate.setDate(currDate.getDate() + 1);

                                /** Format Start **/

                                var dd = currDate.getDate();
                                var mm = currDate.getMonth() + 1; //January is 0!

                                var yyyy = currDate.getFullYear();

                                if (dd < 10)
                                {
                                    dd = '0' + dd;
                                }

                                if (mm < 10)
                                {
                                    mm = '0' + mm;
                                }

                                var HH = currDate.getHours();
                                var MM = currDate.getMinutes();

                                if(HH < 10)
                                {
                                    HH = "0" + HH;
                                }
                                if(MM < 10)
                                {
                                    MM = "0" + MM;
                                }

                                // get filterDate

                                var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                var monthsName = ["January", "Februry", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                                var searchString = daysName[currDate.getDay()] + " " + monthsName[currDate.getMonth()] + " " + (currDate.getDate() <= 9 ? "0" + currDate.getDate() : currDate.getDate()) + " " + currDate.getFullYear();

                                var store = Ext.getStore("TimeStore");
                                store.clearFilter();
                                store.filter("Start", searchString);

                                // end filterDate

                                currDate = dd + '/' + mm + '/' + yyyy;

                                /** Format End **/

                                Ext.getCmp('DayId').setTitle(currDate);

                                var sumValue = store.sum('Time');
                                Ext.getCmp('SumDayId').setHtml("Sum: " + sumValue + " Hours");
                            },
                            align: 'right',
                            ui: 'square',
                            margin: '0, 5, 0, 0',
                            text: '>'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var currDateString = Ext.getCmp('DayId').getTitle();

                                var splitDate = currDateString.split("/");

                                currDateString = splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2];

                                var currDate = new Date(currDateString);

                                currDate.setDate(currDate.getDate() - 1);

                                /** Format Start **/

                                var dd = currDate.getDate();
                                var mm = currDate.getMonth() + 1; //January is 0!

                                var yyyy = currDate.getFullYear();

                                if (dd < 10)
                                {
                                    dd = '0' + dd;
                                }

                                if (mm < 10)
                                {
                                    mm = '0' + mm;
                                }

                                var HH = currDate.getHours();
                                var MM = currDate.getMinutes();

                                if(HH < 10)
                                {
                                    HH = "0" + HH;
                                }
                                if(MM < 10)
                                {
                                    MM = "0" + MM;
                                }

                                // get filterDate

                                var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                var monthsName = ["January", "Februry", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                                var searchString = daysName[currDate.getDay()] + " " + monthsName[currDate.getMonth()] + " " + (currDate.getDate() <= 9 ? "0" + currDate.getDate() : currDate.getDate()) + " " + currDate.getFullYear();

                                var store = Ext.getStore("TimeStore");
                                store.clearFilter();
                                store.filter("Start", searchString);

                                // end filterDate

                                currDate = dd + '/' + mm + '/' + yyyy;

                                /** Format End **/

                                Ext.getCmp('DayId').setTitle(currDate);

                                var sumValue = store.sum('Time');

                                Ext.getCmp('SumDayId').setHtml("Sum: " + sumValue + " Hours");
                            },
                            ui: 'square',
                            margin: '0, 0, 0, 5',
                            text: '<'
                        }
                    ]
                },
                {
                    xtype: 'label',
                    id: 'SumDayId',
                    itemId: 'SumDayId',
                    docked: 'bottom',
                    html: 'Sum: '
                },
                {
                    xtype: 'grid',
                    height: '100%',
                    id: 'DayGridId',
                    itemId: 'DayGridId',
                    width: '100%',
                    store: 'TimeStore',
                    title: 'Day',
                    columns: [
                        {
                            xtype: 'datecolumn',
                            id: 'DayStartId',
                            itemId: 'DayStartId',
                            width: 175,
                            dataIndex: 'Start',
                            text: 'Start',
                            format: 'd/m/Y H:i'
                        },
                        {
                            xtype: 'datecolumn',
                            width: 175,
                            dataIndex: 'End',
                            text: 'End',
                            format: 'd/m/Y H:i'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 100,
                            dataIndex: 'Time',
                            text: 'Time'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'DayGridCommentId',
                            itemId: 'DayGridCommentId',
                            width: 250,
                            dataIndex: 'Comment',
                            text: 'Comment'
                        }
                    ],
                    listeners: {
                        select: 'OnItemSelectedDay',
                        add: 'onItemAddDay'
                    }
                }
            ],
            listeners: {
                activate: 'dayContainerActivate',
                initialize: 'dayContainerInit'
            }
        },
        {
            xtype: 'container',
            title: 'Week',
            iconCls: 'x-fa fa-calendar',
            layout: 'fit',
            items: [
                {
                    xtype: 'titlebar',
                    id: 'WeekId',
                    docked: 'top',
                    title: '29/04/2019 - 05/05/2019',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            maxWidth: 150,
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.create('Lab12_1.view.TimeFormPanel', {fullscreen: true});
                                    },
                                    itemId: 'AddTimeWeekId',
                                    ui: 'confirm',
                                    docked: 'top',
                                    text: '+'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var currDateString = Ext.getCmp('WeekId').getTitle();

                                var splitDate = currDateString.split("-");

                                var firstDate = splitDate[0].trim();
                                var lastDate = splitDate[1].trim();

                                var firstSplitDate = firstDate.split("/");
                                var lastSplitDate = lastDate.split("/");

                                currDateString = firstSplitDate[1] + "/" + firstSplitDate[0] + "/" + firstSplitDate[2];
                                var lastDateString = lastSplitDate[1] + "/" + lastSplitDate[0] + "/" + lastSplitDate[2];

                                var firstDayOfWeek = new Date(currDateString);
                                var lastDayOfWeek = new Date(lastDateString);

                                var filterStart = new Date(currDateString);

                                firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 7);
                                lastDayOfWeek.setDate(lastDayOfWeek.getDate() - 7);

                                // get filterDate
                                var store = Ext.getStore("TimeStore");
                                store.clearFilter();

                                store.filter(
                                {
                                    filterFn: function(item)
                                    {
                                        var startDate = new Date(firstDayOfWeek.toString());
                                        startDate.setHours("00");
                                        startDate.setMinutes("00");

                                        var endDate = new Date(lastDayOfWeek.toString());
                                        endDate.setHours("23");
                                        endDate.setMinutes("59");
                                        endDate.setSeconds("59");

                                        return (item.get("Start") >= startDate && item.get("Start") <= endDate);
                                    }
                                });

                                // end filterDate

                                /** Format Start **/

                                var dd = firstDayOfWeek.getDate();
                                var mm = firstDayOfWeek.getMonth() + 1; //January is 0!

                                var yyyy = firstDayOfWeek.getFullYear();

                                if (dd < 10)
                                {
                                    dd = '0' + dd;
                                }

                                if (mm < 10)
                                {
                                    mm = '0' + mm;
                                }

                                var HH = firstDayOfWeek.getHours();
                                var MM = firstDayOfWeek.getMinutes();

                                if(HH < 10)
                                {
                                    HH = "0" + HH;
                                }
                                if(MM < 10)
                                {
                                    MM = "0" + MM;
                                }

                                firstDayOfWeek = dd + '/' + mm + '/' + yyyy;

                                var dd = lastDayOfWeek.getDate();
                                var mm = lastDayOfWeek.getMonth() + 1; //January is 0!

                                var yyyy = lastDayOfWeek.getFullYear();

                                if (dd < 10)
                                {
                                    dd = '0' + dd;
                                }

                                if (mm < 10)
                                {
                                    mm = '0' + mm;
                                }

                                var HH = lastDayOfWeek.getHours();
                                var MM = lastDayOfWeek.getMinutes();

                                if(HH < 10)
                                {
                                    HH = "0" + HH;
                                }
                                if(MM < 10)
                                {
                                    MM = "0" + MM;
                                }

                                lastDayOfWeek = dd + '/' + mm + '/' + yyyy;

                                /** Format End **/

                                var currentWeek = firstDayOfWeek + " - " + lastDayOfWeek;

                                Ext.getCmp('WeekId').setTitle(currentWeek);

                                var sumValue = store.sum('Time');
                                Ext.getCmp('SumWeekId').setHtml("Sum: " + sumValue + " Hours");
                            },
                            ui: 'square',
                            margin: '0, 0, 0, 5',
                            text: '<'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var currDateString = Ext.getCmp('WeekId').getTitle();

                                var splitDate = currDateString.split("-");

                                var firstDate = splitDate[0].trim();
                                var lastDate = splitDate[1].trim();

                                var firstSplitDate = firstDate.split("/");
                                var lastSplitDate = lastDate.split("/");

                                currDateString = firstSplitDate[1] + "/" + firstSplitDate[0] + "/" + firstSplitDate[2];
                                var lastDateString = lastSplitDate[1] + "/" + lastSplitDate[0] + "/" + lastSplitDate[2];

                                var firstDayOfWeek = new Date(currDateString);
                                var lastDayOfWeek = new Date(lastDateString);

                                firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 7);
                                lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 7);

                                // get filterDate

                                var store = Ext.getStore("TimeStore");
                                store.clearFilter();

                                store.filter(
                                {
                                    filterFn: function(item)
                                    {
                                        var startDate = new Date(firstDayOfWeek.toString());
                                        startDate.setHours("00");
                                        startDate.setMinutes("00");

                                        var endDate = new Date(lastDayOfWeek.toString());
                                        endDate.setHours("23");
                                        endDate.setMinutes("59");
                                        endDate.setSeconds("59");

                                        return (item.get("Start") >= startDate && item.get("Start") <= endDate);
                                    }
                                });

                                // end filterDate

                                /** Format Start **/

                                var dd = firstDayOfWeek.getDate();
                                var mm = firstDayOfWeek.getMonth() + 1; //January is 0!

                                var yyyy = firstDayOfWeek.getFullYear();

                                if (dd < 10)
                                {
                                    dd = '0' + dd;
                                }

                                if (mm < 10)
                                {
                                    mm = '0' + mm;
                                }

                                var HH = firstDayOfWeek.getHours();
                                var MM = firstDayOfWeek.getMinutes();

                                if(HH < 10)
                                {
                                    HH = "0" + HH;
                                }
                                if(MM < 10)
                                {
                                    MM = "0" + MM;
                                }

                                firstDayOfWeek = dd + '/' + mm + '/' + yyyy;

                                var dd = lastDayOfWeek.getDate();
                                var mm = lastDayOfWeek.getMonth() + 1; //January is 0!

                                var yyyy = lastDayOfWeek.getFullYear();

                                if (dd < 10)
                                {
                                    dd = '0' + dd;
                                }

                                if (mm < 10)
                                {
                                    mm = '0' + mm;
                                }

                                var HH = lastDayOfWeek.getHours();
                                var MM = lastDayOfWeek.getMinutes();

                                if(HH < 10)
                                {
                                    HH = "0" + HH;
                                }
                                if(MM < 10)
                                {
                                    MM = "0" + MM;
                                }

                                lastDayOfWeek = dd + '/' + mm + '/' + yyyy;

                                /** Format End **/

                                var currentWeek = firstDayOfWeek + " - " + lastDayOfWeek;

                                Ext.getCmp('WeekId').setTitle(currentWeek);

                                var sumValue = store.sum('Time');
                                Ext.getCmp('SumWeekId').setHtml("Sum: " + sumValue + " Hours");
                            },
                            align: 'right',
                            ui: 'square',
                            margin: '0, 5, 0, 0',
                            text: '>'
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    height: '100%',
                    width: '100%',
                    store: 'TimeStore',
                    title: 'Week',
                    columns: [
                        {
                            xtype: 'datecolumn',
                            width: 175,
                            dataIndex: 'Start',
                            text: 'Start',
                            format: 'd/m/Y H:i'
                        },
                        {
                            xtype: 'datecolumn',
                            width: 175,
                            dataIndex: 'End',
                            text: 'End',
                            format: 'd/m/Y H:i'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 100,
                            dataIndex: 'Time',
                            text: 'Time'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 250,
                            dataIndex: 'Comment',
                            text: 'Comment'
                        }
                    ],
                    listeners: {
                        add: 'OnItemAddWeek',
                        select: 'OnItemSelectWeek'
                    }
                },
                {
                    xtype: 'label',
                    id: 'SumWeekId',
                    itemId: 'SumWeekId',
                    docked: 'bottom',
                    html: 'Sum: '
                }
            ],
            listeners: {
                initialize: 'weekContainerInit',
                activate: 'weekContainerActivate'
            }
        },
        {
            xtype: 'container',
            title: 'Month',
            iconCls: 'x-fa fa-calendar',
            layout: 'fit',
            items: [
                {
                    xtype: 'titlebar',
                    id: 'MonthId',
                    docked: 'top',
                    title: 'May',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            maxWidth: 150,
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.create('Lab12_1.view.TimeFormPanel', {fullscreen: true});
                                    },
                                    itemId: 'AddTimeMonthId',
                                    ui: 'confirm',
                                    docked: 'top',
                                    text: '+'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var currMonthTable = ["January", "Februry", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                                var splitDate = Ext.getCmp('MonthId').getTitle().split("-");
                                var currMonth = currMonthTable.indexOf(splitDate[0].trim());
                                var currYear = parseInt(splitDate[1].trim(), 10);
                                var index = currMonth <= 0 ? 11 : currMonth - 1;

                                var date = new Date();
                                date.setMonth(index);

                                if(index === 11)
                                {
                                    currYear = (currYear - 1);
                                }

                                date.setFullYear(currYear);

                                // get filterDate
                                var store = Ext.getStore("TimeStore");
                                store.clearFilter();

                                store.filter(
                                {
                                    filterFn: function(item)
                                    {
                                        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                                        firstDay.setHours("00");
                                        firstDay.setMinutes("00");

                                        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                                        lastDay.setHours("23");
                                        lastDay.setMinutes("59");
                                        lastDay.setSeconds("59");

                                        return (item.get("Start") >= firstDay && item.get("Start") <= lastDay);
                                    }
                                });

                                // end filterDate

                                Ext.getCmp('MonthId').setTitle(currMonthTable[index] + " - " + currYear);

                                var sumValue = store.sum('Time');
                                Ext.getCmp('SumMonthId').setHtml("Sum: " + sumValue + " Hours");
                            },
                            ui: 'square',
                            margin: '0, 0, 0, 5',
                            text: '<'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var currMonthTable = ["January", "Februry", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                                var splitDate = Ext.getCmp('MonthId').getTitle().split("-");
                                var currMonth = currMonthTable.indexOf(splitDate[0].trim());
                                var currYear = parseInt(splitDate[1].trim(), 10);
                                var index = currMonth >= 11 ? 0 : currMonth + 1;

                                var date = new Date();
                                date.setMonth(index);

                                if(index === 11)
                                {
                                    currYear = (currYear + 1);
                                }

                                date.setFullYear(currYear);

                                // get filterDate
                                var store = Ext.getStore("TimeStore");
                                store.clearFilter();

                                store.filter(
                                {
                                    filterFn: function(item)
                                    {
                                        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                                        firstDay.setHours("00");
                                        firstDay.setMinutes("00");

                                        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                                        lastDay.setHours("23");
                                        lastDay.setMinutes("59");
                                        lastDay.setSeconds("59");

                                        return (item.get("Start") >= firstDay && item.get("Start") <= lastDay);
                                    }
                                });

                                // end filterDate

                                Ext.getCmp('MonthId').setTitle(currMonthTable[index] + " - " + currYear);

                                var sumValue = store.sum('Time');
                                Ext.getCmp('SumMonthId').setHtml("Sum: " + sumValue + " Hours");
                            },
                            align: 'right',
                            ui: 'square',
                            margin: '0, 5, 0, 0',
                            text: '>'
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    height: '100%',
                    width: '100%',
                    store: 'TimeStore',
                    title: 'Month',
                    columns: [
                        {
                            xtype: 'datecolumn',
                            width: 175,
                            dataIndex: 'Start',
                            text: 'Start',
                            format: 'd/m/Y H:i'
                        },
                        {
                            xtype: 'datecolumn',
                            width: 175,
                            dataIndex: 'End',
                            text: 'End',
                            format: 'd/m/Y H:i'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 100,
                            dataIndex: 'Time',
                            text: 'Time'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 250,
                            dataIndex: 'Comment',
                            text: 'Comment'
                        }
                    ],
                    listeners: {
                        add: 'onItemAddMonth',
                        select: 'OnItemSelectMonth'
                    }
                },
                {
                    xtype: 'label',
                    id: 'SumMonthId',
                    itemId: 'SumMonthId',
                    docked: 'bottom',
                    html: 'Sum: '
                }
            ],
            listeners: {
                initialize: 'monthContainerInit',
                activate: 'monthContainerActivate'
            }
        }
    ]

});