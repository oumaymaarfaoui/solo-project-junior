import React from "react";

import axios from 'axios'
import Navigation from "./Navigation.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Addbook=({refresh, setRefresh})=>{
   const navigate = useNavigate();

   const [title, setTitle]=useState("")
   const [author, setAuthor]=useState("")
   const [description, setDescription]=useState("")
   const [imgurl, setImgurl]=useState("")
   const [price, setPrice]=useState(0)

   const addbook=()=>{
      axios.post('http://localhost:8080/books/add', {title: title, author: author, description: description, imageUrl: imgurl, price: price}).then(()=>{
         setRefresh(!refresh)
      }).catch((err)=>{
         console.log(err)
      })
   }


    return (
      <div>
         <Navigation />
<div className="input-container">
    <div>
        <input className="input-title" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}></input>
    </div>
    <div>
       <input className="input-title" placeholder="author" onChange={(e)=>{setAuthor(e.target.value)}}></input>
    </div>
    <div>
       <input className="input-descrip" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}}></input>
    </div>
    <div>
        <input className="input-title" placeholder="imageUrl" onChange={(e)=>{setImgurl(e.target.value)}}></input>
    </div>
    <div>
        <input type="number" className="input-title" placeholder="price" onChange={(e)=>{setPrice(e.target.value)}}></input>
    </div>
    <div>
    <button className="sbutton" onClick={()=>{addbook(), navigate('/home')}}> Add a book
    </button>
    </div>
 </div>
      </div>
 
    
    )
}

export default Addbook