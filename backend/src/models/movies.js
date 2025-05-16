/*
Campos: 
tittle
description
director
gender
year
length
image
*/

import {Schema, model} from "mongoose";

const movieSchema = new Schema(
    {
        tittle: {
            type : String,
            requiere: true
        },
        description: {
            type : String,
            requiere: true
        },
        director: {
            type : String,
            requiere: true
        },
        gender: {
            type : String,
            requiere: true
        },
        year: {
            type : Number,
            requiere: true
        },
        length: {
            type : Number,
            requiere: true
        },
        image: {
            type : String,
            requiere: true
        }
    },
    {
        timestamps:true,
        strict:false
    }
);

export default model ("Movies", movieSchema)