import express from "express";
import {API_PORT} from "./contants.js";
import {findUrl, isUrlExists} from "./app/http-get/get.js";
import postUrl from "./app/http-post/post.js";

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = new express.Router();

// HTTP GET
router.get("/get-all", findUrl);
router.get("/get", findUrl);
router.get("/is-url-exists", isUrlExists);

// HTTP POST
router.post("/add", postUrl);
router.post("/test", (req, res) => {
	console.log(req.body); // <==== req.body will be a parsed JSON object
	res.send("ok");
});
app.use("/", router);
app.listen(API_PORT, () => console.log(`listening the port: ${API_PORT}`));
