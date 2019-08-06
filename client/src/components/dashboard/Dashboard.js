import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import SpinnerComponent from "./SpinnerComponent";
import { connect } from 'react-redux';
import { getCurrentProfile } from "../../actions/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = ({
        auth: {
            user
        },
        profile: {
            profile,
            loading
        },
        getCurrentProfile
    }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [])

    return loading && profile === null ? <SpinnerComponent/> : (

        <Container className="pt-4">

            <h2 className="text-center">
                Dashboard
            </h2>

            <Row className="text-center">
                <FontAwesomeIcon icon="user"
                                 className="mx-auto mt-3"
                                 style={{ fontSize: '3rem' }}/>
            </Row>

            <Row className="text-center">
                <h4 className="mx-auto mt-4 text-primary">
                    Welcome{ user && `, ${user.name}` }
                </h4>
            </Row>
            {
                profile !== null ?

                    <Row className="text-center mt-5">
                        <span className="mx-auto">You already have a profile</span>
                    </Row>
                                :
                    <>
                    <Row className="text-center mt-5">
                        <span className="mx-auto">You have not yet set up a profile</span>
                    </Row>
                    <Row className="text-center mt-4">
                        <Link to="/create-profile"
                              className="mx-auto">
                            <Button>
                                Create profile
                            </Button>
                        </Link>
                        
                    </Row>
                    </>
            }
        </Container>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {
    getCurrentProfile
})(Dashboard);
