import BadWebsites from "../mongodb/mongodb.js";

const find = ({query}) => BadWebsites.find(query).exec();

const findUrl = (req, res) => find(req)
	.then(data => res.send(data))
	.catch(err => res.send(err));

const computeIsUrlExists = listUrl => listUrl.length !== 0;

const isUrlExists = (req, res) => find(req)
	.then(computeIsUrlExists)
	.then(data => res.send(data))
	.catch(err => res.send(err));

export {findUrl, isUrlExists};
