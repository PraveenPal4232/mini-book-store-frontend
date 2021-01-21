import {useState, useEffect} from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Logo from '../assets/logo.png';

const Header = () => {
    const [IsNavOpen, SetIsNavOpen] = useState(false);
    // Update Alert Status
    const updateNavStatus = () => {
        SetIsNavOpen(prevState => !prevState)
      };
    return (
        
        <header>
            <div className="logo">
               <a href="/">
                   <img src={Logo}  alt="Logo"/></a>
            </div>

            <nav>
                <ul className="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">My Account</a>
                    <ul className="nav_sub">
                        <li><a href="/login">LogIn</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="#">LogOut</a></li>
                    </ul>
                    </li>
                </ul>
            </nav>

            <div className="humber_menu" onClick={updateNavStatus}>

            { 
            IsNavOpen ? 
            <span className="nav_close">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/></svg>
            </span>
            :
            <span className="nav_open">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"/></svg>
            </span>
            }
   
                </div>

        </header>
    )
}

export default Header;