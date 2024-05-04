import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Reservation() {
    const[reservations,setReservations] = useState([]);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [reservationId, setReservationId] = useState('');
    // const [userId, setUserId] = useState('');
    const [reservationDetails, setReservationDetails] = useState({});


    useEffect(() => {
        axios.get('/api/eventReservation/reservation')
        .then(result => setReservations(result.data))
        .catch(err => {
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Error response:', err.response.data);
            } else if (err.request) {
                // The request was made but no response was received
                console.log('No response received:', err.request);
            } else {
                // Something else happened while setting up the request
                console.log('Error setting up request:', err.message);
            }
        });
    }, []);

    useEffect(() => {
        if (reservationId) {
          fetchReservationDetails();
        }
      }, [reservationId]);

      const handleEdit = (reservationId, e) => {
        e.preventDefault();
        navigate(`/editReservation/${reservationId}`);
      };

    const handleDelete = (id) => {
        axios.delete(`/api/eventReservation/reservation/${id}`)
            .then(result => {
                console.log('Reservation deleted successfully:', result.data);
                setShowPopup(true); // Show a success message or handle the deletion confirmation
                // Optionally update the reservations list after deletion
                setReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== id));
            })
            .catch(err => {
                console.error('Error deleting reservation:', err);
                setError('Error deleting reservation');
            });
    };
    
    const fetchReservationDetails = async () => {
        try {
            const reservationResponse = await axios.get(`/api/eventReservation/reservation/reservationDetails/${reservationId}`);
            setReservationDetails(reservationResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleViewDetails = async (e, id) => {
        e.preventDefault();
        setReservationId(id);
        fetchReservationDetails();
    };

    return (
        <div className="allReservations">
            {error && <p className="error">{error}</p>}
            {showPopup && <p className="popup">Deleted successfully!</p>}
            <Link to = "/ReservationForm" className='btn btn-success'>Add Reservation +</Link>
            <br></br><br></br>
            <h5>User Details</h5>
            <table>
                <thead>
                    <tr>
                        <th>Reservation ID</th>
                        <th>Customer Name</th>
                        {/* <th>Date Of Birth</th> */}
                        <th>Address</th>
                        <th>Contact No 1</th>
                        <th>Contact No 2</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation._id}>
                            <td>{reservation.reservationId}</td>
                            <td>{reservation.customer_name}</td>
                            {/* <td>{reservation.dateOfBirth}</td> */}
                            <td>{reservation.address}</td>
                            <td>{reservation.contactNo1}</td>
                            <td>{reservation.contactNo2}</td>
                            <td>{reservation.email}</td>
                            <td className="actions">
                                <button className="view-button" onClick={(e) => handleViewDetails(e, reservation.reservationId)}>
                                    <Link to={`/reservation/${reservation.reservationId}`} className="button-link">View</Link>
                                </button>

                                <button className="edit-button" onClick={(e) => handleEdit(reservation.reservationId, e)}>
                                    <Link to={`/editReservationPage/${reservation.reservationId}`} className="button-link">Edit</Link>
                                </button>
                                <button className="delete-button" onClick={() => handleDelete(reservation._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br></br> <br></br>
            <h5>Event Details</h5>
            <table>
                <thead>
                    <tr>
                        <th>Reservation ID</th>
                        <th>Event Name</th>
                        <th>Event Type</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Start Time</th>
                        <th>Duration</th>
                        <th>Guest Count</th>
                        <th>Photographer</th>
                        <th>Special Request</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation._id}>
                            <td>{reservation.reservationId}</td>
                            <td>{reservation.eventName}</td>
                            <td>{reservation.eventType}</td>
                            <td>{reservation.eventDate}</td>
                            <td>{reservation.eventLocation}</td>
                            <td>{reservation.startTime}</td>
                            <td>{reservation.duration}</td>
                            <td>{reservation.guestCount}</td>
                            <td>{reservation.photographer}</td>
                            <td>{reservation.specialRequest}</td>
                            <td className="actions">
                                {/* <button className="view-button" onClick={(e) => handleViewDetails(e, reservation._id)}>
                                    <Link to={`/Reservation/${reservation._id}`} className="button-link">View</Link>
                                </button> */}
                                <button className="edit-button" onClick={(e) => handleEdit(reservation.reservationId, e)}>
                                    <Link to={`/editReservation/${reservation.reservationId}`} className="button-link">Edit</Link>
                                </button>
                                <button className="delete-button" onClick={() => handleDelete(reservation._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reservation