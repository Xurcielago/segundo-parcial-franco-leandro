import { Router } from "express";
const routerDB = Router();
import { createBook, deleteBook, listALLbook, listBookById, updateBook } from "../controllers/book.controllers.js";

routerDB.get("/books", listALLbook)
routerDB.get("/books/:id", listBookById)
routerDB.post("/books", createBook )
routerDB.put("/books/:id", updateBook)
routerDB.delete("/books/:id", deleteBook)

export default routerDB;