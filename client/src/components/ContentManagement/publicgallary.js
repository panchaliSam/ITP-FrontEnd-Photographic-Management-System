import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Container, Row, Col, Form, Dropdown, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import gallary from '../../styles/ContentManagement/gallary.css';

const PublicGallery = () => {
    const [imageManages, setImageManages] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedImage, setSelectedImage] = useState(null); // State for selected image
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
    const [selectedLocation, setSelectedLocation] = useState(''); // State for selected location

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get("/api/contentGallery/photos");
            setImageManages(response.data.allImageDetails);
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching images:', error);
        }
    };

    const handleImageDownload = async (imageUrl, imageName) => {
        try {
            // Fetch the original image
            const response = await axios.get(imageUrl, {
                responseType: 'blob'
            });

            const originalImageBlob = response.data;

            // Create a new image element
            const img = new Image();

            // When the image loads, add watermark and trigger download
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                // Repeat watermark all over the image
                const watermarkText = 'Vidura De Silva Photography';
                ctx.font = '30px Arial';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                const textWidth = ctx.measureText(watermarkText).width;
                const textHeight = 30; // Adjust as needed
                for (let x = 0; x < canvas.width; x += textWidth + 50) { // Add padding between each watermark
                    for (let y = 0; y < canvas.height; y += textHeight + 50) { // Add padding between each watermark
                        ctx.fillText(watermarkText, x, y);
                    }
                }

                // Convert canvas to low-quality image
                const lowQualityImageUrl = canvas.toDataURL('image/jpeg', 0.09); // Adjust quality (0.1 to 1.0)
                
                // Trigger download
                const anchor = document.createElement('a');
                anchor.href = lowQualityImageUrl;
                anchor.download = imageName;
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);
            };

            // Set the image source to the blob URL
            img.src = URL.createObjectURL(originalImageBlob);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    // Function to handle search query change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Function to handle category select change
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Function to handle location select change
    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
    };

    // Function to filter images based on search query, selected category, and selected location
    const filteredImages = imageManages.filter(image =>
        (image.ImageCustomer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.ImageLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.imageCategory.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategory ? image.imageCategory.toLowerCase() === selectedCategory.toLowerCase() : true) &&
        (selectedLocation ? image.ImageLocation.toLowerCase() === selectedLocation.toLowerCase() : true)
    );

    // Get unique image categories and locations
    const uniqueCategories = [...new Set(imageManages.map(image => image.imageCategory))];
    const uniqueLocations = [...new Set(imageManages.map(image => image.ImageLocation))];

    return (
        <Container className="my-4">
            <h1 className="text-center mb-4">Gallery</h1>

            {/* Search form */}
            <Form className="mb-3">
                <Form.Group controlId="searchQuery">
                    <Form.Control
                        type="text"
                        placeholder="Search by customer, location, or category..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Form.Group>
                {/* Category dropdown */}
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-category">
                        {selectedCategory || 'All Categories'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleCategorySelect('')}>All Categories</Dropdown.Item>
                        {uniqueCategories.map(category => (
                            <Dropdown.Item key={category} onClick={() => handleCategorySelect(category)}>{category}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                {/* Location dropdown */}
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-location">
                        {selectedLocation || 'All Locations'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleLocationSelect('')}>All Locations</Dropdown.Item>
                        {uniqueLocations.map(location => (
                            <Dropdown.Item key={location} onClick={() => handleLocationSelect(location)}>{location}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Form>

            <Row xs={1} md={2} lg={3} className="g-4">
                {filteredImages.map(image => (
                    <Col key={image._id}>
                        <div className="image-card">
                            <Card>
                                <Card.Img variant="top" src={image.imageURL} style={{ height: '200px', objectFit: 'cover' }} onClick={() => setSelectedImage(image)}/>
                                <Card.Body>
                                    {/* <Card.Text>
                                        Featuring: {image.ImageCustomer}
                                    </Card.Text> */}
                                    {/* Download button */}
                                    <Button variant="primary" onClick={() => handleImageDownload(image.imageURL, image.imageName)}>Download</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
            {/* Image preview modal */}
            <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Image Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && <img src={selectedImage.imageURL} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh', margin: '0 auto', display: 'block' }} />}
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default PublicGallery;
