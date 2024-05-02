import React, { useState,useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";


  const ReservationDetails = () => {
    const { reservationId } = useParams(); // Get eventId from URL params
    const [reservationData, setReservationData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReservationDetails = async () => {
            try {
                const reservationResponse = await axios.get(`/api/eventReservation/reservation/reservationDetails/${reservationId}`);
                setReservationData(reservationResponse.data);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data: ', error);
            }
        };

        if (reservationId) {
            fetchReservationDetails();
        }
    }, [reservationId]);


    const ComponentRef = useRef()
    const handlePrint = useReactToPrint({
      content : () => ComponentRef.current,
      DocumentTitle : "Reservation Report",
      onafterprint : () =>alert("Reservation report successfully downloaded!")
    })
  
    // if (!reservationData) {
    //     return <div>Loading...</div>;
    // }

  return (
    <div className="reservationDetails">
      <h2>Reservation Details</h2>
      <div className="reservationCard" ref={ComponentRef}>
        {reservationData && (
          <>
            <p>Reservation Id: {reservationData.reservationId}</p>
            <p>Customer Name: {reservationData.customer_name}</p>
            {/* <p>Date Of Birth: {reservationData.dateOfBirth}</p> */}
            <p>Address: {reservationData.address}</p>
            <p>Contact No 1: {reservationData.contactNo1}</p> 
            <p>Contact No 2: {reservationData.contactNo2}</p>
            <p>Email: {reservationData.email}</p>
            <p>Event Name: {reservationData.eventName}</p>
            <p>Event Type: {reservationData.eventType}</p>
            <p>Date: {reservationData.eventDate}</p>
            <p>Location: {reservationData.eventLocation}</p>
            <p>Start Time: {reservationData.startTime}</p>
            <p>Duration: {reservationData.duration}</p>
            <p>Guest Count: {reservationData.guestCount}</p>
            <p>Photographer: {reservationData.photographer}</p>
            <p>Special Request: {reservationData.specialRequest}</p>
          </>
        )}
      </div><br></br>
      <button onClick={handlePrint} style={{ marginRight: '25px'}}>Download Report</button>
      <button className="Schedule-btn">Schedule</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ReservationDetails;
