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
        <div className="customerDetails" style={{ marginLeft: '300px' }}>
            <h2><center>Customer Details</center></h2><br></br>
            <div className="customerInfoCard">
                <p>Customer Name: {customerData.userName}</p>
                <p>Event Name: {customerData.eventName}</p>
                <p>Event Type: {customerData.eventType}</p>
                <p>Event Location: {customerData.eventLocation}</p>
                <p>Event Date: {customerData.eventDate}</p>
                <p>Start Time: {customerData.startTime}</p>
                {/* <p>Photographer: {customerData.photographer}</p> */}
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default CustomerDetails;
