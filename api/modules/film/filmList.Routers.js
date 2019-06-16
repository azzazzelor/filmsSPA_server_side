'use strict';

module.exports = function(app) {
    const filmList = require('./filmListControllers.js');

    app.route('/films')
        .get(filmList.list_all_films)
        .post(filmList.create_a_film);
    
    app.route('/film/:filmId')
        .get(filmList.get_a_film)
        .delete(filmList.delete_by_id)
        .put(filmList.update_by_id);

    console.log("\x1b[32m", "----------> Film routers connected", "\x1b[37m");
};
