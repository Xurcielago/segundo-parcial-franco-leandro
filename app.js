import express from "express";
import routerDB from "./src/routes/book.routes.js";
import { start } from "./src/config/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", routerDB);

app.listen(PORT, async() => {
    await start();
    console.log("Servidor operativo")
})