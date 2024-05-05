import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScheduleTable = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('/api/calendar/getAllSchedules');
                const sortedSchedules = response.data.sort((a, b) => new Date(a.ScheduleDate) - new Date(b.ScheduleDate));
                setSchedules(sortedSchedules);
            } catch (error) {
                console.error('Error fetching schedules:', error);
            }
        };

        fetchSchedules();
    }, []);

    const handleDelete = async (ScheduleId) => {
        try {
            await axios.delete(`/api/calendar/schedule/${ScheduleId}`);
            setSchedules(schedules.filter(schedule => schedule.ScheduleId !== ScheduleId));
        } catch (error) {
            console.error('Error deleting schedule:', error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                {schedules.map(schedule => (
                    <div key={schedule._id} className="col-md-4">
                        {schedule.ScheduleId && (
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{new Date(schedule.ScheduleDate).toDateString()}</h5>
                                            <p className="card-text">Event ID: {schedule.EventId}</p>
                                            <p className="card-text">User ID: {schedule.UserID}</p>
                                            <p className="card-text">Staff ID: {schedule.StaffID}</p>
                                            <p className="card-text">Photographer: {schedule.Photographer}</p>
                                            <p className="card-text">Special Request: {schedule.SpecialRequest}</p>
                                            <p className="card-text">Team Leader: {schedule.TeamLeader}</p>
                                            <p className="card-text">Team Members:</p>
                                            <ul className="list-group">
                                                {schedule.TeamMembers.map((member, index) => (
                                                    <li key={index} className="list-group-item">{member}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                                    <div>
                                        <Link to={`/adminLogin/adminDashboard/schedules/viewSchedule/${schedule.ScheduleId}`} className="btn btn-primary">Edit</Link>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(schedule.ScheduleId)} className="btn btn-danger ml-2">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScheduleTable;
