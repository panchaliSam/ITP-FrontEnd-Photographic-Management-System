import React from 'react';
import logo from '../images/V De Silva Logo PNG.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
        <img src={logo} alt="company logo" />
          <div className='sb_footer-links_div'>
            <h4>Use Cases</h4>
            <a href="/Use Cases">
              <p>Web-designers</p>
            </a>
            <a href="/Use Cases">
              <p>Marketers</p>
            </a>
            <a href="/Use Cases">
              <p>Small Business</p>
            </a>
            <a href="/Use Cases">
              <p>Website Builder</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Company</h4>
            <a href="/Use Cases">
              <p>About Us</p>
            </a>
            <a href="/Use Cases">
              <p>Careers</p>
            </a>
            <a href="/Use Cases">
              <p>FAQs</p>
            </a>
            <a href="/Use Cases">
              <p>Teams</p>
            </a>
            <a href="/Use Cases">
              <p>Contact Us</p>
            </a>
          </div>
          <div className='socialmedia'>
            <h4>Let's do</h4>
            {/* <a href='#' className='social-icon'>
              <FaFacebookF />
            </a>
            <a href='#' className='social-icon'>
              <FaTwitter />
            </a>
            <a href='#' className='social-icon'>
              <FaInstagram />
            </a>
            <a href='#' className='social-icon'>
              <FaLinkedinIn />
            </a>
            <a href='#' className='social-icon'>
              <FaYoutube />
           </a> */}
           <h4>Subscribe</h4>
           <p>Subscribe to stay tuned with Vidura de silva photography</p>
           <div className='footer-content'>
            <div className='input-button-container'>
              <input type="text" placeholder='Enter your email Address'/>
            </div>
            <button className='send-message-button'>Subscribe</button>
          </div>
           
          </div>
        </div>
      </div>

      <hr></hr>

      <div className='sb_footer-below'>
        <div className='sb_footer-below-links'>
            <a href="/Privacy Policy"><p>Privacy Policy</p></a>
            <a href="/Terms of Use"><p>Terms of Use</p></a>
            <a href="/Sales and Refunds"><p>Sales and Refunds</p></a>
            <a href="/Legal"><p>Legal</p></a>
            <a href="/Site Map"><p>Site Map</p></a>
          </div>
          <div className='sb_footer-copyright'>
            <p>
              @{new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
    </div>
  );
}

export default Footer;
