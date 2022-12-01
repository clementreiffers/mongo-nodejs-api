import * as mongoose from "mongoose";
import express from "express";

const API_PORT = 5000;
const MONGODB_IP = "localhost";
const MONGODB_PORT = 27017;
const MONGODB_NAME = "test";

mongoose.connect(`mongodb://${MONGODB_IP}:${MONGODB_PORT}/${MONGODB_NAME}`)
	.then(() => console.log("connected to mongodb!"))
	.catch(() => "pb with connection");

const Website = mongoose.model("Website", {url: String});

const rootApi = (req, res) => res.send("root api");
const findUrl = async (req, res) => res.send(await Website.find(req.query).exec());
const addUrl = (req, res) => {
	if (req.query.url === undefined) {
		return res.send("you must specify the url!");
	}

	new Website({...req.query}).save();
	res.send(`${req.query.url} saved!`);
};

const app = express();
app.get("/", rootApi);
app.get("/find", findUrl);
app.get("/add", addUrl);
app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
