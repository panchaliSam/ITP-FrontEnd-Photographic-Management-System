import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditImage() {
    const { imageId } = useParams();
    const navigate = useNavigate();

    const [image, setImage] = useState({
        imageCategory: null,
        ImageLocation: null,
        ImageCustomer: null
    });
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchImageDetails = async () => {
            try {
                const response = await axios.get(`/api/contentGallery/photos/${imageId}`);
                setImage(response.data);
            } catch (error) {
                console.error('Error fetching image details:', error);
                setError('Error fetching image details');
            }
        };

        if (imageId) {
            fetchImageDetails();
        }
    }, [imageId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setImage(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // Ensure imageId is set before making the PUT request
            if (!imageId) {
                throw new Error('Image ID is undefined');
            }

            await axios.put(`/api/contentGallery/photos/${imageId}`, image);
            setShowPopup(true);
            navigate(`/manageImagePage`);
        } catch (err) {
            console.error('Error updating image:', err);
            setError('Error updating image');
        }
    };

    return (
        <div className='container'>
            {error && <p className="error">{error}</p>}
            {showPopup && <p className="popup">Updated successfully!</p>}
            <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter category"
                        name="imageCategory"
                        value={image.imageCategory}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter location"
                        name="ImageLocation"
                        value={image.ImageLocation}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCustomer">
                    <Form.Label>Image Customer</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image customer"
                        name="ImageCustomer"
                        value={image.ImageCustomer}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Image
                </Button>
            </Form>
        </div>
    );
}

export default EditImage;
