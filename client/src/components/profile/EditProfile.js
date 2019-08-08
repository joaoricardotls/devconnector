import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import {
    Container,
    Row,
    Button,
    Form,
    ButtonGroup,
    Col
} from 'react-bootstrap';
import BrandComponent from './BrandComponent';
import SpinnerComponent from "../dashboard/SpinnerComponent";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
        profile: {
            profile,
            loading
        },
        createProfile,
        getCurrentProfile,
        history
    }) => {

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData

    const [socialMedia, setSocialMedia] = useState(false);

    useEffect(() => {
        getCurrentProfile();
        let profileData = {
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills.join(','),
            githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter ? profile.social.twitter : '',
            facebook: loading || !profile.social ? '' : profile.social.facebook ? profile.social.facebook : '',
            linkedin: loading || !profile.social ? '' : profile.social.linkedin ? profile.social.linkedin : '',
            youtube: loading || !profile.social ? '' : profile.social.youtube ? profile.social.youtube : '',
            instagram: loading || !profile.social ? '' : profile.social.instagram ? profile.social.instagram : ''
        };
        setFormData(profileData);
    }, [loading]);

    const handleChange = (event) => {
        event.preventDefault();
        let newData = { ...formData }
        newData[event.target.name] = event.target.value;
        setFormData(newData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        createProfile(formData, history, true);
        window.scrollTo(0,0);
    };

    const handleReset = (event) => {
        event.preventDefault();
        let newData = {
            company : '',
            website : '',
            location : '',
            status : '',
            skills : '',
            githubusername : '',
            bio : '',
            twitter : '',
            facebook : '',
            linkedin: '',
            youtube: '',
            instagram : ''
        };
        setFormData(newData);
    };

    const handleSocialMeidaToggle = event => {
        event.preventDefault();
        setSocialMedia(state => !state);
    };

    return loading && profile === null ? <SpinnerComponent/> : (

        <Container className="py-5">

            <h1 className="text-center mb-4">Edit Your Profile</h1>

            <Row className="text-center my-4">
                <h5 className="mx-auto">Add information to make your profile stand out!</h5>
            </Row>

            <Form onSubmit={ e => handleSubmit(e) }
                  onReset={ e => handleReset(e) }>

                <p className="mb-3">
                    * = Required field
                </p>

                <Form.Group controlId="formStatus">
                    <Form.Label>Professional Status</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="Enter status"
                            value={ status }
                            name="status"
                            required/>
                    <Form.Text className="text-muted">
                        * Give us an idea of where you are in your career
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="Enter company"
                            value={ company }
                            name="company"
                            />
                    <Form.Text className="text-muted">
                        Could be your own company or one you work for
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formWebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="Enter website"
                            value={ website }
                            name="website"
                            />
                    <Form.Text className="text-muted">
                        Could be your own company or one you work for
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="Enter location"
                            value={ location }
                            name="location"
                            />
                    <Form.Text className="text-muted">
                        {`City & State suggested (example: Boston, MA)`}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formSkills">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="Enter skills"
                            value={ skills }
                            name="skills"
                            required/>
                    <Form.Text className="text-muted">
                        {`* City & State suggested (example: Boston, MA)`}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGithubUsername">
                    <Form.Label>Github Username</Form.Label>
                    <Form.Control type="text"
                            onChange={ (e) => handleChange(e) }
                            placeholder="Enter Github username"
                            value={ githubusername }
                            name="githubusername"
                            />
                    <Form.Text className="text-muted">
                        If you want your latest repos and a Github link, include your username
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBio">
                    <Form.Label>Biography</Form.Label>
                    <Form.Control as="textarea"
                            rows='3'
                            onChange={ (e) => handleChange(e) }
                            placeholder="A short bio on yourself"
                            value={ bio }
                            name="bio"
                            />
                    <Form.Text className="text-muted">
                        Tell us a little about yourself?
                    </Form.Text>
                </Form.Group>

                <Form.Row className="d-flex">

                    <ButtonGroup size="md" className="text-center my-5 mx-auto">
                        <Button variant="secondary"
                                onClick={ e => handleSocialMeidaToggle(e) }>
                            Add Social Media Network Links
                        </Button>

                        <Button variant="secondary">
                            Optional
                        </Button>
                    </ButtonGroup>
                
                </Form.Row>
                {
                    socialMedia && 
                            <>
                            <Form.Group controlId="formTwitter">
                                <Form.Row>
                                    <Col className="d-flex justify-content-end mr-2 align-items-center" >
                                        <BrandComponent brand="twitter"/>
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Control type="text"
                                                onChange={ (e) => handleChange(e) }
                                                placeholder="Twitter URL"
                                                value={ twitter }
                                                name="twitter"
                                                />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formFacebook">
                                <Form.Row>
                                    <Col className="d-flex justify-content-end mr-2 align-items-center" >
                                        <BrandComponent brand="facebook"/>
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Control type="text"
                                                onChange={ (e) => handleChange(e) }
                                                placeholder="Facebook URL"
                                                value={ facebook }
                                                name="facebook"
                                                />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formYouTube">
                                <Form.Row>
                                    <Col className="d-flex justify-content-end mr-2 align-items-center" >
                                        <BrandComponent brand="youtube"/>
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Control type="text"
                                                onChange={ (e) => handleChange(e) }
                                                placeholder="YouTube URL"
                                                value={ youtube }
                                                name="youtube"
                                                />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formLinkedIn">
                                <Form.Row>
                                    <Col className="d-flex justify-content-end mr-2 align-items-center" >
                                        <BrandComponent brand="linkedin"/>
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Control type="text"
                                                onChange={ (e) => handleChange(e) }
                                                placeholder="LinkedIn URL"
                                                value={ linkedin }
                                                name="linkedin"
                                                />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formInstagram">
                                <Form.Row>
                                    <Col className="d-flex justify-content-end mr-2 align-items-center" >
                                        <BrandComponent brand="instagram"/>
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Control type="text"
                                                onChange={ (e) => handleChange(e) }
                                                placeholder="Instagram URL"
                                                value={ instagram }
                                                name="instagram"
                                                />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            </> 
                }
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

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(
    mapStateToProps, {
        createProfile,
        getCurrentProfile
    }
)(withRouter(EditProfile));