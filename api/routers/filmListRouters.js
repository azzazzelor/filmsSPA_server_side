module.exports = function(app) {
    const filmList = require('./controllers/filmListControllers.js');

    app.route('/addnew')
        .post(filmList.create_a_film);

    app.route('/delete?id')
        .delete(filmList.delete_by_id);
    
    app.route('/film?id')
        .get(filmList.get_a_film);

    app.route('/films?filter=sort:asc')
        .get(filmList.filter_by_asc);

    app.route('/films?search=name:text')
        .get(filmList.filter_by_filmName);

    app.route('/films?search=actors_name:name')
        .get(filmList.filter_by_actorsName);

}