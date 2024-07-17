import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [userdata, setUserdata]= useState([])

  const navigate = useNavigate()

  const verifyuser=()=>{
    axios.get("http://localhost:8080/users/get").then((res)=>{
        console.log("res",res.data)
        setUserdata(res.data)
    }).catch((err)=>{console.log(err)})

    if(userdata[0].name === name && userdata[0].lastname === lastName && userdata[0].password === password) {
        navigate('/home')
    }
    else {
        alert("access denied ")
    }



  }




    return (
        <div className="form-box">
            <form className="form" onSubmit={(e) => {e.preventDefault(), verifyuser()}}>
                <span className="title">Log In</span>
                <span className="subtitle">Enter to manage your bookstore</span>
                <div className="form-container">
                    <input type="text" className="input" placeholder="Name" required onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="text" className="input" placeholder="Name" required onChange={(e)=>{setLastName(e.target.value)}}/>
                    <input type="password" className="input" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button type="submit">Log In</button>
            </form>
            
        </div>
    );
};


export default LogIn;
