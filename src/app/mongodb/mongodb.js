import mongoose from "mongoose";
import {MONGODB_URL} from "../../contants.js";

mongoose.connect(MONGODB_URL)
	.then(() => console.log("connected to the database!"))
	.catch(err => console.log(err));

const BadWebsites = mongoose.model("url", {url: String, type: String});

export default BadWebsites;
