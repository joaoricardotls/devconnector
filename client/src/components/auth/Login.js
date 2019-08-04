import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";

export const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        event.preventDefault();
        let newData = {...formData};
        newData[event.target.name] = event.target.value;
        setFormData(newData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User logged in');
    };

    return (
        <Container className="pt-5">

            <h1 className="text-center mb-4">Log In</h1>

            <Form onSubmit={ e => handleSubmit(e) }>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  onChange={ (e) => handleChange(e) }
                                  placeholder="Enter your email"
                                  value={ formData.email }
                                  name="email"
                                  required/>
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
                
                <Form.Row className="text-center">
                    <Button variant="primary"
                            size='lg'
                            type="submit"
                            className="mx-auto">
                        Log In
                    </Button>
                </Form.Row>

                <Form.Text className="mt-3">
                    <span>Don't have an account yet? </span>
                    <Link to="/register">
                        Register!
                    </Link>
                </Form.Text>

            </Form>

        </Container>
    );
};