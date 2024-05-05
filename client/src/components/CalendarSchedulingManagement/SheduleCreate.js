import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const AddScheduleForm = () => {
  const [staffNames, setStaffNames] = useState([]);
  const [formData, setFormData] = useState({
    ScheduleId: '',
    EventId: '',
    UserID: '',
    StaffID: '',
    Photographer: '',
    SpecialRequest: '',
    TeamLeader: '',
    TeamMembers: [],
    ScheduleDate: '',
  });

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
    const value = e.target.name === 'TeamMembers' ? [...formData.TeamMembers, e.target.value] : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, TeamMembers: [...formData.TeamMembers, name] });
    } else {
      setFormData({ ...formData, TeamMembers: formData.TeamMembers.filter((member) => member !== name) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('service_wdz3xxy','template_2b3rnvb',e.target,'AkzAqUAg1H4ox9vlo')//proceed to payment
    emailjs.sendForm('service_bfd3mqm','template_lpbs2eb',e.target,'8L3Hr9GpDV5QssDZx')//from schedule admin to user
    emailjs.sendForm('service_16r2bs6','template_d2i16in',e.target,'CjB6YfzjFUZGmNXhd')//from schedule admin to task admin

    try {
      await axios.post('/api/calendar/schedule/add', formData);
      alert('Schedule created successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const validateForm = () => {
    const {  EventId, UserID, StaffID, Photographer, SpecialRequest, TeamLeader, TeamMembers, ScheduleDate } = formData;
    if ( !EventId || !UserID || !StaffID || !Photographer || !SpecialRequest || !TeamLeader || !TeamMembers || !ScheduleDate) {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: '#E6B31E' }}>
              <h2 className="text-center">Add Schedule</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* <div className="form-group">
                  <label>Schedule ID:</label>
                  <input type="text" name="ScheduleId" className="form-control" value={formData.ScheduleId} onChange={handleChange} />
                </div> */}
                <div className="form-group">
                  <label>Event ID:</label>
                  <input type="text" name="EventId" className="form-control" value={formData.EventId} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>User ID:</label>
                  <input type="text" name="UserID" className="form-control" value={formData.UserID} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Staff ID:</label>
                  <select name="StaffID" className="form-control" value={formData.StaffID} onChange={handleChange}>
                    <option value="">Select Staff ID</option>
                    {staffIds.map((id) => (
                      <option key={id} value={id}>{id}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Photographer:</label>
                  <input type="text" name="Photographer" className="form-control" value={formData.Photographer} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Special Request:</label>
                  <input type="text" name="SpecialRequest" className="form-control" value={formData.SpecialRequest} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Team Leader:</label>
                  <select name="TeamLeader" className="form-control" value={formData.TeamLeader} onChange={handleChange}>
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
                        name={name}
                        className="form-check-input"
                        checked={formData.TeamMembers.includes(name)}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label">{name}</label>
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <label>Schedule Date (YYYY-MM-DD):</label>
                  <input type="date" name="ScheduleDate" className="form-control" value={formData.ScheduleDate} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScheduleForm;
