import React from 'react'
import img from '../img/main.webp';
function Aboutme() {
  const handleDownload = () => {
    const fileUrl = '../files/Adarsh_Rathore_Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Adarsh_Rathore_Resume.pdf';
    anchor.click();
  };
  return (
    <section className="about" id="about">
        <div className="heading">
          <h2>About Me</h2>
          <span>Introduction</span>
        </div>
        <div className="about-container">
          <div className="about-img">
            <img src={img} alt="" />
          </div>
          <div className="about-text">
            <p>I am a third-year computer science engineering student at Amity University. I have a strong passion
              for coding, software development, and Web Developemnt. Throughout my studies, I have gained a solid
              understanding of computer science fundamentals and have had the opportunity to apply these skills
              through various course projects and internships. <br />
              My coursework and internships have exposed me to a wide range of computer science disciplines,
              including computer architecture, data structures, algorithms, databases, and software engineering. I
              have also had the opportunity to work on several personal projects.</p>
            <div className="information">
              <div className="info-box">
                <i className='bx bxs-user'></i>
                <span>Adarsh Rathore</span>
              </div>

              <div className="info-box">
                <i className='bx bxs-phone'></i>
                <span>+91 9691807868</span>
              </div>

              <div className="info-box">
                <i className='bx bxs-envelope'></i>
                <span>adarshrathore380@gmail.com</span>
              </div>
            </div>
            <a onClick={handleDownload} className="btn">Download Cv</a>
          </div>
        </div>
      </section>
  )
}

export default Aboutme