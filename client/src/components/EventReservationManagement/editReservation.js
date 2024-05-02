import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import background from '../../images/ReservationPage/background.png'
import { FiAlertCircle } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';

function EditReservation() {
  const [reservation, setReservation] = useState({});
  const [error, setError] = useState('');
  const [eventTypes, setEventTypes] = useState([]);
  const [staffNames, setStaffNames] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { reservationId} = useParams();

  // Fetch event types, and staff names on component mount
  useEffect(() => {
    const fetchEventTypes = async () => {
    try {
        // Event types
        const types = ['Wedding', 'Events', 'New Born', 'Couples', 'Graduation'];
        setEventTypes(types);
    } catch (error) {
        console.error('Error fetching event types:', error);
    }
    };

    const fetchStaffNames = async () => {
        try {
          const response = await axios.get(`/api/eventReservation/getEmpNames`);
          setStaffNames(response.data);
        } catch (error) {
          console.error('Error fetching photographers names:', error);
        }
      };
        fetchEventTypes();
        fetchStaffNames();
    }, []);

  useEffect(() => {
    if (reservationId) {
      axios.get(`/api/eventReservation/reservation/reservationDetails/${reservationId}`)
        .then(result => setReservation(result.data))
        .catch(err => {
          if (err.response) {
            console.log('Error response:', err.response.data);
            if (err.response.data.error) {
              setError(err.response.data.error);
            }
          } else if (err.request) {
            console.log('No response received:', err.request);
          } else {
            console.log('Error setting up request:', err.message);
          }
        });
    }
  }, [reservationId]);

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    });
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`/api/eventReservation/reservation/${reservationId}`, reservation)
      .then(result => {
        console.log('Reservation updated successfully:', result.data);
        setShowPopup(true);
        navigate('/manageReservations');
      })
      .catch(err => {
        console.error('Error updating reservation:', err);
        setError('Error updating reservation');
      });
  }

  return (
    <div className="reservation-container">
        {error && <p className="error">{error}</p>}
        {showPopup && <p className="popup">Updated successfully!</p>}
        <img src={background} className='background-image' alt='Background' />
        <div className="container mt-5">
            <h1 className="text-center mb-4">Edit Reservation</h1>
            <form onSubmit={handleUpdate}>
                <h3>Customer Details</h3>
                <div className="row mb-3" style={{fontSize: '18px'}} >
                        <div className="col-sm-3">
                            <label htmlFor="reservationId" className="col-sm-5 col-form-label">Reservation Id:</label>
                            <input type="text" className="form-control" id="reservationId" disabled name="reservationId" value={reservation.reservationId || ''} onChange={handleChange} />
                        </div>
                    <div className="col-sm-10">
                        <label htmlFor="customer_name" className="col-sm-2 col-form-label">Customer Name:</label>
                        <input type="text" className="form-control" id="customer_name" name="customer_name" value={reservation.customer_name || ''} onChange={handleChange} />
                    </div>
                </div>
                
                <div className="row mb-3" style={{fontSize: '18px'}} >
                    <div className="col-sm-10">
                        <label htmlFor="address" className="col-sm-2 col-form-label">Address:</label>
                        <input type="text" className="form-control" id="address" name="address" value={reservation.address || ''}  onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3" style={{fontSize: '18px'}} >
                    <div className="col-sm-3">
                        <label htmlFor="contactNo1" className="col-form-label me-1">Contact No 1:</label>
                        <input type="text" className="form-control" id="contactNo1" name="contactNo1" value={reservation.contactNo1 || ''} onChange={handleChange} 
                        maxLength={10}
                        minLength={10}
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number."/>
                    </div>
                    
                    <div className="col-sm-3">
                        <label htmlFor="contactNo2" className="col-form-label me-1">Contact No 2:</label>
                        <input type="text" className="form-control" id="contactNo2" name="contactNo2" value={reservation.contactNo2 || ''} onChange={handleChange} 
                        maxLength={10}
                        minLength={10}
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number."/>
                    </div>
    
                    <div className="col-sm-4">
                        <label htmlFor="email" className="col-form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={reservation.email || ''} onChange={handleChange} />
                    </div>
                    
                </div>
                <br></br>
                <h3>Event details</h3>
                <div className="row mb-3" style={{fontSize: '18px'}} >
                    <div className="col-sm-2">
                        <label htmlFor="eventType" className="col-form-label me-1">Type:</label>
                        <select type="text" className="form-control" id="eventType" name="eventType" value={reservation.eventType || ''} onChange={handleChange} >
                            <option value="">Select Event type </option>
                            {eventTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="eventName" className="col-form-label me-1">Event Name:</label>
                        <input type="text" className="form-control" id="eventName" name="eventName" value={reservation.eventName || ''} onChange={handleChange} />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="eventLocation" className="col-form-label me-1">Location:</label>
                        <input type="text" className="form-control" id="eventLocation" name="eventLocation" value={reservation.eventLocation || ''} onChange={handleChange} />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="eventDate" className="col-form-label me-1">Event Date:</label>
                        <input type="date" className="form-control" id="eventDate" name="eventDate" value={reservation.eventDate || ''} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3" style={{fontSize: '18px'}} >
                    <div className="col-sm-3">
                        <label htmlFor="startTime" className="col-form-label me-1">Start Time:</label>
                        <input type="time" className="form-control" id="startTime" name="startTime" value={reservation.startTime || ''} onChange={handleChange} />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="duration" className="col-form-label me-1">Duration(no of hours):</label>
                        <input type="text" className="form-control" id="duration" name="duration" value={reservation.duration || ''} onChange={handleChange} />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="guestCount" className="col-form-label me-1">Guest Count:</label>
                        <input type="text" className="form-control" id="guestCount" name="guestCount" value={reservation.guestCount || ''} onChange={handleChange} />
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="photographer" className="col-form-label me-1">Photographer:</label>
                        <select className="form-control" id="photographer" name="photographer" value={reservation.photographer || ''} onChange={handleChange}>
                            <option value="">Select a photographer</option>
                            {staffNames.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-1 d-flex align-items-center">
                        <FiAlertCircle style={{ marginLeft: '4px',color:'red',width:'20px',height:'20px'}} title="Additional Charges will apply" />
                    </div>
                </div>

                <div className="row mb-3" style={{fontSize: '18px'}} >
                    <label htmlFor="specialRequest" className="col-sm-2 col-form-label">Special Request:</label>
                </div>
                <div className="col-sm-10">
                    <input type="text"  className="form-control" placeholder='Message..' id="specialRequest" name="specialRequest" value={reservation.specialRequest || ''} style={{height: '80px'}} onChange={handleChange} />
                </div>
                <br></br>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-8">
                        <button type="submit" className="btn btn-dark">Update Reservation</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
}

export default EditReservation;

