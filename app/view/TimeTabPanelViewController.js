/*
 * File: app/view/TimeTabPanelViewController.js
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

Ext.define('Lab12_1.view.TimeTabPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.timetabpanel',

    OnItemSelectedDay: function(dataview, selected, eOpts) {
        console.log(selected[0]);
        Ext.create('Lab12_1.view.UpdateTimeFormPanel', {fullscreen: true, record: selected[0]});
    },

    onItemAddDay: function(eOpts) {
        var store= Ext.getStore("TimeStore");
        var sumValue = store.sum('Time');

        Ext.getCmp('SumDayId').setHtml("Sum: " + sumValue + " Hours");
    },

    dayContainerActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var store= Ext.getStore("TimeStore");
        var sumValue = store.sum('Time');

        Ext.getCmp('SumDayId').setHtml("Sum: " + sumValue + " Hours");
    },

    dayContainerInit: function(component, eOpts) {
        var currDate = new Date();

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

        // end filterDate

        currDate = dd + '/' + mm + '/' + yyyy;
        Ext.getCmp('DayId').setTitle(currDate);

        sortDate = yyyy + "/" + dd + "/" + mm;

        var store = Ext.getStore("TimeStore");
        store.filter("Start", searchString);

    },

    OnItemAddWeek: function(eOpts) {
        var store= Ext.getStore("TimeStore");
        var sumValue = store.sum('Time');

        Ext.getCmp('SumDayId').setHtml("Sum: " + sumValue + " Hours");
    },

    OnItemSelectWeek: function(dataview, selected, eOpts) {
        Ext.create('Lab12_1.view.UpdateTimeFormPanel', {fullscreen: true, record: selected[0]});
    },

    weekContainerInit: function(component, eOpts) {
        var firstDayOfWeek = new Date();
        var lastDayOfWeek = new Date();

        if(lastDayOfWeek.getDay() > 0)
        {
            do
            {
                lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 1);
            }while(lastDayOfWeek.getDay() !== 0);

        }

        firstDayOfWeek.setDate(lastDayOfWeek.getDate());
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 6);

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

        var finalWeekDate = firstDayOfWeek + " - " + lastDayOfWeek;

        Ext.getCmp('WeekId').setTitle(finalWeekDate);
    },

    weekContainerActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var store= Ext.getStore("TimeStore");
        var sumValue = store.sum('Time');

        Ext.getCmp('SumWeekId').setHtml("Sum: " + sumValue + " Hours");
    },

    onItemAddMonth: function(eOpts) {
        var store= Ext.getStore("TimeStore");
        var sumValue = store.sum('Time');

        Ext.getCmp('SumDayId').setHtml("Sum: " + sumValue + " Hours");
    },

    OnItemSelectMonth: function(dataview, selected, eOpts) {
        Ext.create('Lab12_1.view.UpdateTimeFormPanel', {fullscreen: true, record: selected[0]});
    },

    monthContainerInit: function(component, eOpts) {
        var currDate = new Date();
        var currMonth = ["January", "Februry", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        Ext.getCmp('MonthId').setTitle(currMonth[currDate.getMonth()]);

    },

    monthContainerActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var store= Ext.getStore("TimeStore");
        var sumValue = store.sum('Time');

        Ext.getCmp('SumMonthId').setHtml("Sum: " + sumValue + " Hours");

    }

});