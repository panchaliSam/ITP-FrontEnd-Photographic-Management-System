import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import image1 from '../images/homePage/image1.jpg';
import image2 from '../images/homePage/image2.jpg';
import image3 from '../images/homePage/image3.jpg';

export default function homeGal() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={image3} className='d-block w-100'alt='...' />
        <MDBCarouselCaption>
          <h1>VIDURA DE SILVA PHOTOGRAPHY</h1>
          <br></br>
          <h3>Capture Your Best Moments</h3>
          <br></br>
          <br></br>
          <button style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '10px 20px', borderRadius: '5px' }}>View Gallery</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={image2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h1>VIDURA DE SILVA PHOTOGRAPHY</h1>
        <br></br>
          <h3>Capture Your Best Moments</h3>
          <br></br>
          <br></br>
          <button style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '10px 20px', borderRadius: '5px' }}>View Gallery</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={image1} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h1>VIDURA DE SILVA PHOTOGRAPHY</h1>
        <br></br>
          <h3>Capture Your Best Moments</h3>
          <br></br>
          <br></br>
          <button style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '10px 20px', borderRadius: '5px' }}>View Gallery</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
