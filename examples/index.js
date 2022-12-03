// Here let see examples of how to use the api

// GET HTTP
const toJson = data => data.json();

const get = link => fetch(link)
	.then(toJson)
	.then(console.log)
	.catch(console.log);

get("http://127.0.0.1:5000/get-all");
get("http://127.0.0.1:5000/get?url=youtube.fr");
get("http://127.0.0.1:5000/is-url-exists?url=youtube.fr");
