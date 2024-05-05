import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

const StaffTasks = () => {
    const [staffId, setStaffId] = useState('');
    const [tData, setTData] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [error, setError] = useState('');

    const fetchDetails = useCallback(async () => {
        try {
            const customerResponse = await axios.get(`/api/staff/tasks/details/${staffId}`);
            setTData(customerResponse.data);
            setError('');
        } catch (error) {
            setTData([]);
            setError('Error fetching data');
            console.error('Error fetching data: ', error);
        }
    }, [staffId]);

    useEffect(() => {
        if (staffId) {
            fetchDetails();
        }
    }, [staffId, fetchDetails]);

    const handleInputChange = (event) => {
        setStaffId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchDetails();
    };

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`/api/staff/tasks/${taskId}`);
            const deletedTask = tData.find(task => task.TaskId === taskId);
            setCompletedTasks(prevCompletedTasks => [...prevCompletedTasks, deletedTask]);
            setTData(prevTData => prevTData.filter(task => task.TaskId !== taskId));
        } catch (error) {
            setError('Error deleting task');
            console.error('Error deleting task: ', error);
        }
    };

    const generateReport = () => {
        const doc = new jsPDF();
        doc.setFont('helvetica');
        doc.setFontSize(12);
        doc.text('Task Report', 14, 10);
        tData.forEach((task, index) => {
            const yPos = 20 + index * 10;
            doc.text(`${task.TaskId}: ${task.TaskName}`, 14, yPos);
        });
        doc.save('task_report.pdf');
    };

    return (
        <div className="taskDetails">
            <h2>Task Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="staffIdInput">Enter Staff ID:</label>
                <input
                    type="text"
                    id="staffIdInput"
                    value={staffId}
                    onChange={handleInputChange}
                    placeholder="Enter staff ID..."
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error">{error}</p>}
            {tData.length > 0 && (
                <div>
                    <h3>Tasks</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Task ID</th>
                                <th>Task Name</th>
                                <th>Task Description</th>
                                <th>Staff Member</th>
                                <th>Due Date</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tData.map(task => (
                                <tr key={task.TaskId}>
                                    <td>{task.TaskId}</td>
                                    <td>{task.TaskName}</td>
                                    <td>{task.TaskDescription}</td>
                                    <td>{task.StaffMember}</td>
                                    <td>{task.Time}</td>
                                    <td>{task.Action}</td>
                                    <td className="actions">
                                        <button className="delete-button" onClick={() => handleDelete(task.TaskId)}>Mark as Complete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={generateReport}>Generate Report</button>
                </div>
            )}
            {completedTasks.length > 0 && (
                <div>
                    <h3>Completed Tasks</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Task ID</th>
                                <th>Task Name</th>
                                <th>Task Description</th>
                                <th>Time</th>
                                <th>Staff Member</th>
                            </tr>
                        </thead>
                        <tbody>
                            {completedTasks.map(task => (
                                <tr key={task.TaskId}>
                                    <td>{task.TaskId}</td>
                                    <td>{task.TaskName}</td>
                                    <td>{task.TaskDescription}</td>
                                    <td>{task.Time}</td>
                                    <td>{task.StaffMember}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default StaffTasks;
