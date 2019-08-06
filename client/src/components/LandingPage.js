import React from 'react';
import { Link, Redirect } from "react-router-dom";
import {
    Container,
    Jumbotron,
    Button
} from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LandingPage = ({ isAuthenticated }) => {

    if (isAuthenticated) return <Redirect to="/dashboard"/>;

    return (
        <Container>

            <Jumbotron className="text-center"
                       style={{marginTop: "10rem"}}>
                <h1>DevConnector</h1>
                <p className="p-3">
                    A social network for webdevelopers of the world!
                </p>
                <p>
                    <Link to="/register">
                        <Button size="lg"
                                variant="primary"
                                className="mr-3">
                            Sign Up!                    
                        </Button>
                    </Link>


                    <Link to="/login">
                        <Button size="lg"
                                variant="secondary">
                            Log In
                        </Button>
                    </Link>
                </p>
            </Jumbotron>

        </Container>
    );
};

LandingPage.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(LandingPage);