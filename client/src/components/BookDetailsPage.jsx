import React from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Navigation from "./Navigation.jsx";


const BookDetailsPage = ({ book, setRefresh, refresh, setId }) => {
    const navigate = useNavigate()
    const [show, setShow]=useState(false)

    const deletebook=(id)=>{

        axios.delete(`http://localhost:8080/books/${id}`).then(()=>{
            console.log("data deleted successfully")
            setRefresh(!refresh)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <Navigation />
     <div className="product-detail-container">
            <img className="product-detail-image" src={book.imageUrl} alt={book.title} />
            <div className="product-detail-content">
                <div className="product-detail-title">{book.title}</div>
                <div className="product-detail-author">{book.author}</div>
                <div className="product-detail-description">{book.description}</div>
                <div className="product-detail-price">{book.price}<span>DT</span></div>
                <div className="buttons-container">
                    <button className="back-button" onClick={() => navigate("/home")}>Back</button>
                    <button className="delete-button" onClick={() => {deletebook(book.idbooks)
                        navigate("/home")
                    }}>Delete</button>
                    <button className="update-button" onClick={() => {setId(book.idbooks), navigate('/update')}}>Update</button>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default BookDetailsPage;
