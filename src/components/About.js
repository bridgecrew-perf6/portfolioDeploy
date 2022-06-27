import React from 'react'
import doctorX from './images/dr-6.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <br></br>
            <div className='container'>
                <div className='col-2'>
                    <h2>About Dr.Yonekura</h2>
                    <span className='line'></span>
                    <p>Ryoko Yonekura goes to a university hospital with her letter of introduction. Ryoko Yonekura is a freelancer surgeon and is placed at the university hospital by a doctor placement agency. Due to the hospital's harsh working conditions, several doctors have quit. Yonekura doesn't appear like your typical doctor. She wears shorts and some people assume she is the girlfriend of someone at the hospital. Yonekura though is an excellent surgeon.</p>
                    <p>Ryoko Yonekura, ドクターX </p>
                    <p>大門未知子 (內科医)</p>
                    <button className='button'>Find Out</button>
                </div> 
                <img src={doctorX} alt='Dr Ryoko Yonekura' />
            </div>
        </div>
    )
}

export default About
