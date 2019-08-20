import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

import DashboardButtons from './DashboardButtons';
import Experience from './Experience';
import Education from './Education';
import SpinnerComponent from "./SpinnerComponent";

import {
    Container,
    Row,
    Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buff = new Buffer.from('hello world')
console.log(buff)

const Dashboard = ({
        auth: {
            user
        },
        profile: {
            profile,
            loading
        },
        getCurrentProfile,
        deleteAccount
    }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    const handleDeleteAccount = (event) => {
        event.preventDefault();
        deleteAccount();
    };

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
                <h4 className="mx-auto mt-4 text-success">
                    Welcome{ user && `, ${user.name}` }
                </h4>
            </Row>
            {
                profile !== null ?

                    <DashboardButtons/> : (
                        loading ? <SpinnerComponent/> : (
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
                    ))
            }
            {
                <>
                <Experience/>
                <Education/>
                </>
            }

            <Row className="my-5">
                <Button variant="danger"
                        className="px-4"
                        onClick={ e => handleDeleteAccount(e) }>
                        <FontAwesomeIcon icon="user-minus"/>
                        <span className="ml-3">Delete Account</span>
                </Button>
            </Row>

        </Container>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {
    getCurrentProfile,
    deleteAccount
})(Dashboard);
