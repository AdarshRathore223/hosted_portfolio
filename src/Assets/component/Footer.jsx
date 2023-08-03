import { BiLogoLinkedin,BiLogoTwitter,BiLogoInstagram } from 'react-icons/bi';
import React from 'react'
function Footer() {
  return (
    <div className="footer">
        <h2>Follow Me</h2>
        <div className="footer-social">
          <a href="#"><BiLogoLinkedin size={25} color='white'/></a>
          <a href="#"><BiLogoInstagram size={25} color='white'/></a>
          <a href="#"><BiLogoTwitter size={25} color='white'/></a>
        </div>
      </div>
  )
}

export default Footer