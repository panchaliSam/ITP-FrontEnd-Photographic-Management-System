// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { Button, Card, Container, Alert, Modal } from 'react-bootstrap';
//  // Import your CSS file

// const AllImages = () => {
//     const [imageManages, setImageManages] = useState([]);
//     const [error, setError] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedImage, setSelectedImage] = useState(null);

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     const fetchImages = async () => {
//         try {
//             const response = await axios.get("/api/contentGallery/photos");
//             setImageManages(response.data.allImageDetails);
//         } catch (error) {
//             setError('Error fetching data');
//             console.error('Error fetching images:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`/api/contentGallery/photos/${id}`);
//             fetchImages(); 
//             setShowPopup(true); 
//         } catch (error) {
//             setError('Error deleting image');
//             console.error('Error deleting image:', error);
//         }
//     };

//     const handleImageClick = (image) => {
//         setSelectedImage(image);
//     };

//     return (
//         <Container className="my-4">
//             <h1 className="text-center mb-4">All Images</h1>
//             <div className="d-flex justify-content-center mb-3">
//                 <Link to="/adminLogin/photographerDashboard/addImage" className="btn btn-primary">Add Image +</Link>
//             </div>
//             <div className="d-flex justify-content-center">
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 {showPopup && <Alert variant="success">Deleted successfully!</Alert>}
//             </div>
//             <div fluid style={{overflowY: 'auto', columnCount: 4, columnGap: '5px' }}>
//                 {imageManages.map(image => (
//                     <div key={image._id} className="image-card-wrapper">
//                     <Card>
//                         <Card.Img variant="top" src={image.imageURL} alt={image.imageCategory} />
//                         <div className="overlay">
//                             <div className="details">
//                                 <p>Image ID: {image.imageId}</p>
//                                 <p>Image Location: {image.ImageLocation}</p>
//                                 <p>Image Customer: {image.ImageCustomer}</p>
//                                 {/* Add additional details here */}
//                             </div>
//                             <div className="buttons">
//                                 <Button variant="info" className="edit-button">
//                                     <Link to={`/editImagePage/${image.imageId}`} className="text-white">Edit</Link>
//                                 </Button>
//                                 <Button variant="danger" className="delete-button" onClick={() => handleDelete(image._id)}>Delete</Button>
//                             </div>
//                         </div>
//                     </Card>
//                 </div>
                
                
//                 ))}
//             </div>
//             <Modal show={selectedImage !== null} onHide={() => setSelectedImage(null)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Image Preview</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {selectedImage && <img src={selectedImage.imageURL} alt={selectedImage.imageCategory} className="modal-image" />}
//                 </Modal.Body>
//             </Modal>
//         </Container>
//     );
// }    

// export default AllImages;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Card, Container, Alert, Modal } from 'react-bootstrap';
 // Import your CSS file

const AllImages = () => {
    const [imageManages, setImageManages] = useState([]);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/contentGallery/photos/${id}`);
            fetchImages(); 
            setShowPopup(true); 
        } catch (error) {
            setError('Error deleting image');
            console.error('Error deleting image:', error);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <Container className="my-4">
            <h1 className="text-center mb-4">All Images</h1>
            <div className="d-flex justify-content-center mb-3">
                <Link to="/adminLogin/adminDashboard/manageSystem/manageContent/addImage" className="btn btn-primary">Add Image +</Link>
            </div>
            <div className="d-flex justify-content-center">
                {error && <Alert variant="danger">{error}</Alert>}
                {showPopup && <Alert variant="success">Deleted successfully!</Alert>}
            </div>
            <div fluid style={{overflowY: 'auto', columnCount: 4, columnGap: '5px' }}>
                {imageManages.map(image => (
                    <div key={image._id} className="image-card-wrapper">
                        <Card>
                            <Card.Img variant="top" src={image.imageURL} alt={image.imageCategory} />
                            <div className="image-overlay">
                                <div className="details">
                                    <p>Image ID: {image.imageId}</p>
                                    <p>Image Location: {image.ImageLocation}</p>
                                    <p>Image Customer: {image.ImageCustomer}</p>
                                    {/* Add additional details here */}
                                </div>
                                <div className="buttons">
                                    <Button variant="info" className="edit-button">
                                        <Link to={`/adminLogin/adminDashboard/manageSystem/manageContent/editImage/${image.imageId}`} className="text-white">Edit</Link>
                                    </Button>
                                    <Button variant="danger" className="delete-button" onClick={() => handleDelete(image._id)}>Delete</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
            <Modal show={selectedImage !== null} onHide={() => setSelectedImage(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Image Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && <img src={selectedImage.imageURL} alt={selectedImage.imageCategory} className="modal-image" />}
                </Modal.Body>
            </Modal>
        </Container>
    );
}    

export default AllImages;
