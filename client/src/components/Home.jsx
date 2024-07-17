import React from "react";

import axios from 'axios'
import Navigation from "./Navigation.jsx"
import { useNavigate } from "react-router-dom";

const Home = ({data, setBook}) => {

    
    const navigate = useNavigate()


    return (
        <div>
             <Navigation />
<div className="cards-container">
            {data.map((el) => (
                <div onClick={()=>{setBook(el), navigate("/bookdetail")}} className="card" key={el.id}>
                    <div className="card-img">
                        <img src={el.imageUrl} alt={el.title} />
                    </div>
                    <div className="card-title">{el.title}</div>
                    
                    <div className="card-subtitle">{el.author}</div>
                    <hr className="card-divider" />
                    <div className="card-footer">
                        <div className="card-price">{el.price}<span>DT</span></div>
                        
                    </div>
                </div>
            ))}
        </div>
        </div>
        
    );
};

export default Home;
