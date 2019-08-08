import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, ButtonGroup, Button } from 'react-bootstrap';


const DashboardButtons = ({ history }) => {

    const handleEditProfile = (event) => {
        event.preventDefault();
        history.push('/edit-profile');
    };

    const handleAddExperience = (event) => {
        event.preventDefault();
        history.push('/add-experience');
    };

    const handleAddEducation = (event) => {
        event.preventDefault();
        history.push('/add-education');
    };

    return (
        <Row className="text-center mt-5">
        
            <ButtonGroup className="mx-auto">
                <Button variant="secondary"
                        className="px-4"
                        onClick={ e => handleEditProfile(e) }>
                    Edit Profile
                </Button>
                <Button variant="secondary"
                        className="px-4"
                        onClick={ e => handleAddExperience(e) }>
                    Add Experience
                </Button>
                <Button variant="secondary"
                        className="px-4"
                        onClick={ e => handleAddEducation(e) }>
                    Add Education
                </Button>
            </ButtonGroup>

        </Row>
    );
};

export default withRouter(DashboardButtons);
