'use strict';

module.exports = function(app) {
    const filmList = require('./filmListControllers.js');

    app.route('/films')
        .get(filmList.list_all_films)
        .post(filmList.create_a_film);
        
    
    app.route('/film/:filmId')
        .get(filmList.get_a_film)
        .delete(filmList.delete_by_id);

}