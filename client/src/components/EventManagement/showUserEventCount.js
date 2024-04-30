import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const UserEventCounts = () => {
    const [userCounts, setUserCounts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserEventCounts = async () => {
            try {
                const response = await axios.get('/api/allDetails/getUserEventCount');
                setUserCounts(response.data);
            } catch (error) {
                console.error('Error fetching user event counts with username:', error);
                setError('Error fetching user event counts with username');
            }
        };

        fetchUserEventCounts();
    }, []);

    const handleAddPromotion = (userId) => {
        // Handle the logic for adding promotion for the user with userId
        console.log(`Adding promotion for user with ID ${userId}`);
    };

    return (
        <div style={{ marginLeft: '200px', marginRight: '200px' }}>
            {error && <p className="error">{error}</p>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><center>User ID</center></th>
                        <th><center>Username</center></th>
                        <th><center>Event Count</center></th>
                        <th><center>Action</center></th>
                    </tr>
                </thead>
                <tbody>
                    {userCounts.map(({ userId, username, eventCount }) => (
                        <tr key={userId}>
                            <td>{userId}</td>
                            <td>{username}</td>
                            <td>{eventCount}</td>
                            <td>
                                <center>
                                <Button variant="primary" onClick={() => handleAddPromotion(userId)}>Add Promotion</Button>
                                </center>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserEventCounts;
