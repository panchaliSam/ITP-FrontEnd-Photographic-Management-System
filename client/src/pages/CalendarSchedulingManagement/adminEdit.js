import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateScheduleForm from '../../components/CalendarSchedulingManagement/adminEdit';

const UpdateSchedulePage = () => {
    const { ScheduleId } = useParams();

    return (
        <div>
            <div className="card mb-3" style={{ backgroundColor: '#E6B31E', color: '#343434' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">Update Schedule</h2>
                </div>
            </div>
            <UpdateScheduleForm scheduleId={ScheduleId} />
        </div>
    );
};

export default UpdateSchedulePage;
