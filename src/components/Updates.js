import React from 'react'
import './Updates.css'
// 'https://www.youtube.com/embed/oeqP5JtihMA'


const Updates = () => {
    return (
        <div className='updates' id='updates'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='container'>
                <div className='col-2'>
                    <iframe width='570' height='320' src="https://www.youtube.com/embed/crzIFLlG5TU" title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <h4>Above shows my IoT mobile development with Andriod Studio</h4>
                </div>
        
                <div className='col-1'>
                    <p>Specialized in Software Development</p>
                    <h1> </h1>
                    <p>I am familiar with C, C++, Java, HTML, Python, JavaScript, CSS, MSSQL, Oracle and MySQL.  I also have experience in Adobe Photoshop and some 3D modelling software (e.g. Illustrator and Sketchup).  All of my programmed web applications were designed by myself, from system design to interface programming.  I am familiar with user manual design and documentation.  In  Addition, I am also interested in programming on microprocessors and microcontrollers (e.g. Arduino and Raspberry Pi).  I am frequently interested in helping people to troubleshoot their application and hardware devices' problems. Indeed, I do need help from others.  I am extremely enthusiastic about learning new technologies to enrich myself. With my previous teaching experience, I learn to understand and listened attentively to people's issues. I do deserve to seek wisdom from others.</p>
                    {/* <button className='button'>GO TO SEE MORE</button> */}
                </div>
            </div>
        </div>
    )
}

export default Updates;