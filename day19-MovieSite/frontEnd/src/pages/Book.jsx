import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Book() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchData(id);
  }, [id]);

  async function fetchData(idToFetch) {
    const response = await axios.get(
      "http://localhost:9090/api/get/book/" + idToFetch
    );
    console.log(response.data);
    setBook(response.data);
  }

  return (
    <>
      <section id="singleBook">
        <div className="left">
          {book.image && <img src={book.image} alt="" />}
        </div>
        <div className="right">
          <h4>{book.title}</h4>
          <p className="author">{book.author}</p>
          <p className="description">{book.description}</p>
          <Link to="" className="cta">
            Add To Cart
          </Link>
        </div>
      </section>
    </>
  );
}

export default Book;