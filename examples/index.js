// Here let see examples of how to use the api

// GET HTTP
const toJson = data => data.json();

const get = link => fetch(link)
	.then(toJson)
	.then(console.log)
	.catch(console.log);

// Example POST method implementation:
const getFetchPostOptn = data => ({
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(data),
});

const post = (url = "", data = {}) =>
	fetch(url, getFetchPostOptn(data))
		.then(console.log)
		.catch(console.log);

// To post only one website
post("http://localhost:5000/add", {url: "je-suis-un-gros-test.pas-un-site-officiel"})
	.then(() => get("http://127.0.0.1:5000/get-all")); // To see if it has been operated

get("http://127.0.0.1:5000/get-all");
get("http://127.0.0.1:5000/get?url=youtube.fr");
get("http://127.0.0.1:5000/is-url-exists?url=youtube.fr");

