import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const findTasks = async () => {
            try {
                const response = await axios.get(`/api/staff/tasks`);
                setTasks(response.data.tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setError('Error fetching tasks');
            }
        };

        findTasks();
    }, []);

    const handleDelete = async (TaskId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            try {
                await axios.delete(`/api/staff/tasks/${TaskId}`);
                const updatedTasks = tasks.filter(task => task._id !== TaskId);
                setTasks(updatedTasks);
            } catch (error) {
                console.error('Error deleting task:', error);
                setError('Error deleting task');
            }
        }
    };

    return (
        <div className='container'>
            {error && <p className="error">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Staff Member</th>
                        <th>Task Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task._id}>
                            <td>{task.TaskId}</td>
                            <td>{task.TaskName}</td>
                            <td>{task.TaskDescription}</td>
                            <td>{task.StaffMember}</td>
                            <td>{task.Time}</td>
                            <td className="actions">
                                 <button className="edit-button">
                                    <Link to={`/updateTask/${task.TaskId}`} className="button-link">Update</Link>
                                </button>
                                <button className="delete-button" onClick={() => handleDelete(task._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Task;
