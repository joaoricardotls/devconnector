import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileByUserId } from "../../actions/profile";
import SpinnerComponent from "../dashboard/SpinnerComponent";
import { Container, Row, Button, Image, Badge } from 'react-bootstrap';
import BrandComponent from '../profile/BrandComponent';
import ProfileGithub from './ProfileGithub';
import Moment from 'react-moment';

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
    }, [getProfileByUserId, match.params.id]);

    const showSocialLinks = profObj => {
        return Object.keys(profObj).filter( k => profObj[k] !== "" ).map( key =>
            <a key={ key }
               href={ profObj[key] }
               target="_blank"
               rel="noopener noreferrer"
               className="mx-2">
                <BrandComponent brand={ key }
                                fill="snow"
                                title={ profObj[key] }/>
            </a>
        );
    };

    return profile === null || loading ? <SpinnerComponent/> : (

        <Container className="pt-2 pb-5">

            <Row className="my-4">
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

            <Row>
                <Container className="bg-info p-4 text-light d-flex flex-column align-items-center justify-content-center w-100">
                    <Row>
                        <Image src={ profile.user.avatar }
                            roundedCircle
                            className="border border-dark"/>
                    </Row>
                    <Row className="my-2">
                        <h1>{ profile.user.name }</h1>
                    </Row>
                    <Row className="my-2">
                        <h3>{ profile.status }{ profile.company && <span> at { profile.company }</span>}</h3>
                    </Row>
                    {
                        profile.location &&
                        <Row className="my-2">
                            <h5>{ profile.location }</h5>
                        </Row>
                    }
                    <Row className="d-flex flex-row justify-content-center align-items-center">
                    {
                        showSocialLinks({
                            website: profile.website ? profile.website : "",
                            ...profile.social
                        })
                    }
                    </Row>
                </Container>
            </Row>
            {   
                profile.bio &&
                <Row className="d-flex flex-column p-5 m-3 border bg-light">
                    <h5 className="pb-2 font-weight-bold text-center border-bottom mb-3">
                        {`About ${profile.user.name}:`}
                    </h5>
                    <p className="text-center">{ profile.bio }</p>
                </Row>
            }
            <Row className="d-flex flex-column p-5 m-3 border bg-light">
                <h5 className="pb-2 font-weight-bold text-center border-bottom mb-3">
                    Skill Set
                </h5>
                <Container className="d-flex flex-wrap flex-row justify-content-center align-items-center">
                {
                    profile.skills.map( skill =>
                        <Badge className="text-white mx-2 my-1 p-2"
                               variant="primary"
                               style={{ fontSize: "1rem" }}
                               key={ skill }>
                            { skill }
                        </Badge>
                    )
                }
                </Container>
            </Row>
            {
                profile.experience.length > 0 &&
                <Row className="m-3 px-5 pt-3 pb-3 border bg-light">
                    <Container>
                        <h5 className="pb-2 font-weight-bold text-center border-bottom mb-3">
                            Work Experiences
                        </h5>
                    {
                        profile.experience.map( exp =>
                            <Row className="p-3 mb-1 border-bottom d-flex flex-column justify-content-center align-items-center">
                                <h5 className="mb-2">
                                    { exp.company }
                                </h5>
                                <p className="mb-2">
                                    { exp.title }
                                </p>
                                <p className="mb-2">
                                    <Moment format='YYYY/MM/DD'>{ exp.from }</Moment>
                                    {' - '}
                                    {
                                        exp.to ?
                                        <Moment format='YYYY/MM/DD'>{ exp.to }</Moment> :
                                        'Now'
                                    }
                                </p>
                                {
                                    exp.location &&
                                    <p className="mb-2">
                                        { exp.location }
                                    </p>
                                }
                                {
                                    exp.description &&
                                    <p className="mb-2">
                                        { exp.description }
                                    </p>
                                }

                            </Row>
                        )
                    }
                    </Container>
                </Row>
            }
            {
                profile.education.length > 0 &&
                <Row className="m-3 px-5 pt-3 pb-3 border bg-light">
                    <Container>
                        <h5 className="pb-2 font-weight-bold text-center border-bottom mb-3">
                            Education
                        </h5>
                    {
                        profile.education.map( edu =>
                            <Row className="p-3 mb-1 border-bottom d-flex flex-column justify-content-center align-items-center">
                                <h5 className="mb-2">
                                    { edu.school }
                                </h5>
                                <p className="mb-2">
                                    { `${edu.degree} on ${edu.fieldofstudy}` }
                                </p>
                                <p className="mb-2">
                                    <Moment format='YYYY/MM/DD'>{ edu.from }</Moment>
                                    {' - '}
                                    {
                                        edu.to ?
                                        <Moment format='YYYY/MM/DD'>{ edu.to }</Moment> :
                                        'Now'
                                    }
                                </p>
                                {
                                    edu.location &&
                                    <p className="mb-2">
                                        { edu.location }
                                    </p>
                                }
                                {
                                    edu.description &&
                                    <p className="mb-2">
                                        { edu.description }
                                    </p>
                                }

                            </Row>
                        )
                    }
                    </Container>
                </Row>
            }
            {
                profile.githubusername &&
                <ProfileGithub username={ profile.githubusername }/>
            }
            {/*
                profile.githubusername &&
                profile.repos.length > 0 &&
                <Row className="m-3 px-5 pt-3 pb-3 border bg-light">
                    <Container>
                        <h5 className="pb-2 font-weight-bold text-center border-bottom mb-3">
                            Github Repositories
                        </h5>
                    {
                        profile.repos.map( repo =>
                            <Row className="p-3 mb-1 border-bottom d-flex flex-column justify-content-center align-items-center">
                                
                            </Row>
                        )
                    }
                    </Container>
                </Row>
            */}
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