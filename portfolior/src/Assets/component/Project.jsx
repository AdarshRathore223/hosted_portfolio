import React from 'react'
import { BiCodeAlt,BiServer,BiBrush,BiLogoAndroid } from 'react-icons/bi'

function Project() {
    return (
        <section className="Projects" id="Projects">
            <div className="heading">
                <h2>Projects</h2>
            </div>
            <div className="Projects-content">

                <div className="Projects-box">
                    <BiCodeAlt className='bx' size={100}/>
                    <h3>Web Development</h3>
                    <a href="#">Learn More</a>
                </div>

                <div className="Projects-box">
                    <BiServer className='bx' size={100}/>
                    <h3>Backend Development</h3>
                    <a href="#">Learn More</a>
                </div>
                <div className="Projects-box">
                    <BiBrush className='bx' size={100}/>
                    <h3>UI/UX Design</h3>
                    <a href="#">Learn More</a>
                </div>

                <div className="Projects-box">
                    <BiLogoAndroid className='bx' size={100}/>
                    <h3>App Development</h3>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </section>
    )
}

export default Project