import React from 'react';
import contactusimg from '../images/contactus/contactusimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contactus = () => {
    return (
        <div className="contact-us-container">
            <div className="contact-section" style={{ backgroundImage: `url(${contactusimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'white', fontSize: '50px', fontWeight: 'bolder', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Contact Us</h1>
            </div>
            <br></br>
            <div className="contact-section" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="contact-content" style={{ marginRight: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '400px' }}>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }} className='contact-description'>
                        <h2 style={{ color: '#212529', fontSize: '24px', marginBottom: '20px' }}>Contact Information</h2>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: '#007bff' }} />
                            <span style={{ color: '#495057' }}>example@example.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px', color: '#007bff' }} />
                            <span style={{ color: '#495057' }}>+1 (123) 456-7890</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px', color: '#007bff' }} />
                            <span style={{ color: '#495057' }}>1234 Street Name, City, Country</span>
                        </div>
                    </div>
                </div>
                <div className="contact-content" style={{ width: '400px', height: '400px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <iframe
                        title="Location"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.43538015494!2d79.97078801465418!3d6.914837431490927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595d50b9f8cb%3A0xe8c22b76e930c94c!2sSample%20Location!5e0!3m2!1sen!2sus!4v1643942904844!5m2!1sen!2sus`}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
