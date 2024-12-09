import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import { Books } from './Components/books';


function App() {

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetchData();

  },[])

  async function fetchData(){
    const response=await axios.get("http://localhost:9090/api/get/books");
    console.log(response.data);
    setBooks(response.data);
  }
  

  return (
    <>
    <Books  books={books}/>
      
    </>
  )
}

export default App
