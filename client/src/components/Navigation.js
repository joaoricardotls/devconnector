import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg">

            <Nav.Item>
                <NavLink to="/"
                         className="navbar-brand">
                    DevConnector
                </NavLink>
            </Nav.Item>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto">

                    <Nav.Item className="ml-3">
                        <NavLink to="/users"
                                 className="nav-link">
                            <FontAwesomeIcon icon="code"/>
                            <span style={{marginLeft: "0.5rem"}}>Developers</span>
                        </NavLink>
                    </Nav.Item>
                    

                    <Nav.Item className="ml-3">
                        <NavLink to="/login"
                                 className="nav-link">
                            <FontAwesomeIcon icon="door-open"/>
                            <span style={{marginLeft: "0.5rem"}}>Log In</span>
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item className="ml-3">
                        <NavLink to="/register"
                                 className="nav-link">
                            <FontAwesomeIcon icon="sign-in-alt"/>
                            <span style={{marginLeft: "0.5rem"}}>Register</span>
                        </NavLink>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};
