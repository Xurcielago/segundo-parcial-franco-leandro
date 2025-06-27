import { Router } from "express";
const routerDB = Router();
import { createBook } from "../controllers/book.controllers";

routerDB.get("/books", )
routerDB.get("/books/:id", )
routerDB.post("/books", createBook )
routerDB.post("/books/:id",)
routerDB.delete("/books/:id",)

export default routerDB