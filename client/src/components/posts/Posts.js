import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import SpinnerComponent from '../dashboard/SpinnerComponent';
import { getPosts } from '../../actions/post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostItem from '../posts/PostItem';
import { setAlert } from '../../actions/alert';

const Posts = ({ post: { posts, loading }, auth, getPosts, setAlert }) => {

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const handlers = {

        toggleLikePost: (event, id) => {
            event.preventDefault();
            setAlert({
                msg: `Post Liked. Post ID: ${id}`,
                alertType: 'success'
            });
        },
    
        deletePost: (event, id) => {
            event.preventDefault();
            setAlert({
                msg: `Post Deleted. Post ID: ${id}`,
                alertType: 'secondary'
            });
        },
    
        viewDiscussion: (event, id) => {
            event.preventDefault();
            setAlert({
                msg: `Show Discussion. Post ID: ${id}`,
                alertType: 'primary'
            });
        }
    };

    const handleLikeAndUnlike = (event, id) => {
        event.preventDefault();
        setAlert({
            msg: `Post Liked. Post ID: ${id}`,
            alertType: 'success'
        });
    };

    const handleDeletePost = (event, id) => {
        event.preventDefault();
        setAlert({
            msg: `Post Deleted. Post ID: ${id}`,
            alertType: 'secondary'
        });
    };

    const handleViewDiscussion = (event, id) => {
        event.preventDefault();
        setAlert({
            msg: `Show Discussion. Post ID: ${id}`,
            alertType: 'primary'
        });
    };

    return loading ? <SpinnerComponent/> : (

        <Container className="pt-4">

            <h2 className="text-center">
                Posts
            </h2>

            <Row className="text-center">
                <FontAwesomeIcon icon="comments"
                                 className="mx-auto mt-3"
                                 style={{ fontSize: '3rem' }}/>
            </Row>

            <Row className="text-center">
                <h4 className="mx-auto mt-4">
                    Welcome to the community!
                </h4>
            </Row>

            <Row className="mt-3 mb-5">
                <Container className="p-2 d-flex flex-column align-items-center">
                {
                    posts.map( post =>
                        <PostItem key={ post._id }
                                  post={ post }
                                  deletePost={ handleDeletePost }
                                  viewDiscussion={ handleViewDiscussion }
                                  toggleLikePost={ handleLikeAndUnlike }
                                  loggedUser={ auth.user }
                                  />
                    )
                }
                </Container>
            </Row>
            
        </Container>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post,
    auth: state.auth
});

export default connect(
    mapStateToProps, {
        getPosts,
        setAlert
    }
)(Posts);
