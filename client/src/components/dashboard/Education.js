import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { deleteEducation } from "../../actions/profile";
import Moment from 'react-moment';
import { Row, Table, Button, Modal, Container } from 'react-bootstrap';

const Education = ({ education, deleteEducation, history }) => {

    const [showModal, setShowModal] = useState({
        show: false,
        data: null
    });

    const educationsRows = education.map( edu => (
        <tr key={ edu._id }>
            <td>{ edu.school }</td>
            <td>{ edu.degree }</td>
            <td>
                <Moment format='YYYY/MM/DD'>{ edu.from }</Moment>{' - '}{
                    edu.to === null ? 'Now' : (
                        <Moment format='YYYY/MM/DD'>{ edu.to }</Moment>
                    )
                }
            </td>
            <td className="text-center">
                <Button variant='secondary'
                        size="sm"
                        onClick={ e => handleFullInfoModal(e, edu._id) }>
                    Full Info
                </Button>
            </td>
            <td className="text-center">
                <Button variant='danger'
                        size="sm"
                        onClick={ e => handleDeleteEducation(e) }>
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
                    education.filter(edu => edu._id === id).map(edu => (
                        <Row key={edu._id} className="d-flex flex-column">
                            <h6 className="font-weight-bold">School:</h6>
                            <p>{ edu.school }</p>
                            <h6 className="font-weight-bold">Degree:</h6>
                            <p>{ edu.degree }</p>
                            <h6 className="font-weight-bold">Field of Study:</h6>
                            <p>{ edu.fieldofstudy }</p>
                            <h6 className="font-weight-bold">From:</h6>
                            <p><Moment format='YYYY/MM/DD'>{ edu.from }</Moment></p>
                            <h6 className="font-weight-bold">To:</h6>
                            <p>{
                                edu.to === null ? 'Now' : (
                                    <Moment format='YYYY/MM/DD'>{ edu.to }</Moment>
                                )
                            }</p>
                            <h6 className="font-weight-bold">Description:</h6>
                            <p>{ edu.description }</p>
                        </Row>
                    ))
                }
                </Container>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={ e => handleModalClose(e) }>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ e => handleDeleteEducation(e, id) }>
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

    const handleDeleteEducation = (event, id) => {
        event.preventDefault();
        handleModalClose();
        deleteEducation(id, history);
    };

    return education.length > 0 ? (
        <Row className="my-5">
            <h3>Education</h3>
            <Table bordered className="mt-3 mb-5">
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center">School</th>
                        <th className="text-center">Degree</th>
                        <th className="text-center">From / To</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        educationsRows
                    }
                </tbody>
            </Table>

            <Modal show={showModal.show} onHide={ e => handleModalClose(e) }>
                <Modal.Header closeButton>
                    <Modal.Title>Education Full Information</Modal.Title>
                </Modal.Header>
                {
                    showModal.data !== null && showModal.data
                }
            </Modal>
        </Row>
    ) : null;
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    education: state.profile.profile === null ? [] : state.profile.profile.education
});

export default connect(
    mapStateToProps, {
        deleteEducation
    }
)(withRouter(Education));