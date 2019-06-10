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

1) get all: http://localhost:8080/films
	type: GET
	url: /films

2) get one: http://localhost:8080/film/id
	type: GET
	url: /film/:filmId

3) add new: http://localhost:8080/films
	type: POST
	url: /films
	params:
		type: body

4) remove one: http://localhost:8080/film/id
	type: DELETE
	url: /film/:filmId