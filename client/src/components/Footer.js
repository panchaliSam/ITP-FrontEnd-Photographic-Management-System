import React from 'react';
import logo from '../images/V De Silva Logo PNG.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <img src={logo} alt="company logo" />
          <div className='sb_footer-links_div'>
            <h4>Use Cases</h4>
            <p>Web-designers</p>
            <p>Marketers</p>
            <p>Small Business</p>
            <p>Website Builder</p>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Teams</p>
            <p>Contact Us</p>
          </div>
          <div className='socialmedia'>
            <h4>Let's do</h4>
            <a href='https://www.facebook.com/' className='social-icon'>
              <FaFacebookF />
            </a>
            {/* <a href='#' className='social-icon'>
              <FaTwitter />
            </a> */}
            <a href='https://www.instagram.com/' className='social-icon'>
              <FaInstagram />
            </a>
            {/* <a href='#' className='social-icon'>
              <FaLinkedinIn />
            </a>
            <a href='#' className='social-icon'>
              <FaYoutube />
<<<<<<< HEAD
           </a> */}
           <h4>Subscribe</h4>
           <p>Subscribe to stay tuned with Vidura de silva photography</p>
           <div className='footer-content'>
            <div className='input-button-container'>
              <input type="text" placeholder='Enter your email Address'/>
            </div>
            <button className='send-message-button'>Subscribe</button>
          </div>
=======
            </a> */}
            <h4>Contact Us</h4>
            <p>Subscribe to stay tuned with Vidura de silva photography</p>
            <div className='footer-content'>
              <div className='input-button-container'>
                <input type="text" placeholder='Enter your email Address'/>
              </div>
              <button className='send-message-button'>Subscribe</button>
            </div>
>>>>>>> 5f6b56c2b89e11db7ff29c05db5c6ac1b42ee1c7
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
