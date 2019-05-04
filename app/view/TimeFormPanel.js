/*
 * File: app/view/TimeFormPanel.js
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

Ext.define('Lab12_1.view.TimeFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.timeformpanel',

    requires: [
        'Lab12_1.view.TimeFormPanelViewModel',
        'Ext.Container',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.Spacer'
    ],

    viewModel: {
        type: 'timeformpanel'
    },
    title: 'Add new time',

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretchmax'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'StartTimeAndDateId',
                    itemId: 'StartTimeAndDate',
                    margin: 5,
                    label: 'Start',
                    labelWidth: 100,
                    placeholder: '14/02/2019 10:00'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var endTime = Ext.getCmp("EndTimeAndDateId").getValue();
                        var totalTime = Ext.getCmp("TotalTimeId").getValue();

                        // TODO: split values and do like in start of window. build date string!

                        var checkEndTime = new Date(endTime);

                        var endDay = checkEndTime.getMonth() + 1;
                        var endMonth = checkEndTime.getDate() - 1;

                        checkEndTime.setMonth(endMonth);
                        checkEndTime.setDate(endDay);

                        var checkTotalTime = totalTime.length > 0 && !isNaN(totalTime);

                        if(checkEndTime && checkTotalTime)
                        {
                            // Calc startTime

                            var t = endTime.toString().substring(11,16);
                            var timeParts = t.split(":");
                            var bShouldSplit = false;

                            /** Check if timeTotal contains comma **/

                            for(var x = 0; x < totalTime.length; x++)
                            {
                                if(totalTime.charAt(x) === ".")
                                {
                                    bShouldSplit = true;
                                }
                            }

                            var totalTimeParts = bShouldSplit ? totalTime.split(".") : (totalTime + ".0").split(".");

                            /** End check if timeTotal contains comma **/

                            //totalTimeParts[0] == hours
                            //totalTimeParts[1] == minutes

                            var hh = parseInt(totalTimeParts[0], 10);
                            var mm = 60.0 * (parseFloat("0."+totalTimeParts[1], 10));

                            var newStartTime = new Date(checkEndTime);

                            if((checkEndTime.getHours() - hh) < 0)
                            {
                                newStartTime.setDate(newStartTime.getDate() - 1);
                                newStartTime.setHours(24 - (hh - checkEndTime.getHours()));
                            }
                            else
                            {
                                newStartTime.setHours(checkEndTime.getHours() - hh);
                            }

                            if((checkEndTime.getMinutes() - mm) < 0)
                            {
                                newStartTime.setHours(newStartTime.getHours() - 1);
                                newStartTime.setMinutes(60 - (mm - checkEndTime.getMinutes()));
                            }
                            else
                            {
                                newStartTime.setMinutes(checkEndTime.getMinutes() - mm);
                            }


                            /** Format Start **/

                            var dd = newStartTime.getDate();
                            var mm = newStartTime.getMonth() + 1; //January is 0!

                            var yyyy = newStartTime.getFullYear();
                            if (dd < 10) {
                                dd = '0' + dd;
                            }
                            if (mm < 10) {
                                mm = '0' + mm;
                            }

                            var HH = newStartTime.getHours();
                            var MM = newStartTime.getMinutes();

                            if(HH < 10)
                            {
                                HH = "0" + HH;
                            }
                            if(MM < 10)
                            {
                                MM = "0" + MM;
                            }

                            newStartTime = dd + '/' + mm + '/' + yyyy + " " + HH + ":" + MM;

                            /** Format End **/

                            Ext.getCmp("StartTimeAndDateId").setValue(newStartTime);
                        }
                    },
                    text: 'Calc Start'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretchmax'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'EndTimeAndDateId',
                    itemId: 'EndTimeAndDate',
                    margin: 5,
                    label: 'End',
                    labelWidth: 100,
                    placeholder: '14/02/2019 12:00'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var startTime = Ext.getCmp("StartTimeAndDateId").getValue();
                        var totalTime = Ext.getCmp("TotalTimeId").getValue();

                        // TODO: split values and do like in start of window. build date string!

                        var checkStartTime;

                        if(startTime.length > 0)
                        {
                            checkStartTime = new Date(startTime);

                            var startDay = checkStartTime.getMonth() + 1;
                            var startMonth = checkStartTime.getDate() - 1;

                            checkStartTime.setMonth(startMonth);
                            checkStartTime.setDate(startDay);
                        }
                        else
                        {
                            checkStartTime = false;
                        }

                        var checkTotalTime = totalTime.length > 0 && !isNaN(totalTime);

                        if(checkStartTime && checkTotalTime)
                        {
                            // Calc endTime

                            var t = startTime.toString().substring(11,16);
                            var timeParts = t.split(":");
                            var bShouldSplit = false;

                            /** Check if timeTotal contains comma **/

                            for(var x = 0; x < totalTime.length; x++)
                            {
                                if(totalTime.charAt(x) === ".")
                                {
                                    bShouldSplit = true;
                                }
                            }

                            var totalTimeParts = bShouldSplit ? totalTime.split(".") : (totalTime + ".0").split(".");

                            /** End check if timeTotal contains comma **/

                            //totalTimeParts[0] == hours
                            //totalTimeParts[1] == minutes

                            var hh = parseInt(totalTimeParts[0], 10);
                            var mm = 60.0 * (parseFloat("0."+totalTimeParts[1], 10));

                            var newEndTime = new Date(checkStartTime);

                            if((checkStartTime.getHours() + hh) > 23)
                            {
                                newEndTime.setDate(newEndTime.getDate() + 1);
                                newEndTime.setHours((hh + checkStartTime.getHours()) - 24);
                            }
                            else
                            {
                                newEndTime.setHours(checkStartTime.getHours() + hh);
                            }

                            if((checkStartTime.getMinutes() + mm) > 59)
                            {
                                newEndTime.setHours(newEndTime.getHours() + 1);
                                newEndTime.setMinutes((mm + checkStartTime.getMinutes()) - 60);
                            }
                            else
                            {
                                newEndTime.setMinutes(checkStartTime.getMinutes() + mm);
                            }


                            /** Format Start **/

                            var dd = newEndTime.getDate();
                            var mm = newEndTime.getMonth() + 1; //January is 0!

                            var yyyy = newEndTime.getFullYear();
                            if (dd < 10) {
                                dd = '0' + dd;
                            }
                            if (mm < 10) {
                                mm = '0' + mm;
                            }

                            var HH = newEndTime.getHours();
                            var MM = newEndTime.getMinutes();

                            if(HH < 10)
                            {
                                HH = "0" + HH;
                            }
                            if(MM < 10)
                            {
                                MM = "0" + MM;
                            }

                            newEndTime = dd + '/' + mm + '/' + yyyy + " " + HH + ":" + MM;

                            /** Format End **/

                            Ext.getCmp("EndTimeAndDateId").setValue(newEndTime);

                        }
                    },
                    text: 'Calc End'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretchmax'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'TotalTimeId',
                    itemId: 'TotalTime',
                    margin: 5,
                    label: 'Total time',
                    labelWidth: 100,
                    placeholder: '2.0'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        var startTime = Ext.getCmp("StartTimeAndDateId").getValue();
                        var endTime = Ext.getCmp("EndTimeAndDateId").getValue();

                        // TODO: split values and do like in start of window. build date string!

                        var checkStartTime;

                        if(startTime.length > 0)
                        {
                            checkStartTime = new Date(startTime);

                            var startDay = checkStartTime.getMonth() + 1;
                            var startMonth = checkStartTime.getDate() - 1;

                            checkStartTime.setMonth(startMonth);
                            checkStartTime.setDate(startDay);
                        }
                        else
                        {
                            checkStartTime = false;
                        }

                        var checkEndTime;

                        if(endTime.length > 0)
                        {
                            checkEndTime = new Date(endTime);

                            var endDay = checkEndTime.getMonth() + 1;
                            var endMonth = checkEndTime.getDate() - 1;

                            checkEndTime.setMonth(endMonth);
                            checkEndTime.setDate(endDay);
                        }
                        else
                        {
                            checkEndTime = false;
                        }

                        if(checkEndTime && checkStartTime)
                        {
                            // Calc TotalTime

                            var endT = endTime.toString().substring(11,16);
                            var endTimeParts = endT.split(":");

                            var startT = endTime.toString().substring(11,16);
                            var startTimeParts = startT.split(":");

                            // TODO: EndTime.getTime() - StartTime.getTime() = hours + min + sec

                            var resDate = new Date(checkEndTime.getTime() - checkStartTime.getTime()); // 01 Jan 1970 01:00

                            var y = resDate.getYear() - 70;
                            var m = resDate.getMonth();
                            var d = resDate.getDate() - 1;

                            var hh = 0;
                            var mm = 0.0;

                            if(y > 0)
                            {
                                hh += y * 24 * 365;
                            }
                            if(m > 0)
                            {
                                hh += m * 24 * 30;
                            }
                            if(d > 0)
                            {
                                hh += d * 24;
                            }

                            hh += (resDate.getHours() === 0 ? resDate.getHours() : (resDate.getHours() - 1));

                            mm = String(resDate.getMinutes() / 60.0);
                            mm = mm.substring(0, 4);
                            mm = parseFloat(mm) === 0.0 ? ".0" : parseFloat(mm);

                            var totalTime = hh + mm;

                            Ext.getCmp("TotalTimeId").setValue(totalTime.toString());
                        }
                    },
                    ui: '',
                    text: 'Calc Total'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretchmax'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'CommentId',
                    itemId: 'Comment',
                    margin: 5,
                    label: 'Comment',
                    labelWidth: 100,
                    placeholder: 'This is an original comment'
                }
            ]
        },
        {
            xtype: 'container',
            centered: true,
            docked: 'bottom',
            padding: 25,
            layout: {
                type: 'box',
                align: 'start',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        this.up('panel').close();
                    },
                    ui: 'confirm',
                    maxWidth: 250,
                    minWidth: 150,
                    text: 'Confirm'
                },
                {
                    xtype: 'spacer',
                    width: 25
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        this.up('panel').close();
                    },
                    ui: 'decline',
                    maxWidth: 250,
                    minWidth: 150,
                    text: 'Decline'
                }
            ]
        }
    ],
    listeners: {
        added: 'onFormpanelAdded'
    },

    onFormpanelAdded: function(component, container, index, eOpts) {
        var today = new Date();

        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        }
        if (mm < 10) {
          mm = '0' + mm;
        }

        var HH = today.getHours();
        var MM = today.getMinutes();

        if(HH < 10)
        {
            HH = "0" + HH;
        }
        if(MM < 10)
        {
            MM = "0" + MM;
        }

        var today = dd + '/' + mm + '/' + yyyy + " " + HH + ":" + MM;

        Ext.getCmp("StartTimeAndDateId").setValue(today);
        Ext.getCmp("EndTimeAndDateId").setValue(today);
        Ext.getCmp("TotalTimeId").setValue("0.0");
    }

});