import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.clear() // this will delete inputs from localstorage
        navigate('/signup') // it used to navigate to previouse page 
    }

    return (
        <div className='navbar'>
            <div className='logo'></div>
            {auth ? <ul className='nav-ul'>
                <li><Link to="/">products</Link></li>
                <li><Link to="/add">Add products</Link></li>
                <li><Link to="/update">Update products</Link></li>
                <li> <Link onClick={Logout} to="/signup">Log-out ({JSON.parse(auth).name}) </Link></li>
            </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li> <Link to="/signup">Sign-Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }



        </div>
    )
}

export default Nav;