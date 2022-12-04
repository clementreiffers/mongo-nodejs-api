import BadWebsites from "../mongodb/mongodb.js";

const _createUrl = ({body}) => new BadWebsites(body).save();

const postUrl = (req, res) => {
	_createUrl(req).then(() => res.send("ok"));
};

export default postUrl;
