import express from "express";
import {API_PORT} from "./contants.js";
import {findUrl, isUrlExists} from "./app/http-get/get.js";
import postUrl from "./app/http-post/post.js";

const app = express();
const router = new express.Router();
router.get("/", (req, res) => res.send("coucou"));
router.get("/get-all", findUrl);
router.get("/get", findUrl);
router.get("/is-url-exists", isUrlExists);
router.get("/add", postUrl);
app.use(router);
app.listen(API_PORT, () => console.log(`listening the port: ${API_PORT}`));
