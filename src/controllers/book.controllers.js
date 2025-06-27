import bookModel from "../models/book.model.js";

//POST /api/books: crear un nuevo libro
export const createBook = async (req, res) => {
    try {
        let { title, author, pages, genre} = req.body;

        //Validaciones para "title"
        let tituloUnico = await bookModel.findOne({ where: { title } })
        if (tituloUnico) {
            return res.status(400).json({ message: "Error: Este libro ya se encuentra en la base de datos" })
        }
        if (title.trim() === '') {
            return res.status(400).json({ message: "Error: Campo título no puede estar vacío" })
        }

        //Validaciones para "author"
        if (author.trim() === '') {
            return res.status(400).json({ message: "Error: Campo título no puede estar vacío" })
        }

        //Validaciones para "pages"
        if (typeof pages !== 'number') {
            return res.status(400).json({ message: "Error: El número de páginas debe ser un número entero" })
        }
        if (pages < 0) {
            return res.status(400).json({ message: "Error: El número de páginas no debe ser negativo" })
        }

        //Validaciones para "genre"
        if (genre.trim() === '') {
            return res.status(400).json({ message: "Error: Campo genre no puede estar vacío" })
        }

        const char = await bookModel.create(req.body)
        res.status(201).json("Libro creado correctamente")
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
}

//GET /api/books: listar todos los libros
export const listALLbook = async (req, res) => {
    try {
        const listedBooks = await bookModel.findAll()
        res.json(listedBooks)

    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }

};

//GET /api/books/:id: obtener un libro por ID
export const listBookById = async (req, res) => {
    const { id } = req.params;

    try {
        const listedBookID = await bookModel.findByPk(id);
        if (listedBookID) {
            res.status(200).json(listedBookID);
        } else {
            res.status(404).json({ message: 'El libro buscado no existe' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//DELETE /api/books/:id: eliminar un libro
export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const findBook = await bookModel.findByPk(id);
        if (findBook) {
            await findBook.destroy()
            res.json({ message: 'Libro eliminado correctamente' })
        } else {
            res.status(404).json({ message: 'El libro que se intenta eliminar no existe' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
}
