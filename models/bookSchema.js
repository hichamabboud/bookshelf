import { Schema, model, models } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: [100, "Title's name cannot be more than 100 characters"],
    },
    category: {
        type: String,
        required: true,
        maxlength: [100, "Category's name cannot be more than 100 characters"],
    },
    isbn: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        maxlength: [100, "Author's cannot be more than 100 characters"],
    },
    price: {
        type: Number,
        required: true,
        maxlength: [5, "Sorry price cannot be more than 4 digits"]
    },
    summary: {
        type: String,
        required: true,
        maxlength: [800, "Summary cannot be more than 800 characters"],
        minlength: [100, "Title cannot be less than 100 characters"],
    }
},
    {
        timestamps: true,
        versionKey: false
    });


export default models.Book || model("Book", bookSchema);