import React, { useState } from 'react'
import Home from './Home';
import Aboutme from './Aboutme';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Copyright from './Copyright';
import Navbar from './Navbar';
function Body() {
  const [isDark,setisDark] = useState(true);
  const Themechanger = () =>{
    setisDark(!isDark)
  }

  return (
    <body className={isDark ? '' : 'active'}>
    
      <Navbar Theme={Themechanger}/>
      <Home />
      <Aboutme />
      <Skill />
      <Project/>
      <Contact />
      <Footer />
      <Copyright />
    </body >
  )
}

export default Body