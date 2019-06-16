##How to run project
1) git clone https://github.com/azzazzelor/filmsSPA_server_side.git

	Preparetion:
		- remove node_modules
		- remove package-lock.json

2) npm i - to install all dependencies

3) mongod - to run mongo DB

4) npm run serve-dev - to run watch (webpack and node server)

you can check all run scripts inside package.json

_server requests url:

1) get all: /api/films
	type: GET
	url: /api/films

2) get one: /api/film/id
	type: GET
	url: /api/film/:filmId

3) add new: /api/films
	type: POST
	url: /api/films
	params:
		type: body

4) remove one: /api/film/id
	type: DELETE
	url: /api/film/:filmId

After each git pull do not forget run "npm i" to install all dependencies