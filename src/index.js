import express from "express";
import {createClient} from "redis";
import {API_PORT, IP, REDIS_PORT} from "./contants.js";

const find = (req, res) => client.exists("url", req.query.url)
	.then(data => res.send(JSON.stringify(data)))
	.catch(err => res.send(err));

const set = (req, res) => client.set("url", req.query.url)
	.then(() => res.send("ok"))
	.catch(err => res.send(err));

const client = createClient(REDIS_PORT, IP);
client.connect()
	.then(() => console.log("conneted to redis!"))
	.catch(err => console.log(err));

const app = express();
const router = new express.Router();
router.get("/", (req, res) => res.send("root api"));
router.get("/find", find);
router.get("/add", set);

app.use(router);
app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
