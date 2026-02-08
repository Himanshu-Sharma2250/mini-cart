import express from "express";
import dotenv from "dotenv";

import connect_db from "./utils/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

connect_db();

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
})