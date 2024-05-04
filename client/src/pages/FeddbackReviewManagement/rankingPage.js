import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Dropdown, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const RankingPage = () => {
  const [rankings, setRankings] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchRole, setSearchRole] = useState('');

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const avgRatingResponse = await axios.get(`/api/staffRating/averageRatings`);
        const avgRatings = avgRatingResponse.data;

        // Fetch staff details for each staff ID
        const staffDetailsPromises = avgRatings.map(async (rating) => {
          const staffResponse = await axios.get(`/api/staffRating/staffRating/staff/${rating.StaffID}`);
          const staffDetails = staffResponse.data;
          return { ...rating, name: staffDetails.empName, role: staffDetails.role };
        });

        // Resolve all promises and set rankings with staff details
        const rankingsWithDetails = await Promise.all(staffDetailsPromises);
        setRankings(rankingsWithDetails);
      } catch (error) {
        console.error('Error fetching rankings:', error);
      }
    };

    fetchRankings();
  }, []);

  const handleNameSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleRoleSearchChange = (role) => {
    setSearchRole(role);
  };

  // Function to render stars based on average rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Button key={i} variant="warning" className="p-0 m-1" style={{ width: '24px', height: '24px', lineHeight: '1', fontSize: '12px' }}>&#9733;</Button>);
      } else {
        stars.push(<Button key={i} variant="light" className="p-0 m-1" style={{ width: '24px', height: '24px', lineHeight: '1', fontSize: '12px' }}>&#9733;</Button>);
      }
    }
    return stars;
  };

  // Function to filter rankings based on search criteria
  const filteredRankings = rankings.filter((ranking) => {
    const nameMatch = ranking.name.toLowerCase().includes(searchName.toLowerCase());
    const roleMatch = searchRole === '' || ranking.role === searchRole;
    return nameMatch && roleMatch;
  });

  return (
    <div className="container">
        <h1 className="mt-4 mb-4" style={{textAlign:'center', }}><strong>Stars behind the service</strong></h1>
   
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
        <Form.Group controlId="searchByRole" className="mb-4 d-flex align-items-center mr-3" style={{ width: '100px', marginLeft:'500px' }}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {searchRole || 'Select Role'}
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
        
      </div>
      <div>
        {filteredRankings.map((ranking, index) => (
          <Card key={index} className="mb-4" style={{marginLeft:'10px', width:'400px'}}>
            <Card.Body>
              <Card.Title>{ranking.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ranking.role}</Card.Subtitle>
              <Card.Text>
              
                {renderStars(ranking.AverageRating)}
                  <div style={{ backgroundColor: '#DA7F7F', borderRadius: '30px', textAlign: 'center', color: 'white', padding: '4px 8px', marginTop:'8px',marginBottom: '8px', width:'55px' }}>
               {ranking.AverageRating.toFixed(2)}
               </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RankingPage;
