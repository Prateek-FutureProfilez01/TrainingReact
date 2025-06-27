import React from 'react'
import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/product'><li>Product</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
            <button>Get Started</button>
        </div>
    )
}