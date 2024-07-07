import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginHandler = async () => {
        console.log(email);
        let result = await fetch('http://localhost:8000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        if (result.auth ) {
            alert('Login sucessfully')
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate ('/')

        } else {
            alert('Please enter correct details')
        }
    }
    return (
        <div className="login">
            <h1>Login page</h1>
            <input className="inputbox" type="text" placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <input className="inputbox" type="pasword" placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button onClick={loginHandler} className="inputbtn" type="button">Login</button>
        </div>
    )
}

export default Login;