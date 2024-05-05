import React from 'react';
import ScheduleTable from '../../components/CalendarSchedulingManagement/adminViewScedule';

const SchedulePage = () => {
    return (
        <div>
            <div className="card mb-3" style={{ backgroundColor: '#E6B31E', color: '#343434' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">Schedule Page</h2>
                </div>
            </div>
            <ScheduleTable />
        </div>
    );
};

export default SchedulePage;
