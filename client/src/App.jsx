import "./App.css"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client"
import Home from './components/Home.jsx';
import BookDetailsPage from './components/BookDetailsPage.jsx';
import Addbook from "./components/Addbook.jsx";
import Update from "./components/Update.jsx";
import { useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import LogIn from "./components/LogIn.jsx";


const App = () => {
  const [data, setData] = useState([]);
  const [book, setBook] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [id, setId]=useState(0)
  

  useEffect(() => {
      axios.get('http://localhost:8080/books/getall')
          .then((res) => {
              console.log("res", res.data);
              setData(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  }, [refresh]);

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home data={data} setBook={setBook} />} />
        <Route path="/bookdetail" element={<BookDetailsPage book={book} setRefresh={setRefresh} refresh={refresh} setId={setId} />} />
        <Route path="/addbook" element={<Addbook refresh={refresh} setRefresh={setRefresh}/>} />
        <Route path="/update" element={<Update refresh={refresh} setRefresh={setRefresh} id={id}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;