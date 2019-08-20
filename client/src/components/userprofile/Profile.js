import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileByUserId } from "../../actions/profile";
import SpinnerComponent from "../dashboard/SpinnerComponent";
import { Container, Row, Button } from 'react-bootstrap';

const Profile = ({
        profile: {
            profile,
            loading
        },
        auth,
        match,
        getProfileByUserId
    }) => {

    useEffect(() => {
        getProfileByUserId(match.params.id);
    }, [getProfileByUserId]);

    return profile === null || loading ? <SpinnerComponent/> : (

        <Container className="py-5">

            <h1 className="text-center mb-4">{ profile.user.name }</h1>

            <Row className="text-center my-4 d-flex justify-content-center">
                <Link to="/profiles"
                      className="mx-2">
                    <Button variant="light">
                        Back to Profiles
                    </Button>
                </Link>
            {
                auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id &&

                <Link to="/edit-profile"
                      className="mx-2">
                    <Button variant="light">
                        Edit Profile
                    </Button>
                </Link>
            }
            </Row>

        </Container>
    );
};

Profile.propTypes = {
    getProfileByUserId: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(
    mapStateToProps, {
        getProfileByUserId
    }
)(Profile);