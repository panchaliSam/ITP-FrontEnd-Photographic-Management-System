import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import FeedbackBGimage from '../../images/Feedback/formBackground.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const FeedbackSubmissionPage = () => {
  const [formData, setFormData] = useState({
    // FeedbackID: '',
    UserID: '',
    EventID: '',
    Content: '',
    NoOfStars: 0,
    Date: '' // Added Date field
  });
  const navigate = useNavigate(); // Initialize navigate hook

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

    emailjs.sendForm('service_6xf4jms','template_rca6yn1',e.target,'dqDxpQyAtMdaDC66f')


    try {
      // Send data to the server
      await axios.post(`/api/feedback/feedback/add`, formData);
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again later.');
    }
  };

  const handleDiscard = () => {
    // Clear form data when discard button is clicked
    setFormData({
    //   FeedbackID: '',
      UserID: '',
      EventID: '',
      Content: '',
      NoOfStars: 0,
      Date: '' // Reset Date field
    });
  };

  const handleViewFeedback = () => {
    navigate(`/viewMyFeedback`);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 className="mt-4 mb-4"><strong>FEEDBACK</strong></h1>
      </div>
      <br/>
      <Button variant="secondary" onClick={handleViewFeedback} style={{ borderRadius: '10px', marginLeft:'1300px', backgroundColor:'#BD1F32'}}>
        My Feedback
      </Button>
      <br/>
      <br/>
      <Container style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
        <h5 style={{color:'#0C073D'}}>Thank you for choosing VIDURA DE SILVA PHOTOGRAPHY! Help us strive for excellence by sharing your thoughts with us.</h5>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '50%' }}>
            <br/>
            <br/>
            <Form onSubmit={handleSubmit} style={{marginLeft:'90px'}}>
              {/* <Form.Group controlId="formFeedbackID">
                <Form.Control type="text" placeholder="Enter Feedback ID" name="FeedbackID" value={formData.FeedbackID} onChange={handleChange} style={{ width: '200px' }} />
              </Form.Group> */}
              <br/>
              <Form.Group controlId="formUserID">
                <Form.Control type="text" placeholder="Enter User ID" name="UserID" value={formData.UserID} onChange={handleChange} style={{ width: '200px' }} />
              </Form.Group>
              <br/>
              <Form.Group controlId="formEventID">
                <Form.Control type="text" placeholder="Enter Event ID" name="EventID" value={formData.EventID} onChange={handleChange} style={{ width: '200px' }} />
              </Form.Group>
              <br/>
              <Form.Group controlId="formDate"> {/* Date field */}
                <br/>
                <Form.Control type="date" placeholder="Select Date" name="Date" value={formData.Date} onChange={handleChange} />
              </Form.Group>
              <br/>
              <Form.Group controlId="formContent">
                <Form.Control as="textarea" rows={3} placeholder="Enter Content" name="Content" value={formData.Content} onChange={handleChange} style={{ width: '550px' }} />
              </Form.Group>
              <br/>
              <Form.Group controlId="formNoOfStars">
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      onClick={() => handleStarClick(star)}
                      variant={star <= formData.NoOfStars ? 'warning' : 'light'}
                      style={{ marginRight: '5px' }} // Add margin-right to create space between star buttons
                    >
                      ★
                    </Button>
                  ))}
                </div>
              </Form.Group>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div style={{ display: 'flex',marginLeft:'310px' }}>
                <Button variant="secondary" onClick={handleDiscard} style={{ borderRadius: '25px' }}>
                  Discard
                </Button>
                <Button variant="primary" type="submit" style={{ borderRadius: '25px', backgroundColor: 'black', marginLeft: '10px' }}>
                  Submit Feedback
                </Button>
              </div>
            </Form>
          </div>
          <img src={FeedbackBGimage} alt="Vector Image" style={{ width: '50%', borderRadius: '5px' }} />
        </div>
      </Container>
    </div>
  );
};

export default FeedbackSubmissionPage;