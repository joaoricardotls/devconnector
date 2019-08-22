import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Row, Col, Button, Badge } from 'react-bootstrap';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleLikePost } from '../../actions/post';
import SpinnerComponent from '../dashboard/SpinnerComponent';

const PostItem = ({
        post,
        auth,
        toggleLikePost
    }) => {

    const handleToggleLikePost = (event, id) => {
        event.preventDefault();
        toggleLikePost(id)
    };

    const handleViewDiscussion = (event, id) => {
        event.preventDefault();
        return null;
    };

    const handleDeletePost = (event, id) => {
        event.preventDefault();
        return null;
    };

    return auth.loading || auth.user === null ? <SpinnerComponent/> : (
        <Row className="mb-2 w-100">
            <Col xs={3} className="border p-3 bg-light d-flex flex-column justify-content-center align-items-center">
                <Image src={ post.avatar }
                       roundedCircle
                       className="border border-dark mb-2"
                       style={{ width: '150px', height: '150px' }}
                       />
                <h5 className="text-primary">
                    { post.name }
                </h5>
            </Col>
            <Col className="border bg-light px-4 pt-4 pb-2">
                
                <p className="p-3" style={{ fontSize: "1.3rem" }}>
                    { post.text }
                </p>

                <p className="text-muted">
                    Posted on <Moment format='YYYY/MM/DD'>{ post.date }</Moment>
                </p>

                <div>
                    <Button variant={ post.likes.some(p => p.user === auth.user._id) ? 'success' : 'secondary' }
                            className="mr-2"
                            title="Like / Unlike Post"
                            onClick={ e => handleToggleLikePost(e, post._id) }
                            >
                        <FontAwesomeIcon icon={ post.likes.some(p => p.user === auth.user._id) ? 'thumbs-up' : 'hand-point-right' }/>
                        <span className="mx-2">{ post.likes.some(p => p.user === auth.user._id) ? 'Liked!' : 'Like' }</span>
                        <Badge variant={ post.likes.some(p => p.user === auth.user._id) ? 'success' : 'secondary' }>
                            { post.likes.length }
                        </Badge>
                    </Button>
                    <Button variant="info"
                            className="mr-2"
                            title="View Discussion"
                            onClick={ e => handleViewDiscussion(e, post._id) }
                            >
                        <FontAwesomeIcon icon="comments"/>
                        <span className="mx-2">Discussion</span>
                        <Badge variant="info">
                            { post.comments.length }
                        </Badge>
                    </Button>
                {
                    auth.user !== null &&
                    auth.user._id === post.user &&
                    <Button variant="danger"
                            className=""
                            title="Delete Post"
                            onClick={ e => handleDeletePost(e, post._id) }
                            >
                        <FontAwesomeIcon icon="times"/>
                    </Button>
                }
                </div>

            </Col>
        </Row>
    );
};

PostItem.propTypes = {
    toggleLikePost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps, {
        toggleLikePost
    }
)(withRouter(PostItem));