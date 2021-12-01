import React, { useState } from 'react'
import './compStyle/Navbar.css'
import { Link } from 'react-router-dom'

const navBar = () => {

    const changeNav = () => {
        const nav = document.getElementsByClassName('nav-items')[0];
        nav.classList.toggle('moveNav');
    }

    const closeNav = () => {
        const nav = document.getElementsByClassName('nav-items')[0];
        nav.classList.remove('moveNav');
    }

    return (
        <nav className='navbar'>
            <div className="logo"><Link to="/">News<span>Buzz</span></Link></div>
            <ul className="nav-items">
                <li className="nav-item"><Link to="/business" onClick={closeNav}>business</Link></li>
                <li className="nav-item"><Link to="/entertainment" onClick={closeNav}>entertainment</Link></li>
                <li className="nav-item"><Link to="/health" onClick={closeNav}>health</Link></li>
                <li className="nav-item"><Link to="/science" onClick={closeNav}>science</Link></li>
                <li className="nav-item"><Link to="/sports" onClick={closeNav}>sports</Link></li>
                <li className="nav-item"><Link to="/technology" onClick={closeNav}>technology</Link></li>
            </ul>
            <div className="burger" onClick={changeNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}

export default navBar
