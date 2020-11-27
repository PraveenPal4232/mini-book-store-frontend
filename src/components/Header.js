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
                <BrowserRouter>
                    <Link to="/">Home</Link>
                     <Link to="/about">About</Link>
                    <Link to="#">My Account</Link></BrowserRouter>
            </nav>
        </header>
    )
}

export default Header;