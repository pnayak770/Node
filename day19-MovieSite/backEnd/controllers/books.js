import mongoose from "mongoose";
import Books from "../models/bookmodele.js";

 export const getBooks = async (req, res) => {
  const allBooks = await Books.find();
  res.send(allBooks);
};


export async function getBook(request, response) {
  const idToFetch = request.params.id;
  try {
    if (!idToFetch)
      return response
        .status(400)
        .send({ message: "You must specify a book ID" });

    if (!mongoose.Types.ObjectId.isValid(idToFetch))
      return response
        .status(400)
        .send({ message: "Given ID is not in proper format" });

    const book = await Books.findById(idToFetch);
    console.log("book", book);
    if (!book)
      return response
        .status(404)
        .send({ message: "No book found with the given ID" });

    return response.send(book);
  } catch (error) {
    return response
      .status(500)
      .send({ message: "Error fetching book ", error });
  }
}



export const addBook = async (req, res) => {
  try {
    const { title, author, price, description, publisher } = req.body;
    const newBook = new Books({
      title,
      author,
      price,
      description,
      publisher,
    });
    await newBook.save();
    res.status(201).send({ message: "book added successfully" });
  } catch (error) {
    res.status(500).send({ message: "book not added" });
  }
};

// app.put();

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, price, description, publisher } = req.body;
    const updatedBook = await Books.findByIdAndUpdate(
      id,
      { title, author, price, description, publisher },
      { new: true }
    );
    res.status(200).send(updatedBook);
  } catch (error) {
    res.status(500).send({ message: "book not updated" });
  }
};

// app.delete();

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({ message: "book not found" });
    }

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).send({ message: "invalid book id" });
    }
    const deletedBook = await Books.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ message: "no book found with given id" });
    }
    res.status(200).send({ message: "book deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "book not deleted" });
  }
};
