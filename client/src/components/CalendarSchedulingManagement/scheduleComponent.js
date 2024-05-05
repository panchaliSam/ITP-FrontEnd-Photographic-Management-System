import React, { useState, useEffect } from 'react';
import {  Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ReservationTable = () => {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Using useNavigate hook for navigation

    useEffect(() => {
        async function fetchReservations() {
            try {
                const response = await fetch('/api/calendar/reservation');
                if (response.ok) {
                    const data = await response.json();
                    setReservations(data);
                    setError('');
                } else {
                    const errorMessage = await response.text();
                    setError(errorMessage);
                    setReservations([]);
                }
            } catch (error) {
                console.error('Error:', error);
                setError('Internal Server Error');
                setReservations([]);
            }
        }

        fetchReservations();
    }, []);

    const handleScheduleClick = (reservationId) => {
        navigate(`/adminLogin/adminDashboard/schedules/${reservationId}`);
    };

    const handleDeleteClick = (reservationId) => {
        // Implement logic for handling delete action
        console.log('Delete clicked for reservation ID:', reservationId);
    };

    return (
        <div>
            <h2>Schedule Details</h2>
            {error && <p>{error}</p>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Customer Name</th>
                        <th>Event Name</th>
                        <th>Event Type</th>
                        <th>Event Location</th>
                        <th>Event Date</th>
                        <th>Start Time</th>
                        <th>Duration</th>
                        <th>Photographer</th>
                        <th>Special Request</th>
                        <th>Action</th> {/* New column for action buttons */}
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation, index) => (
                        <tr key={index}>
                            <td>{reservation.userId}</td>
                            <td>{reservation.customer_name}</td>
                            <td>{reservation.eventName}</td>
                            <td>{reservation.eventType}</td>
                            <td>{reservation.eventLocation}</td>
                            <td>{reservation.eventDate}</td>
                            <td>{reservation.startTime}</td>
                            <td>{reservation.duration}</td>
                            <td>{reservation.photographer}</td>
                            <td>{reservation.specialRequest}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleScheduleClick(reservation.reservationId)}>Schedule</Button>
                                <Button variant="danger" onClick={() => handleDeleteClick(reservation.reservationId)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ReservationTable;
