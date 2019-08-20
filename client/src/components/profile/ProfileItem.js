import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Card, Badge } from 'react-bootstrap';

const ProfileItem = ({ profile }) => {
    return (
        <Row className="bg-light my-3 mx-auto p-4 border border-secondary rounded">
            <Col xs={6} md={4} className="d-flex justify-content-center align-items-center">
                <Image src={ profile.user.avatar }
                       roundedCircle
                       className="border border-dark"/>
            </Col>
            <Col>
                <Card className="h-100">
                    <Card.Header as="h4" className="font-weight-bold text-center">
                        { profile.user.name }
                    </Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Card.Title>
                                        { profile.status }
                                    </Card.Title>
                                    {
                                        profile.company &&
                                        <Card.Text>
                                            { profile.company }
                                        </Card.Text>
                                    }
                                    {
                                        profile.location &&
                                        <Card.Text>
                                            { profile.location }
                                        </Card.Text>
                                    }
                                    <Link to={`/profile/${profile.user._id}`}
                                          className="mx-auto">
                                        <Button>
                                            View profile
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Card.Text as="h5" className="d-flex flex-wrap">
                                    {
                                        profile.skills.map( skill =>
                                            <Badge key={ skill }
                                                   variant="info"
                                                   className="m-1">
                                                { skill }
                                            </Badge>
                                        )
                                    }
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Container>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
