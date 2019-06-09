'use strict';

const mongoose = require('mongoose'),
    Film = mongoose.model('Films');

exports.list_all_films = (req, res) => {
    Film.find({}, function(err, films) {
        if (err)
            res.send(err);
        res.json(films);
    });
};

exports.create_a_film = function(req, res){
    let new_film = new Film(req.body);
    new_film.save(function(err,film){
        if(err) res.send(err);
        res.json(film);
    })
};

exports.delete_by_id = function(req,res){
    Film.remove({
        _id: req.params.filmId},
        function(err, film){
            if(err) res.send(err);
            res.json({
                message: 'Task sucessully deleted'
            })
        }
    )
};

exports.get_a_film = function(req,res){
    return Film.findById(id).remove()
}