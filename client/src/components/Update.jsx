import React from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Navigation from "./Navigation.jsx";

const Update = ({id, refresh, setRefresh}) => {
    const navigate = useNavigate()
    const [newdescrip, setNewdescrip]=useState("")
    const [newprice, setNewprice]=useState(0)

    const updated=()=>{
        axios.put(`http://localhost:8080/books/${id}`, {description: newdescrip, price: newprice}).then(()=>{
            console.log("data updated successfully")
            setRefresh(!refresh)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <Navigation />
<div className="update-div">
         <div>
           <input className="input-descrip" placeholder="new description" onChange={(e)=>{setNewdescrip(e.target.value)}}></input>
         </div>
    <div>
    <input type="number" className="input-title" placeholder="new price" onChange={(e)=>{setNewprice(e.target.value)}}></input>
    </div>
    <div>
    <button className="sbutton" onClick={()=>{updated(), navigate('/home')}}> OK
    </button>
    </div>
   
 </div>
        </div>
  
    )
}

export default Update;
