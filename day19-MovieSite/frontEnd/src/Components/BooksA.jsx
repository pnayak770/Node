import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Books({ books }) {
  console.log(books);
  return (
    <>
      <section id="books">
        <h2>Our Collection</h2>
        <div className="books-wrapper">
          {books.map((book) => {
            return (
              <div className="book" key={book._id}>
                {book.image && (
                  <Link to={`book/${book._id}`}>
                    <img src={book.image} alt="" />
                  </Link>
                )}
                <h4>
                  <Link to={`book/${book._id}`}>{book.title}</Link>
                </h4>
                <p>Price: {book.price}</p>
                <a href="" className="cta">
                  View Details
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Books;