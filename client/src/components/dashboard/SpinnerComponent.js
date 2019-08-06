import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

export default () => (
    <>
    <Container className="d-flex justify-content-center align-items-center"
               style={{ height: "80vh" }}>
        <Spinner animation="border" variant="primary"/>
    </Container>
    </>
);