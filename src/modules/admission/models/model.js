'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AdmissionSchema = new Schema({

    school_year: {
        type: String
    },
    student_no: {
        type: String
    },
    identification_number: {
        type: String
    },
    fullname_th: {
        type: String,
        required: 'Please fill a Admission fullname_th'
    },
    nickname_th: {
        type: String
    },
    fullname_eng: {
        type: String
    },
    nickname_eng: {
        type: String
    },
    dateofbirth: {
        type: String
    },
    student_id: {
        type: String,
        required: 'Please fill a Admission student_id'
    },
    firstdayofschool: {
        type: String
    },
    classroom:{
        type: String
    },
    contacttelno:{
        type: String
    },

    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Admission", AdmissionSchema);