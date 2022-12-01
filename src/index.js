import {createClient} from "redis";
import {IP, PORT} from "./contants.js";

const redisClient = createClient(PORT, IP);

redisClient.on("error", err => console.log(err));
