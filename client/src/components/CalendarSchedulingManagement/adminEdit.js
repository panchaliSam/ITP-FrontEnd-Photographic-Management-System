import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateScheduleForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { ScheduleId } = useParams();
    const [staffNames, setStaffNames] = useState([]);
    const [scheduleData, setScheduleData] = useState({
        TeamMembers: [], // Provide a default value as an empty array
    });
    const [formData, setFormData] = useState({
        TeamMembers: [],
        TeamLeader: '' 
    });

    useEffect(() => {
        if(ScheduleId){
            axios.get(`/api/calendar/schedule/ScheduleDetails/${ScheduleId}`)
            .then(result => setScheduleData(result.data))
            .catch(err => {if (err.response) {
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
    }, [ScheduleId]);


    const staffIds = ['S001', 'S002', 'S003', 'S004', 'S005', 'S006', 'S007', 'S008']; // Array of staff IDs
    useEffect(() => {
        const fetchStaffNames = async () => {
          try {
            const response = await axios.get('/api/calendar/getEmpNames');
            setStaffNames(response.data);
          } catch (error) {
            console.error('Error fetching staff names:', error);
          }
        };
    
        fetchStaffNames();
    }, []);

    const handleChange = (e) => {
        setScheduleData({
            ...scheduleData,
            [e.target.name]: e.target.value 
        });

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (e.target.name === "TeamLeader") {
            setFormData({
                ...formData,
                TeamLeader: e.target.value
            });
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setScheduleData(prevData => {
            let updatedTeamMembers;
            if (checked) {
                updatedTeamMembers = new Set([...prevData.TeamMembers, name]); // Add the new member
            } else {
                updatedTeamMembers = new Set(prevData.TeamMembers); // Copy the existing members
                updatedTeamMembers.delete(name); // Remove the member
            }
            return { ...prevData, TeamMembers: [...updatedTeamMembers] }; // Convert the set back to an array
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/calendar/schedule/${ScheduleId}`, scheduleData)
            .then(result => {
                console.log('Schedule updated successfully:', result.data);
                setShowPopup(true);
                navigate('/adminLogin/adminDashboard/schedules/viewSchedule');
            })
            .catch(err => {
                console.error('Error updating schedule:', err);
                setError('Error updating schedule');
            });
    };

    return (
        <form className="update-schedule-form" onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            {showPopup && <p className="popup">Updated successfully!</p>}
            <div className="form-group">
                <label>Event ID:</label>
                <input type="text" name="EventId" value={scheduleData.EventId || ''} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>User ID:</label>
                <input type="text" name="UserID" value={scheduleData.UserID || ''} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Staff ID:</label>
                <select name="StaffID" value={scheduleData.StaffID || ''} onChange={handleChange} className="form-control">
                    <option value="">Select Staff ID</option>
                    {staffIds.map((id) => (
                        <option key={id} value={id}>{id}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Photographer:</label>
                <input type="text" name="Photographer" value={scheduleData.Photographer || ''} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Special Request:</label>
                <input type="text" name="SpecialRequest" value={scheduleData.SpecialRequest || ''} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Team Leader:</label>
                <select name="TeamLeader" value={formData.TeamLeader || ''} onChange={handleChange} className="form-control">
                    <option value="">Select Team Leader</option>
                    {staffNames.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Team Members:</label>
                {staffNames.map((name, index) => (
                    <div key={index} className="form-check">
                        <input
                            type="checkbox"
                            name={name} // Name attribute should correspond to the value
                            checked={scheduleData.TeamMembers && scheduleData.TeamMembers.includes(name)} // Check if the name is in TeamMembers array
                            onChange={handleCheckboxChange}
                            className="form-check-input"
                        />
                        <label className="form-check-label">{name}</label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label>Schedule Date:</label>
                <input type="date" name="ScheduleDate" value={scheduleData.ScheduleDate || ''} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark">Update Schedule</button>
        </form>
    );
};

export default UpdateScheduleForm;
