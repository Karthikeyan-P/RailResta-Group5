import React from "react";
import Logo from './logo.png'
import './header.css'

const Header = () =>{
    return (
        <header>
        <div id="menu" className="menu-icon">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        <div className="logo">
            <img src={Logo}/>
        </div>
        <nav>
            <ul>
                <li>Locations</li>
                <li>Track Order</li>
                <li>Login</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header

