import { useEffect, useState } from "react";
import instance from "./axiosConfig";
import Books from "./Components/BooksA.jsx";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await instance.get("api/get/books");
    console.log(response.data);
    setBooks(response.data);
  }

  return (
    <>
      <Books books={books} />
    </>
  );
}

export default App;