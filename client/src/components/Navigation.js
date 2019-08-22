import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../actions/auth"

const Navigation = ({
        auth: {
            isAuthenticated,
            loading
        },
        logout
    }) => {

    const handleLogout = () => {
        const confirm = window.confirm('We thank you for your participation. Confirm to sign out.');
        if (confirm) logout();
    };

    const authLinks = (
        <Nav className="mr-auto">
            <Nav.Item className="ml-3">
                <NavLink to="/profiles"
                         className="nav-link">
                    <FontAwesomeIcon icon="users"/>
                    <span style={{marginLeft: "0.5rem"}}>Developers</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item className="ml-3">
                <NavLink to="/posts"
                         className="nav-link">
                    <FontAwesomeIcon icon="comments"/>
                    <span style={{marginLeft: "0.5rem"}}>Posts</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item className="ml-3">
                <NavLink to="/dashboard"
                         className="nav-link">
                    <FontAwesomeIcon icon="laptop-code"/>
                    <span style={{marginLeft: "0.5rem"}}>Dashboard</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item className="ml-3">
                <div onClick={ () => handleLogout() }
                     className="nav-link">
                    <FontAwesomeIcon icon="sign-out-alt"/>
                    <span style={{marginLeft: "0.5rem"}}>Log Out</span>
                </div>
            </Nav.Item>
        </Nav>
    );

    const guestLinks = (
        <Nav className="mr-auto">
            <Nav.Item className="ml-3">
                <NavLink to="/profiles"
                         className="nav-link">
                    <FontAwesomeIcon icon="users"/>
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
    );

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
            {
                !loading && (
                    <>
                    {
                        isAuthenticated ? authLinks : guestLinks
                    }
                    </>
                )
            }
            </Navbar.Collapse>

        </Navbar>
    );
};

Navigation.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(Navigation);