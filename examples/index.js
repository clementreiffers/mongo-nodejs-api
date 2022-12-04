// Here let see examples of how to use the api

const _toJson = data => data.json();

const _get = link => fetch(link)
	.then(_toJson)
	.then(console.log)
	.catch(console.log);

const _getFetchPostOption = data => ({
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(data),
});

const _post = (url = "", data = {}) =>
	fetch(url, _getFetchPostOption(data))
		.then(console.log)
		.catch(console.log);

// POST HTTP
const _dataToPost = {url: "je-suis-un-gros-test.pas-un-site-officiel"};
_post("http://localhost:5000/add", _dataToPost)
	.then(() => _get("http://127.0.0.1:5000/get-all")); // To see if it has been operated

// GET HTTP

_get("http://127.0.0.1:5000/get-all");
_get("http://127.0.0.1:5000/get?url=youtube.fr");
_get("http://127.0.0.1:5000/is-url-exists?url=youtube.fr");

