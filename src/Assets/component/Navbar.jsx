import React from 'react'
import { useState } from 'react';
import { BiMoon, BiSun,BiMenu } from 'react-icons/bi';
function Navbar(props) {
    const [icon, Seticon] = useState(false);
    const [navlist, Setnavlist] = useState(true);
    const Iconfunction = () => {
        Seticon(!icon);
        props.Theme();
    }
    const Navlist = () => {
        Setnavlist(!navlist);
    }
    return (
        <header>
            <div className="logo">AR</div><a href="#" class="logo">ADA<span class="logo">RSH</span></a>
            <BiMenu onClick={Navlist} id='menu-icon'/>
            <ul className={navlist ? 'navbar' : 'navbar active'}>
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