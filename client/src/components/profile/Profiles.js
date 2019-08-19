import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import SpinnerComponent from '../dashboard/SpinnerComponent';
import ProfileItem from './ProfileItem';
import { getAllProfiles } from '../../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profiles = ({
        profile: {
            profiles,
            loading
        },
        getAllProfiles
    }) => {

    useEffect(() => {
        getAllProfiles();
    }, [getAllProfiles]);

    return loading ? <SpinnerComponent/> : (

        <Container className="pt-4">

            <h2 className="text-center">
                Profiles
            </h2>

            <Row className="text-center">
                <FontAwesomeIcon icon="users"
                                 className="mx-auto mt-3"
                                 style={{ fontSize: '3rem' }}/>
            </Row>

            <Row className="text-center">
                <h4 className="mx-auto mt-4">
                    Browse and connect with developers
                </h4>
            </Row>
            {
                profiles.length > 0 ?
                profiles.map( prof => (
                    <ProfileItem key={ prof._id }
                                 profile={ prof }/>
                )) : ""
            }
        </Container>
    )
}

Profiles.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps, {
        getAllProfiles
    }
)(Profiles);