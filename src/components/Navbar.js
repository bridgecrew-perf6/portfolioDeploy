import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo-1.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='menu-button' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link to="home" spy={true} smooth={true} offset={-65} duration={600} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="portfolio" spy={true} smooth={true} offset={-14} duration={600} onClick={closeMenu}>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="updates" spy={true} smooth={true} offset={50} duration={600} onClick={closeMenu}>Updates</Link>
                    </li>
                </ul>
                <Link to="home" spy={true} smooth={true} offset={-65} duration={600} >
                    <img src={logo} alt='logo' />
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
