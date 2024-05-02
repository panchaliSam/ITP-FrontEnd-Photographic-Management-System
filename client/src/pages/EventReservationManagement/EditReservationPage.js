import React from 'react';
import { useParams } from 'react-router-dom';
import EditReservation from '../../components/EventReservationManagement/editReservation';

const EditReservationDetails = () => {
//   Extracting params from URL
  const { reservationId } = useParams();

  return (
    <div>
      <h1><center>Edit Reservation Details Page</center></h1>
      <br></br><br></br>
      <EditReservation reservationId={reservationId} />
    </div>
  );
};

export default EditReservationDetails;