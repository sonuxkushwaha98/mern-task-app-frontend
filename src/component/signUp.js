import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
            {
                navigate('/')
            }
    })
    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:8000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (result) {
            localStorage.setItem('user',JSON.stringify(result.result))
            localStorage.setItem('token',JSON.stringify(result.auth))
            navigate('/')
        }
    }
    return (
        <div className="signup">
            <h1>Register</h1>
            <input className="inputbox" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />

            <input className="inputbox" type="email"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

            <input className="inputbox" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            <button onClick={collectData} className="inputbtn" type="button">Sign-Up</button>
        </div>
    )
}

export default SignUp;