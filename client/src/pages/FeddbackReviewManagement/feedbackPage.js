import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import User1 from '../../images/Feedback/user.png';

const StarButton = React.memo(({ selected, onClick }) => (
  <Button
    variant={selected ? 'warning' : 'light'}
    onClick={onClick}
    style={{ marginRight: '5px', borderRadius: '50px' }}
  >
    ★
  </Button>
));

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('/api/feedback/feedback/all');
        // Sort feedbacks by date in descending order
        const sortedFeedbacks = response.data.sort((a, b) => new Date(b.Date) - new Date(a.Date));
        setFeedbackList(sortedFeedbacks);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  useEffect(() => {
    const fetchUsername = async (userID) => {
      try {
        const response = await axios.get(`/api/feedback/feedback/username/${userID}`);
        return response.data.username;
      } catch (error) {
        console.error(`Error fetching username for user ID ${userID}:`, error);
        return ''; // Return an empty string if username fetching fails
      }
    };

    // Fetch username for each feedback item
    const fetchUsernamesForFeedback = async () => {
      const updatedFeedbackList = await Promise.all(feedbackList.map(async (feedback) => {
        const username = await fetchUsername(feedback.UserID);
        return { ...feedback, username };
      }));
      setFeedbackList(updatedFeedbackList);
    };

    fetchUsernamesForFeedback();
  }, [feedbackList]); // Re-fetch usernames whenever feedbackList changes

  // Function to format date as desired
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  // Function to handle star click
  const handleStarClick = (feedbackIndex, starIndex) => {
    const updatedFeedbackList = [...feedbackList];
    updatedFeedbackList[feedbackIndex].NoOfStars = starIndex + 1;
    setFeedbackList(updatedFeedbackList);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4" style={{ textAlign: 'center' }}><strong>All Feedback</strong></h1>
      <h5 className="mb-4" style={{ textAlign: 'center', color: '#0C073D' }}>Discover what our customers have to say.</h5>
      <br />
      <br />
      <Row className="flex-column">
        {feedbackList.map((feedback, index) => (
          <div key={feedback._id} style={{ display: 'flex', marginBottom: '20px' }}>
            <img src={User1} alt="User1" style={{ width: '120px', height: '120px', borderRadius: '50%', marginRight: '10px', objectFit: 'cover' }} />
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card style={{ width: '1000px', position: 'relative', marginLeft: '20px', borderRadius: '25px', backgroundColor: '#343434',color:'white' }}>
                <Card.Body>
                  <Card.Title><strong>{feedback.username}</strong></Card.Title>
                  <Card.Text>{feedback.Content}</Card.Text>
                  <Card.Text style={{ position: 'absolute', bottom: '10px', right: '10px', marginRight: '20px' }}>
                    {formatDate(feedback.Date)}
                  </Card.Text>
                  <Card.Text>
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex}>
                        <StarButton
                          selected={starIndex < feedback.NoOfStars}
                          onClick={() => handleStarClick(index, starIndex)}
                        />
                        &nbsp;
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default FeedbackList;
