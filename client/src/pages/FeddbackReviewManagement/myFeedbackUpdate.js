import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Import useParams hook
import UpdateBGimage from '../../images/Feedback/updateFormBackground.png';
import { useNavigate } from 'react-router-dom';

const MyFeedbackUpdate = () => {
  const { feedbackId } = useParams(); // Get feedbackId from URL params
  const [formData, setFormData] = useState({
    FeedbackID: '',
    UserID: '',
    EventID: '',
    Content: '',
    NoOfStars: 0,
    Date: ''
  });

  const navigate = useNavigate(); // Initialize navigate hook


  useEffect(() => {
    const fetchFeedbackById = async () => {
      try {
        const response = await axios.get(`/api/feedback/feedback/${feedbackId}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedbackById();
  }, [feedbackId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStarClick = (star) => {
    setFormData({
      ...formData,
      NoOfStars: star,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/feedback/feedback/${feedbackId}`, formData); // Use PUT method for update
      alert('Feedback updated successfully!');
    } catch (error) {
      console.error('Error updating feedback:', error);
      alert('Error updating feedback. Please try again later.');
    }
  };

  const handleDiscard = () => {
    navigate(`/viewMyFeedback`);
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h1 className="mt-4 mb-4"><strong>Update Feedback</strong></h1>
      </div>

      <Container style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
        <div style={{ width: '50%' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFeedbackID">
              <Form.Control type="text" placeholder="Feedback ID" name="FeedbackID" value={formData.FeedbackID} onChange={handleChange} readOnly />
            </Form.Group>
            <br/>
            <Form.Group controlId="formUserID">
              <Form.Control type="text" placeholder="User ID" name="UserID" value={formData.UserID} onChange={handleChange} />
            </Form.Group>
            <br/>
            <Form.Group controlId="formEventID">
              <Form.Control type="text" placeholder="Event ID" name="EventID" value={formData.EventID} onChange={handleChange} />
            </Form.Group>
            <br/>
            <Form.Group controlId="formDate">
              <Form.Control type="date" name="Date" value={formData.Date} onChange={handleChange} />
            </Form.Group>
            <br/>
            <Form.Group controlId="formContent">
              <Form.Control as="textarea" rows={3} placeholder="Content" name="Content" value={formData.Content} onChange={handleChange} />
            </Form.Group>
            <br/>
            <Form.Group controlId="formNoOfStars">
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    variant={star <= formData.NoOfStars ? 'warning' : 'light'}
                    style={{ marginRight: '5px' }}
                  >
                    ★
                  </Button>
                ))}
              </div>
            </Form.Group>
            <br/>
            <Button variant="secondary" onClick={handleDiscard} style={{ borderRadius: '25px',marginLeft:'400px' }}>
              Discard
            </Button>
            <Button variant="primary" type="submit" style={{ borderRadius: '25px', backgroundColor: 'black', marginLeft: '10px' }}>
              Update Feedback
            </Button>
          </Form>
        </div>
        <div style={{ width: '50%' }}>
          <img src={UpdateBGimage} alt="Background" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Container>
  
    </div>
  );
};

export default MyFeedbackUpdate;
