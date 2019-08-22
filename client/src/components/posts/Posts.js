import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import SpinnerComponent from '../dashboard/SpinnerComponent';
import { getPosts } from '../../actions/post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostItem from '../posts/PostItem';

const Posts = ({ post: { posts, loading }, getPosts }) => {

    useEffect(() => {
        getPosts();
    }, [getPosts]);

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
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(
    mapStateToProps, {
        getPosts
    }
)(Posts);
