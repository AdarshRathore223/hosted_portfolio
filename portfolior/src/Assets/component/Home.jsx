import React from 'react'
import Typedcomponent from './Typedcomponent';
import { BiLogoLinkedin,BiLogoTwitter,BiLogoGithub } from 'react-icons/bi';
import img from '../img/main.png';

function Home() {
  const handleDownload = () => {
    const fileUrl = '../files/Adarsh_Rathore_Resume.pdf';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Adarsh_Rathore_Resume.pdf';
    anchor.click();
  };
  return (
    <section className="home" id="home">
      <div className="social">
        <a className='linkdein' target='_blank' href="https://www.linkedin.com/in/adarsh-rathore-157851130/"><BiLogoLinkedin/></a>
        <a className='twitter' target='_blank' href="https://twitter.com/Adarshrathore23"><BiLogoTwitter/></a>
        <a className='github' target='_blank' href="https://github.com/AdarshRathore223"><BiLogoGithub/></a>
      </div>
      <div className="home-img">
        <img src={img} alt="" />
      </div>
      <div className="home-text">
        <span>Hello, I'm</span>
        <h1 className="animation">Adarsh Rathore</h1>
        <Typedcomponent /><br />
        <a onClick={handleDownload} className="btn">Download CV</a>
      </div>
    </section>
  )
}

export default Home