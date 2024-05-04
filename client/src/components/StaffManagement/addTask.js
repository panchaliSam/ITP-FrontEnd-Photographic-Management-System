import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


export default function AddTask() {
    const [TaskId, setId] = useState("");
    const [TaskName, setName] = useState("");
    const [TaskDescription, setDescription] = useState("");
    const [StaffMember, setMember] = useState("");
    const [Time, setTime] = useState("");
    const [Action, setAction] = useState("");
    

    function sendData(e) {
        e.preventDefault();

        const Task = {
            TaskId,
            TaskName,
            TaskDescription,
            StaffMember,
            Time,
            Action
        }

        axios.post("http://localhost:4001/api/staff/tasks/add", Task)
            .then(() => {
                alert("Task Added");
                // Reset the form fields after successful submission
                setId("");
                setName("");
                setDescription("");
                setMember("");
                setTime("");
                setAction("");
            })
            .catch((err) => {
                console.error(err);
                // alert("Failed to add task. Please check the console for more details.");
            })
    }

    return (
        <div className='container'>
            <Form onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>TaskId</Form.Label>
                    <Form.Control type="text" placeholder="Enter TaskId"
                        value={TaskId}
                        onChange={(e) => setId(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task Name"
                        value={TaskName}
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task Description"
                        value={TaskDescription}
                        onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicStaffMember">
                    <Form.Label>Staff Member</Form.Label>
                    <Form.Control type="text" placeholder="Enter Staff Member"
                        value={StaffMember}
                        onChange={(e) => setMember(e.target.value)} />
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label>Enter Time for task</Form.Label>
                    <Form.Control type="text" placeholder="Enter Time for task"
                        value={Time}
                        onChange={(e) => setTime(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter Date"
                        value={Action}
                        onChange={(e) => setAction(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Above information is accurate" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
