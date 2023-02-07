import React, { useState, useEffect } from "react";
import axios from "axios";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api");
        setBook(result.data);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);


  const  handleDelete = async(_id) => {
      try{
           await axios.delete(`http://localhost:8000/api/deletebook/${_id}`);
           window.location.reload()
      }
      catch(err){
        console.log(err);
      }
  }
  return (
    <div className="flex justify-center items-center gap-5">
      {books.map((book) => (
        <div
          className="flex justify-center items-center gap-5 border-2 h-[300px] text-center"
          key={book._id}
        >
          <div>
            {book.cover && <img src={book.cover} alt="book" />}
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <span className="text-center">
              <div className="flex items-center">
                <TbCurrencyNaira /> {book.price}
              </div>
            </span>
            <div className="btn">
              
                
                <button className="" onClick={() => handleDelete(book._id)}>Delete</button>
                
              
            
              <Link to={`/update/${book._id}`}>
                <button className="">Update</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
