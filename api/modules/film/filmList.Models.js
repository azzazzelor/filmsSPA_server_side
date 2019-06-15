'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: Number,
    name: {
    	type: String,
    	required: true,
    	unique: true
    },
    format_type:{
    	type: String,
    	required: true
    },
    actors: [{
        id: Number,
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

console.log("\x1b[32m", "----------> Film model connected", "\x1b[37m");

module.exports = mongoose.model('Films', FilmSchema);