/*
Campos: 
nmae
email
password
phone
addres
workPosition
hiringDate
salary
DUI
*/

import {Schema, model} from "mongoose";

const employeeSchema = new Schema(
    {
        name: {
            type : String,
            requiere: true
        },
        email: {
            type : String,
            requiere: true
        },
        password: {
            type : String,
            requiere: true
        },
        phone: {
            type : String,
            requiere: true
        },
        addres: {
            type : String,
            requiere: true
        },
        workPosition: {
            type : String,
            requiere: true
        },
        hiringDate: {
            type : Date,
            requiere: true
        },
        Salary: {
            type : Number,
            requiere: true
        },
        DUI: {
            type : String,
            requiere: true
        }
    },
    {
        timestamps:true,
        strict:false
    }
);

export default model ("Employees", employeeSchema)