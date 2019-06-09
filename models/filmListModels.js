import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: {type:Number},
    name: {type:String },
    format_type:{type: String},
    actors: [{
        id:Number,
        name:String,
        famile:String,
    }]
});

module.exports = mongoose.model('Films', FilmSchema);