import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        
        <header>
            <div className="logo">
               <a href="/">
                   <img src={Logo}  alt="Logo"/></a>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/welcome">My Account</a>
            </nav>
        </header>
    )
}

export default Header;