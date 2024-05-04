import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const StaffRatingForm = () => {
  const navigate = useNavigate();

  const [searchName, setSearchName] = useState('');
  const [searchRole, setSearchRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [staffName, setStaffName] = useState('');
  const [staffRole, setStaffRole] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchRatingData = async () => {
      try {
        const response = await axios.get(`/api/staffRating/staffRating`);
        const ratingData = response.data;

        const updatedFormData = ratingData.map(item => ({
          RatingID: '',
          UserID: '',
          StaffID: item.staffId,
          JobTitle: item.role, // Fill Job Title with role
          Description: '',
          NoOfStars: '',
          ...item
        }));

        setFormData(updatedFormData);
        setProgressData(ratingData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rating data:', error);
        setLoading(false);
      }
    };

    fetchRatingData();
  }, []);

  const handleNameSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleRoleSearchChange = (role) => {
    setSearchRole(role);
  };

  const handleStarClick = (stars, index) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], NoOfStars: stars };
    setFormData(updatedFormData);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], [name]: value };
    setFormData(updatedFormData);
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const form = formData[index];
    fetch('/api/staffRating/staffRating/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(response => {
      if (response.ok) {
          toast.success('Rating submitted successfully');
          console.log('Rating submitted successfully');
          const updatedFormData = [...formData];
          updatedFormData[index] = { ...updatedFormData[index], RatingID: '', UserID: '', StaffID: '', JobTitle: '', Description: '', NoOfStars: '' };
          setFormData(updatedFormData);
          alert("Submitted successfully")

      } else {
          toast.error('Rating submission failed');
          console.error('Rating submission failed');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert("Failed to add rating.Check console for more details.");
  });
  };

  // Extracting staff name and role for display
  useEffect(() => {
    if (progressData.length > 0) {
      setStaffName(progressData[0].name);
      setStaffRole(progressData[0].role);
    }
  }, [progressData]);

  const handleViewRatings = () => {
    navigate(`/progress/${userId}`);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4" style={{textAlign:'center', }}><strong>Rate Our Staff</strong></h1>
      <h4 className="mt-4 mb-4" style={{textAlign:'center'}}>“Your rating shapes our journey towards excellence.</h4>
      <br/>
      <br/>
      <div className="d-flex align-items-start">
      
        <Form.Group controlId="searchByName" className="mb-4 d-flex align-items-center" style={{ marginLeft: '10px' }}>
          <Form.Control
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={handleNameSearchChange}
            className="rounded-pill px-4 py-2 mr-2"
            style={{ backgroundColor: '#D9D9D9', boxShadow: 'none', width:'600px'}}
          />
        </Form.Group>
        <Form.Group controlId="searchByRole" className="mb-4 d-flex align-items-center mr-3" style={{ width: '100px', marginLeft:'410px' }}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Select Role
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleRoleSearchChange('')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoleSearchChange('Photographer')}>Photographer</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoleSearchChange('Videographer')}>Videographer</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoleSearchChange('Photo Editor')}>Photo Editor</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoleSearchChange('Video Editor')}>Video Editor</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoleSearchChange('Graphic Designer')}>Graphic Designer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        
        <Button variant="secondary" onClick={handleViewRatings} style={{ height: '40px', marginLeft: '20px',marginRight:'10px', backgroundColor:'black' }}>
          View my ratings
        </Button>
      </div>
      <br/>
      <br/>
      {progressData
        .filter(progress => progress.name.toLowerCase().includes(searchName.toLowerCase()) && (searchRole === '' || progress.role === searchRole))
        .map((progress, index) => (
          <div key={index} className="d-flex align-items-center mb-4">
            <div className="mr-3" style={{ width: '100px', marginLeft:'10px' }}>
              <h5>{progress.name}</h5>
              <p><strong>{progress.role}</strong></p>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <Card className="mb-4" style={{ width: '850px' }}>
                <Card.Body>
                  <Form onSubmit={(e) => handleSubmit(e, index)}>
                    <Row>
                      <Col>
                        <Form.Group controlId="RatingID">
                          <Form.Label>Rating ID</Form.Label>
                          <Form.Control
                            type="text"
                            name="RatingID"
                            value={formData[index].RatingID}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="UserID">
                          <Form.Label>User ID</Form.Label>
                          <Form.Control
                            type="text"
                            name="UserID"
                            value={formData[index].UserID}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="StaffID">
                          <Form.Label>Staff ID</Form.Label>
                          <Form.Control
                            disabled
                            type="text"
                            name="StaffID"
                            value={formData[index].StaffID}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="JobTitle">
                          <Form.Label>Job Title</Form.Label>
                          <Form.Control
                            disabled
                            type="text"
                            name="JobTitle"
                            value={formData[index].JobTitle}
                            onChange={(e) => handleInputChange(e, index)}
                            readOnly // Make it read-only to prevent user modification
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="Description">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            name="Description"
                            value={formData[index].Description}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="NoOfStars">
                          <Form.Label>Number of Stars</Form.Label>
                          <div>
                            {[1, 2, 3, 4, 5].map((stars) => (
                              <Button
                                key={stars}
                                variant={formData[index].NoOfStars >= stars ? "warning" : "light"}
                                onClick={() => handleStarClick(stars, index)}
                                className="mr-2"
                              >
                                ★
                              </Button>
                            ))}
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-right">
                      <br />
                      <Button style={{ backgroundColor: '#E6B31E',border: '1px solid #E6B31E'}} variant="primary" type="submit" className="mr-2">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StaffRatingForm;
