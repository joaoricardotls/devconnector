import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import {
    Container,
    Row,
    Button,
    Form,
    ButtonGroup,
    Col,
} from 'react-bootstrap';
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {

    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = formData;

    const handleChange = (event) => {
        event.preventDefault();
        let newData = { ...formData };
        newData[event.target.name] = event.target.value;
        setFormData(newData);
    };

    const handleCurrentChange = () => {
        let newData = { ...formData };
        newData.current = !newData.current;
        if (newData.current) {
            newData.to = '';
        };
        setFormData(newData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        addExperience(formData, history);
    };

    const handleReset = (event) => {
        event.preventDefault();
        let newData = {
            title: '',
            company: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: ''
        };
        setFormData(newData);
    };

    return (

        <Container className="py-5">

            <h1 className="text-center mb-4">Add Carrer Experience Information</h1>

            <Row className="text-center my-4">
                <h5 className="mx-auto">Add any developer/programming positions that you have had in the past</h5>
            </Row>

            <Form onSubmit={ e => handleSubmit(e) }
                  onReset={ e => handleReset(e) }>

                <p className="mb-3">
                    * = Required field
                </p>

                <Form.Group controlId="formJobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="* Enter job title"
                            value={ title }
                            name="title"
                            required/>
                </Form.Group>

                <Form.Group controlId="formJobTitle">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="* Enter company"
                            value={ company }
                            name="company"
                            required/>
                </Form.Group>

                <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="Enter job location"
                            value={ location }
                            name="location"
                            />
                </Form.Group>

                <Form.Row>
                    <Col sm={6}>
                        <Form.Group controlId="formFrom">
                            <Form.Label>From:</Form.Label>
                            <Form.Control type="date"
                                          onChange={ (e) => handleChange(e) }
                                          placeholder="* Date when job started"
                                          value={ from }
                                          name="from"
                                          required/>
                        </Form.Group>
                    </Col>
                    {
                        !current &&
                            <Col sm={6}>
                                <Form.Group controlId="formTo">
                                    <Form.Label>To:</Form.Label>
                                    <Form.Control type="date"
                                                onChange={ (e) => handleChange(e) }
                                                placeholder="Date when job ended"
                                                value={ to }
                                                name="to"
                                                />
                                </Form.Group>
                            </Col>
                    }
                </Form.Row>

                <Form.Group controlId="formCurrent">
                    <Form.Label>Is it your current job?</Form.Label>
                    <Form.Check type="checkbox"
                                label={ current ? 'Yes' : 'No' }
                                onChange={ () => handleCurrentChange() }
                                checked={ current }
                                value={ current }
                                name="current"
                                />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea"
                            rows='3'
                            onChange={ (e) => handleChange(e) }
                            placeholder="A short description on the job"
                            value={ description }
                            name="description"
                            />
                </Form.Group>

                <Form.Row className="d-flex justify-content-center align-items-center">
                    <ButtonGroup className="text-center my-5">
                        <Button variant="primary"
                                size='lg'
                                type="submit"
                                className="mx-auto">
                            Submit
                        </Button>

                        <Button variant="secondary"
                                size='lg'
                                type="reset"
                                className="mx-auto">
                            Reset
                        </Button>
                        
                        <Link to="/dashboard"
                                className="btn btn-secondary pt-2"
                                style={{ fontSize: '1.2rem' }}>
                            Get Back
                        </Link>
                    </ButtonGroup>
                </Form.Row>

            </Form>
        </Container>
    );
};

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
};

export default connect(
    null, {
        addExperience
    }
)(withRouter(AddExperience));