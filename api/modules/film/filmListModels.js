'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: {
    	type:Number
    },
    name: {
    	type:String,
    	required: true
    },
    format_type:{
    	type: String,
    	required: true
    },
    actors: [{
        id:Number,
        name:{
        	type: String,
            required: true
        },
        famile:{
        	type: String,
            required: true
        },
    }]
});

module.exports = mongoose.model('Films', FilmSchema);