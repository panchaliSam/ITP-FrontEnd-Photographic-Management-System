import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import User1 from '../../images/Feedback/user1.png';

const StarButton = React.memo(({ selected, onClick }) => (
  <Button
    variant={selected ? 'warning' : 'light'}
    onClick={onClick}
    style={{ marginRight: '5px', borderRadius: '50px' }}
  >
    ★
  </Button>
));

const MyFeedbackPage = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedbackByUserId = async () => {
      try {
        const response = await axios.get(`/api/feedback/feedback/my/${userId}`);
        setFeedbackList(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedbackByUserId();
  }, [userId]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const fetchUsername = async (userId) => {
    try {
      const response = await axios.get(`/api/feedback/feedback/username/${userId}`);
      return response.data.username;
    } catch (error) {
      console.error(`Error fetching username for user ID ${userId}:`, error);
      return ''; // Return an empty string if username fetching fails
    }
  };

  useEffect(() => {
    const fetchUsernamesForFeedback = async () => {
      const updatedFeedbackList = await Promise.all(feedbackList.map(async (feedback) => {
        const username = await fetchUsername(feedback.UserID);
        return { ...feedback, username };
      }));
      setFeedbackList(updatedFeedbackList);
    };

    fetchUsernamesForFeedback();
  }, [feedbackList]); // Re-fetch usernames whenever feedbackList changes

  const handleUpdateFeedback = (feedbackId) => {
    console.log('Updating feedback:', feedbackId);
    // Navigate to MyFeedbackUpdatePage with the relevant feedback ID
    navigate(`/updateFeedback/${feedbackId}`);
  };

  const handleDeleteFeedback = async (feedbackId) => {
    try {
      await axios.delete(`/api/feedback/feedback/${feedbackId}`);
      const response = await axios.get(`/api/feedback/feedback/my/${userId}`);
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4" style={{ textAlign: 'center' }}><strong>My Feedback</strong></h1>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="formUserId">
            <Form.Control type="text" placeholder="Enter User ID" value={userId} onChange={handleUserIdChange} />
          </Form.Group>
        </Col>
      </Row>
      {feedbackList.map((feedback) => (
        <Row key={feedback.FeedbackID} className="mb-4">
          <Col md={{ span: 6, offset: 3 }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <img src={User1} alt="User1" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '10px', objectFit: 'cover' }} />
              <Card style={{ width: '100%', position: 'relative', borderRadius: '25px', backgroundColor: '#ECFDFA' }}>
                <Card.Body>
                  <Card.Text style={{ fontSize: '14px' }}><b>Feedback ID: {feedback.FeedbackID}</b></Card.Text>
                  <Card.Title><strong>{feedback.username}</strong></Card.Title>
                  {/* Display Feedback ID */}
                  <Card.Text>{feedback.Content}</Card.Text>
                  <Card.Text style={{ position: 'absolute', bottom: '10px', right: '10px', marginRight: '20px' }}>{formatDate(feedback.Date)}</Card.Text>
                  <Card.Text>
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex}>
                        <StarButton
                          selected={starIndex < feedback.NoOfStars}

                        />
                        &nbsp;
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <Button variant="warning" onClick={() => handleUpdateFeedback(feedback.FeedbackID)} style={{ marginRight: '10px' }}>Update</Button>
              <Button variant="danger" onClick={() => handleDeleteFeedback(feedback.FeedbackID)}>Delete</Button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default MyFeedbackPage;
