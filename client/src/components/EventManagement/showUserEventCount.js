import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const UserEventCounts = () => {
    const [userCounts, setUserCounts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserEventCounts = async () => {
            try {
                const response = await axios.get('/api/allDetails/getUserEventCount');
                setUserCounts(response.data);
            } catch (error) {
                console.error('Error fetching user event counts:', error);
                setError('Error fetching user event counts');
            }
        };

        fetchUserEventCounts();
    }, []);

    return (
        <div>
            {error && <p className="error">{error}</p>}
            <h2>User Event Counts</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Event Count</th>
                    </tr>
                </thead>
                <tbody>
                    {userCounts.map(({ userId, eventCount }) => (
                        <tr key={userId}>
                            <td>{userId}</td>
                            <td>{eventCount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserEventCounts;
