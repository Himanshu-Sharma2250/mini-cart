import express from "express";
import dotenv from "dotenv";

import connect_db from "./utils/db.js";
import productRouter from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

connect_db();

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use("/api/v1/product", productRouter);

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
})