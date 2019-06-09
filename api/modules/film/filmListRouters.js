'use strict';

module.exports = function(app) {
    const filmList = require('./filmListControllers.js');

    app.route('/films')
        .get(filmList.list_all_films)
        .post(filmList.create_a_film);
        
    
    app.route('/film?id')
        .get(filmList.get_a_film)
        .delete(filmList.delete_by_id);

    /*app.route('/films?filter=sort:asc')
        .get(filmList.filter_by_asc);

    app.route('/films?search=name:text')
        .get(filmList.filter_by_filmName);

    app.route('/films?search=actors_name:name')
        .get(filmList.filter_by_actorsName);*/

}