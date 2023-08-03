import React from 'react'
import { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiMoon, BiSun } from 'react-icons/bi';
function Navbar(props) {
    const [icon, Seticon] = useState(false);
    const Iconfunction = () => {
        Seticon(!icon);
        props.Theme();
    }
    return (
        <header>
            <div className="logo">AR</div><a href="#" class="logo">ADA<span class="logo">RSH</span></a>

            <ul className="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
                <li id='darkmode' >{icon ? (
                    <BiMoon onClick={Iconfunction} />
                ) : (
                    <BiSun onClick={Iconfunction} />
                )}</li>
            </ul>
        </header>
    )
}

export default Navbar