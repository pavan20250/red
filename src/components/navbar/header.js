import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png"
import "./header.css"
import { Link } from "react-scroll";

const Header = () => {
    
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 600 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu =()=>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <div className="header">
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <div className="logo">
                <img src={logo} alt= "" draggable='false'/>
            </div>
            <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={0} >Home</Link></li>
                <li><Link to="about" smooth={true} offset={-160} >About</Link></li>
                <li><Link to="services" smooth={true} offset={-150} >Services</Link></li>
                <li><Link to="blog" smooth={true} offset={-140} >Why us?</Link></li>
                <li><Link to="hero" smooth={true} offset={0} >Portfolio</Link></li>
                <li><Link to="contact" smooth={true} offset={-200} ><button className="btn">Contact</button></Link></li>

            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="menu-icon" viewBox="0 0 16 16" onClick={toggleMenu}>
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </nav>
        </div>
    );
};

export default Header;
