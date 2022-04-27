import Book from "../../../models/bookSchema";
import { dbConnect } from "../../../utils/mongodb";

dbConnect();

export async function SignleBook(req, res) {
    const { method, query: { id } } = req;

    switch (method) {
        case "GET":
            try {
                const book = await Book.findById(id);
                return res.status(200).json(book);
            } catch (err) {
                return res.status(400).json({msg : err.message})
            }
        case "DELETE":
            try {
                const deleteBook = await Book.findByIdAndDelete(id);
                return res.status(200).json(deleteBook);
            } catch (err) {
                return res.status(400).json({ msg : err.message})
            }
        case "PUT":
        default: 
            return res.status(400).json("This method is not supported")
    }
}

export default SignleBook;