import Book from "../../../models/bookSchema";
import { dbConnect } from "../../../utils/mongodb";


dbConnect();

export default async function bookHandler(req, res) { 
    
    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const books = await Book.find();
                return res.status(200).json(books)
            } catch (err) {
                return res.status(400).json({ msg : err.message})
            }
            
        case "POST":
            try {
                const newBook = new Book(body);
                const book = await newBook.save();
                return res.status(200).json(book);
            } catch (err) {
                return res.status(400).json({ msg : err.message});
            }
        default:
            return res.status(400).json("Sorry, This method does not exist");
    }
} 