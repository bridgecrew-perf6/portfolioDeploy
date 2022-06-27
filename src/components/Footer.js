import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll';
import doctorX from './images/user0.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={-65} duration={600} >Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="portfolio" spy={true} smooth={true} offset={-14} duration={600}>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="updates" spy={true} smooth={true} offset={50} duration={600}>Updates</Link>
                    </li>
                </ul>
                <div className='bottom'>
                <br></br>
                
                <img className='ryoko_img' src={doctorX} width='80' alt='Dr Ryoko Yonekura' />
                <br></br>
                <br></br>
                <h1>The Portfolio 2022</h1>
                <p>by Samuel KO</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
