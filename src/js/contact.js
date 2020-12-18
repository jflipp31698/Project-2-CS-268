import { Component } from "react";
import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../css/contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1>Contact Us</h1>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                 <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter your message here" rows={3} />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Subscribe to monthly email announcements" />
                </Form.Group>
                <Button className="button" type="submit">
                Submit
                </Button>
            </Form>
            </div>
            
        )
    }
}

export default Contact;