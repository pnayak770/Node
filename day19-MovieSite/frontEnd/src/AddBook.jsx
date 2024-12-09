import React from "react";
import axios from "axios";

export const AddBook = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    author: "",
    price: "",
    description: "",
    publisher: "",

  });


  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e){
    e.preventDefault();

    const data = await axios.post("http://localhost:9090/api/add/book",formData);
    console.log(data);
  }


  return (
    <>
      <h2>Add Book</h2>
      <form action="" onSubmit={handleSubmit} >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};
