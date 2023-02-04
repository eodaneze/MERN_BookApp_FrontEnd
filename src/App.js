import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios"
function App() {
  const[book, setBook] = useState([]);
  useEffect(() => {
     const fetchAllBooks = async () => {
          const res = await axios.get("http://localhost:8000/api");
          setBook(res.data);
          console.log(res);
     }
     fetchAllBooks()
  }, [])
  return <div className="bg-[#000] h-[100vh] w-[100%]"></div>;
}

export default App;
