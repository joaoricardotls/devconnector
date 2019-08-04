import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";

export const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const handleChange = (event) => {
        event.preventDefault();
        let newData = {...formData};
        newData[event.target.name] = event.target.value;
        setFormData(newData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password.toString() === formData.password2.toString()) {
            console.log('Form submitted');
        } else {
            console.error('Check your password');
        };
    };

    return (
        <Container className="pt-5">

            <h1 className="text-center mb-4">Register</h1>

            <Form onSubmit={ e => handleSubmit(e) }>

                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  onChange={ (e) => handleChange(e) }
                                  value={ formData.name }
                                  placeholder="Enter your name"
                                  name="name"
                                  required/>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  onChange={ (e) => handleChange(e) }
                                  placeholder="Enter email"
                                  value={ formData.email }
                                  name="email"
                                  required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Text className="text-muted">
                        This site uses Gravatar so, if you want a profile image, use a Gravatar email.
                    </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  onChange={ (e) => handleChange(e) }
                                  placeholder="Password"
                                  value={ formData.password }
                                  name="password"
                                  required/>
                </Form.Group>

                <Form.Group controlId="formPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                                  onChange={ (e) => handleChange(e) }
                                  placeholder="Confirm your password"
                                  value={ formData.password2 }
                                  name="password2"
                                  required/>
                </Form.Group>
                
                <Form.Row className="text-center">
                    <Button variant="primary"
                            size='lg'
                            type="submit"
                            className="mx-auto">
                        Register
                    </Button>
                </Form.Row>

                <Form.Text className="mt-3">
                    <span>Already have an account? </span>
                    <Link to="/login">
                        Log in!
                    </Link>
                </Form.Text>

            </Form>

        </Container>
    );
};