import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

function PhotographerDashboard() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/contentGallery/photos')
      .then(response => {
        console.log('Response data:', response.data);
        setPhotos(response.data.allImageDetails);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        setError('Error fetching photos. Please try again later.');
      });
  }, []);

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  const renderSelectedPhoto = () => {
    if (!selectedPhoto) return null;
    return (
      <Card>
        <Card.Img src={selectedPhoto.imageURL} alt={selectedPhoto.imageCategory} />
        <Card.Body>
          <Card.Title>{selectedPhoto.imageCategory}</Card.Title>
          <Card.Text>{selectedPhoto.imageDescription}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container fluid style={{overflowY: 'auto', columnCount: 4, columnGap: '1px' }}>
      {error && <div>Error: {error}</div>}
      {photos.map((photo, index) => (
        <Card key={index} style={{ minWidth: '0', marginBottom: '6px' }}>
          <Card.Img src={photo.imageURL} alt={photo.imageCategory} style={{ objectFit: 'fit'}} />
        </Card>
      ))}
    </Container>
  );
}

export default PhotographerDashboard;
