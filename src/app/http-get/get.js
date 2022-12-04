import BadWebsites from "../mongodb/mongodb.js";

const _find = ({query}) => BadWebsites.find(query).exec();

const _computeIsUrlExists = listUrl => listUrl.length !== 0;

const findUrl = (req, res) => _find(req)
	.then(data => res.send(Object(data).length ? data : {err: "no data"}))
	.catch(err => res.send(err));

const isUrlExists = (req, res) => _find(req)
	.then(_computeIsUrlExists)
	.then(data => res.send(data))
	.catch(err => res.send(err));

export {findUrl, isUrlExists};
