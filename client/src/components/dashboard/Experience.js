import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Row, Table, Button, Modal, Container } from 'react-bootstrap';
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience, history }) => {

    const [showModal, setShowModal] = useState({
        show: false,
        data: null
    });

    const experiencesRows = experience.map( exp => (
        <tr key={ exp._id }>
            <td>{ exp.company }</td>
            <td>{ exp.title }</td>
            <td>
                <Moment format='YYYY/MM/DD'>{ exp.from }</Moment>{' - '}{
                    exp.to === null ? 'Now' : (
                        <Moment format='YYYY/MM/DD'>{ exp.to }</Moment>
                    )
                }
            </td>
            <td className="text-center">
                <Button variant='secondary'
                        size="sm"
                        onClick={ e => handleFullInfoModal(e, exp._id) }>
                    Full Info
                </Button>
            </td>
            <td className="text-center">
                <Button variant='danger'
                        size="sm"
                        onClick={ e => handleDeleteExperience(e) }>
                    Delete
                </Button>
            </td>
        </tr>
    ));

    const handleFullInfoModal = (event, id) => {
        event.preventDefault();
        let modal = (
            <>
            <Modal.Body>
                <Container className="px-3">
                {
                    experience.filter(exp => exp._id === id).map(exp => (
                        <Row key={exp._id} className="d-flex flex-column">
                            <h6 className="font-weight-bold">Company:</h6>
                            <p>{ exp.company }</p>
                            <h6 className="font-weight-bold">Title:</h6>
                            <p>{ exp.title }</p>
                            <h6 className="font-weight-bold">Location:</h6>
                            <p>{ exp.location }</p>
                            <h6 className="font-weight-bold">From:</h6>
                            <p><Moment format='YYYY/MM/DD'>{ exp.from }</Moment></p>
                            <h6 className="font-weight-bold">To:</h6>
                            <p>{
                                exp.to === null ? 'Now' : (
                                    <Moment format='YYYY/MM/DD'>{ exp.to }</Moment>
                                )
                            }</p>
                            <h6 className="font-weight-bold">Description:</h6>
                            <p>{ exp.description }</p>
                        </Row>
                    ))
                }
                </Container>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={ e => handleModalClose(e) }>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ e => handleDeleteExperience(e, id) }>
                        Delete
                    </Button>
            </Modal.Footer>
            </>
        );
        console.log(modal);
        setShowModal({
            show: true,
            data: modal
        });
    };

    const handleModalClose = () => {
        setShowModal({
            show: false,
            data: null
        });
    };

    const handleDeleteExperience = (event, id) => {
        event.preventDefault();
        handleModalClose();
        deleteExperience(id, history);
    };

    return experience.length > 0 ? (
        <Row className="my-5">

            <h3>Working Experiences</h3>

            <Table bordered className="mt-3 mb-5">
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center">Company</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">From / To</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        experiencesRows
                    }
                </tbody>
            </Table>

            <Modal show={showModal.show} onHide={ () => handleModalClose() }>
                <Modal.Header closeButton>
                    <Modal.Title>Work Experience Full Information</Modal.Title>
                </Modal.Header>
                {
                    showModal.data !== null && showModal.data
                }
            </Modal>
            
        </Row>
    ) : null;
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    experience: state.profile.profile === null ? [] : state.profile.profile.experience
});

export default connect(
    mapStateToProps, {
        deleteExperience
    }
)(withRouter(Experience));