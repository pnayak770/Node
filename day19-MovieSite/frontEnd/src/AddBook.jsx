import { useState } from "react";
import axios from "axios";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    price: "",
    description: "",
    image: "",
    image2: "",
  });
  const [successMsg, setSuccessMsg] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "image")
      setFormData({ ...formData, [name]: e.target.files[0] });
    else setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const frm = new FormData();
    frm.append("title", formData.title);
    frm.append("author", formData.author);
    frm.append("publisher", formData.publisher);
    frm.append("price", formData.price);
    frm.append("description", formData.description);
    frm.append("image", formData.image);
    frm.append("image2", formData.image2);

    const response = await axios.post(
      "http://localhost:9091/api/add/book",
      frm
    );
    if (response.status === 201) setSuccessMsg(true);
  }

  return (
    <>
      {successMsg && <h3>Book Added</h3>}
      <h2>Add a book</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="publisher"
          placeholder="Publisher"
          value={formData.publisher}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          id=""
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="file" name="image" onChange={handleChange} />
        <br />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default AddBook;