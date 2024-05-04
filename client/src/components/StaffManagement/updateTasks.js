import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateTaskInfo() {
    const { TaskId } = useParams(); // Extract TaskId from URL params
    const [task, setTask] = useState({
        TaskName: '',
        TaskDescription: '',
        StaffMember: '',
        Time:'',
        Action: ''
    });

    useEffect(() => {
        const fetchTaskDetails = async () => {
            try {
                const response = await axios.get(`/api/staff/tasks/${TaskId}`);
                setTask(response.data.task);
            } catch (error) {
                console.error('Error fetching task details:', error);
                // Handle error
            }
        };

        fetchTaskDetails();
    }, [TaskId]);

    const sendData = async (e) => {
        e.preventDefault();

        const updatedTask = {
            TaskId,
            ...task
        };

        try {
            await axios.put(`/api/staff/tasks/${TaskId}`, updatedTask);
            alert("Task Updated");

            // Reset the form fields after successful update
            setTask({
                TaskId: '',
                TaskName: '',
                TaskDescription: '',
                StaffMember: '',
                Time:'',
                Action: ''
            });
        } catch (error) {
            console.error('Error updating task:', error);
            alert("Failed to update task. Please check the console for more details.");
        }
    };

    return (
        <div className='container'>
            <Form onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>TaskId</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter TaskId"
                        value={TaskId}
                        disabled
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Task Name"
                        value={task.TaskName}
                        onChange={(e) => setTask({...task, TaskName: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Task Description"
                        value={task.TaskDescription}
                        onChange={(e) => setTask({...task, TaskDescription: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicStaffMember">
                    <Form.Label>Staff Member</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Staff Member"
                        value={task.StaffMember}
                        onChange={(e) => setTask({...task, StaffMember: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTime">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Time"
                        value={task.Time}
                        onChange={(e) => setTask({...task, Time: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Date"
                        value={task.Action}
                        onChange={(e) => setTask({...task, Action: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Above information is accurate" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
}
