import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test")
	.then(() => console.log("connected to the database!"))
	.catch(err => console.log(err));

const BadWebsites = mongoose.model("url", {url: String});

export default BadWebsites;
