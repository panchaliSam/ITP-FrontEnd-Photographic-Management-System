import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerInfo from '../../components/EventManagement/userEventDetails'; 

const UserEventDetails = () => {
    // Extracting params from URL
    const { eventId } = useParams();

    return (
        <div>
            <h1><center>Event-User Details Page</center></h1>
            <CustomerInfo
                eventId={eventId}
            />
        </div>
    );
};

export default UserEventDetails;
