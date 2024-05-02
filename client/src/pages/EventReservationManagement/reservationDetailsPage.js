import React from 'react';
import { useParams } from 'react-router-dom';
import ReservationInfo from '../../components/EventReservationManagement/reservationDetails';

const ReservationDetails = () => {
//   Extracting params from URL
  const { reservationId } = useParams();

  return (
    <div>
      <h1><center>Reservation Details Page</center></h1>
      <br></br><br></br>
      <ReservationInfo reservationId={reservationId} />
    </div>
  );
};

export default ReservationDetails;