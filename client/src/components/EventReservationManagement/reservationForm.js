import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import background from '../../images/ReservationPage/background.png'
import { FiAlertCircle } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const ReservationForm = () => {
    // const [reservationId, setReservationId] = useState('');
    const [customer_name, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo1, setContactNo1] = useState('');
    const [contactNo2, setContactNo2] = useState('');
    const [email, setEmail] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [duration, setDuration] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    // const [dateOfBirth,setDateOfBirth] = useState('');
    const navigate = useNavigate()

    // State to store dropdown options
    const [eventTypes, setEventTypes] = useState([]);
    const [staffNames, setStaffNames] = useState([]);
    const [showAdditionalCharges, setShowAdditionalCharges] = useState(false);

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
                const response = await axios.get('/api/eventReservation/getEmpNames');
                setStaffNames(response.data);
            } catch (error) {
                console.error('Error fetching photographers names:', error);
            }
            };
            fetchEventTypes();
            fetchStaffNames();
        }, []);

        const handleContactNo1Change = (e) => {
            const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
            if (input.length <= 10) {
                setContactNo1(input);
            }
        }

        const handleContactNo2Change = (e) => {
            const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
            if (input.length <= 10) {
                setContactNo2(input);
            }
        }

        
    const handlePhotographerChange = (e) => {
        setPhotographer(e.target.value);
        setShowAdditionalCharges(!!e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation here
        if (!validateForm()) {
            return;
        }
        emailjs.sendForm('service_xdjolbn','template_r0f6f6l',e.target,'8L3Hr9GpDV5QssDZx')

        // if (parseInt(reservationId) <= 0) {
        //     alert('Reservation ID should be a positive number.');
        //     return;
        // }
        const reservation={
            // reservationId,
            customer_name,
            // dateOfBirth,
            address,
            contactNo1,
            contactNo2,
            email,
            eventType,
            eventName,
            eventLocation,
            eventDate,
            startTime,
            duration,
            guestCount,
            photographer,
            specialRequest
        }
        axios.post("/api/eventReservation/reservation/add", reservation)
        .then(()=>{
            alert("Reservation Added")
            navigate('/')
           
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Failed to add reservation. Please check the console for more details.");
        });
    };

    const validateForm = () => {
        // Perform your form validation logic here
        // For example, check if required fields are filled
        if (!customer_name || !address || !email || !eventType || !eventName || !eventLocation || !eventDate || !startTime || !duration || !guestCount) {
            alert("Please fill out all required fields.");
            return false;
        }
    
        return true;
    };
    
    return (
        <div className="reservation-container">
            <img src={background} className='background-image' alt='Background' />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Reservation Form</h1>
                <form onSubmit={handleSubmit}>
                    <h3>Customer Details</h3>
                    <div className="row mb-3" style={{fontSize: '18px'}} >
                        {/* <div className="col-sm-3">
                            <label htmlFor="reservationId" className="col-sm-5 col-form-label">Reservation Id:</label>
                            <input type="text" className="form-control" id="reservationId" name="reservationId" value={reservationId} onChange={(e) => setReservationId(e.target.value)} required/>
                        </div> */}

                        <div className="col-sm-10">
                            <label htmlFor="customer_name" className="col-sm-2 col-form-label">Customer Name:</label>
                            <input type="text" className="form-control" id="customer_name" name="customer_name" value={customer_name} onChange={(e) => setCustomerName(e.target.value)} required/>
                            <div className="invalid-feedback">Please enter a name</div>
                        </div>
                    </div>
                    
                    <div className="row mb-3" style={{fontSize: '18px'}} >
                        <div className="col-sm-10">
                            <label htmlFor="address" className="col-sm-2 col-form-label">Address:</label>
                            <input type="text" className="form-control" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                    </div>

                    <div className="row mb-3" style={{fontSize: '18px'}} >
                        <div className="col-sm-3">
                            <label htmlFor="contactNo1" className="col-form-label me-1">Contact No 1:</label>
                            <input type="tel" className="form-control" id="contactNo1" name="contactNo1" value={contactNo1} onChange={handleContactNo1Change} 
                                maxLength={10}
                                minLength={10}
                                pattern="[0-9]{10}"
                                title="Please enter a 10-digit phone number." required/>
                        </div>
                        
                        <div className="col-sm-3">
                            <label htmlFor="contactNo2" className="col-form-label me-1">Contact No 2:</label>
                            <input type="tel" className="form-control" id="contactNo2" name="contactNo2" value={contactNo2} onChange={handleContactNo2Change}
                            maxLength={10}
                            minLength={10}
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number." required/>
                        </div>
        
                        <div className="col-sm-4">
                            <label htmlFor="email" className="col-form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        
                    </div>
                    <br></br>
                    <h3>Event details</h3>
                    <div className="row mb-3" style={{fontSize: '18px'}} >
                        <div className="col-sm-2">
                            <label htmlFor="eventType" className="col-form-label me-1">Type:</label>
                            <div className="input-group">
                            <select className="form-select" id="eventType" name="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)} required>
                                <option value="">Select Event type</option>
                                    {eventTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                                ))}

                            </select>
                            <span className="input-group-text">
                                <i className="bi bi-caret-down-fill"></i> {/* Replace this with your preferred arrow icon */}
                            </span>
                        </div>

                        </div>

                        <div className="col-sm-3">
                            <label htmlFor="eventName" className="col-form-label me-1">Event Name:</label>
                            <input type="text" className="form-control" id="eventName" name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                        </div>

                        <div className="col-sm-3">
                            <label htmlFor="eventLocation" className="col-form-label me-1">Location:</label>
                            <input type="text" className="form-control" id="eventLocation" name="eventLocation" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} required/>
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="eventDate" className="col-form-label me-1">Event Date:</label>
                            <input type="date" className="form-control" id="eventDate" name="eventDate" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="row mb-3" style={{fontSize: '18px'}} >
                        <div className="col-sm-3">
                            <label htmlFor="startTime" className="col-form-label me-1">Start Time:</label>
                            <input type="time" className="form-control" id="startTime" name="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} required/>
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="duration" className="col-form-label me-1">Duration(no of hours):</label>
                            <input type="text" className="form-control" id="duration" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="guestCount" className="col-form-label me-1">Guest Count:</label>
                            <input type="text" className="form-control" id="guestCount" name="guestCount" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} required/>
                        </div>
                        <div className="col-sm-3">
                            <label htmlFor="photographer" className="col-form-label me-1">Photographer:</label>
                            <div className="input-group">
                                <select className="form-select" id="photographer" name="photographer" value={photographer} onChange={handlePhotographerChange}>
                                    <option value="">Select a photographer</option>
                                        {staffNames.map((name, index) => (
                                    <option key={index} value={name}>{name}</option>
                                ))}

                                </select>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                {showAdditionalCharges && (
                                    <div style={{ color: 'black', fontSize: '14px',fontWeight:'bold' }}>
                                        <FiAlertCircle style={{ marginRight: '4px',color:'red'}} />Additional Charges will apply
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3" style={{fontSize: '18px'}} >
                        <label htmlFor="specialRequest" className="col-sm-2 col-form-label">Special Request:</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text"  className="form-control" placeholder='Message..' id="specialRequest" name="specialRequest" value={specialRequest} style={{height: '80px'}} onChange={(e) => setSpecialRequest(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-8">
                            <button type="submit" className="btn btn-dark">Submit Reservation</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservationForm;
