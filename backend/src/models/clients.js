/*
Campos: 
nmae
email
password
phone
addres
DUI
*/

import {Schema, model} from "mongoose";

const clientSchema = new Schema(
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

export default model ("Clients", clientSchema)