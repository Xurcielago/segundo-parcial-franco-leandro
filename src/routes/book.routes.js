import { Router } from "express";
const routerDB = Router();
import { createBook, listALLbook, listBookById } from "../controllers/book.controllers.js";

routerDB.get("/books", listALLbook)
routerDB.get("/books/:id", listBookById)
routerDB.post("/books", createBook )
routerDB.post("/books/:id",)
routerDB.delete("/books/:id",)

export default routerDB;