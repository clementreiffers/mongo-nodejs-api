import BadWebsites from "../mongodb/mongodb.js";

const createUrl = ({query}) => new BadWebsites(query).save();

const postUrl = (req, res) => {
	createUrl(req);
	res.send("ok");
};

export default postUrl;
