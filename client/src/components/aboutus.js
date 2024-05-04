import React from 'react';
import owner from '../images/AboutUsPAge/Owner.png';
import couple from '../images/AboutUsPAge/couple.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-section" style={{ backgroundImage: `url(${couple})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'white', fontSize: '50px', fontWeight: 'bolder' }}>About Us</h1>
            </div>
            <br></br>
            <div className="about-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="about-content" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={owner} style={{ width: '500px',marginLeft:'30px' ,marginBottom:'10px'}} />
                    <div style={{ marginLeft: '30px',margintop:'150px' }} className='abt-description'>
                        <h1 className='text-center'>Vidura De Silva Photography</h1>
                        <br></br>
                        <div style={{ marginLeft: '30px', textAlign: 'justify',marginRight:'30px' }}>
                        <p>With a keen eye for detail and a love for storytelling, Vidura embarked on a journey to immortalize life's most cherished moments through photography. Specializing in capturing the essence of life's precious moments, Vidura and his team are dedicated to providing high-quality photography services tailored to each client's unique needs. Their commitment extends beyond mere technical expertise; it encompasses a deep understanding of the emotions and significance behind every image they capture.</p>
                            <p>From intimate portraits capturing the warmth of family bonds to grand events immortalizing celebratory milestones, Vidura De Silva Photography offers a diverse range of services. Each photograph is meticulously crafted, ensuring that every significant snapshot tells a compelling story and evokes powerful emotions. Their approach combines artistic vision with technical proficiency, resulting in images that resonate with authenticity and depth.</p>
                            <p>Vidura's passion for photography traces back to his childhood, where he discovered the magic of capturing the world's beauty through the lens of a camera. His early encounters with photography sparked a lifelong love affair with the art form, shaping his journey as a professional photographer. Today, Vidura De Silva Photography stands as a testament to his unwavering dedication and commitment to the craft.</p>
                            <p>With years of experience and a portfolio that reflects a diverse range of clients and projects, Vidura De Silva Photography continues to set the standard for excellence in the field. Their work not only captures moments in time but also preserves memories that will be cherished for generations to come. As they continue to evolve and innovate, Vidura De Silva Photography remains steadfast in their mission to deliver exceptional photography services that exceed expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
