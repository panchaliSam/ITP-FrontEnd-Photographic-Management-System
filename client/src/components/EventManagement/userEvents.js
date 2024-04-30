import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
    const { eventId } = useParams(); // Get eventId from URL params
    const [customerData, setCustomerData] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCustomerDetails = async () => {
            try {
                const customerResponse = await axios.get(`/api/details/userEventDetails/${eventId}`);
                setCustomerData(customerResponse.data);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data: ', error);
            }
        };

        if (eventId) {
            fetchCustomerDetails();
        }
    }, [eventId]);

    return (
        <div className="customerDetails">
            <h2>Event Details</h2>
            <div className="customerInfoCard">
                <p>Event Name: {customerData.eventName}</p>
                <p>Event Type: {customerData.eventType}</p>
                <p>Event Location: {customerData.eventLocation}</p>
                <p>Event Date: {customerData.eventDate}</p>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default CustomerDetails;
