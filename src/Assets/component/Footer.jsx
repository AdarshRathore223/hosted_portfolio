import { BiLogoLinkedin,BiLogoTwitter,BiLogoInstagram } from 'react-icons/bi';
import React from 'react'
function Footer() {
  return (
    <div className="footer ">
        <h2>Follow Me</h2>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/adarsh-rathore-157851130/" target='_blank'><BiLogoLinkedin size={25} color='white'/></a>
          <a target='_blank' href="https://twitter.com/Adarshrathore23"><BiLogoInstagram size={25} color='white'/></a>
          <a target='_blank' href="https://github.com/AdarshRathore223"><BiLogoTwitter size={25} color='white'/></a>
        </div>
      </div>
  )
}

export default Footer