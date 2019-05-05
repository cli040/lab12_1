/*
 * File: app/model/TimeModel.js
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

Ext.define('Lab12_1.model.TimeModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Date',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.util.Format'
    ],


    fields: [
        {
            type: 'date',
            name: 'Start',
            dateFormat:'d/m/Y H:i'

        },
        {
            type: 'date',
            name: 'End',
            dateFormat:'d/m/Y H:i'

        },
        {
            type: 'int',
            name: 'Time'
        },
        {
            type: 'string',
            name: 'Comment'
        }
    ]
,

    edit: function(newStart, newEnd, newTime, newComment) {
        this.set("Start", newStart);
        this.set("End", newEnd);
        this.set("Time", newTime);
        this.set("Comment", newComment);
    }

});