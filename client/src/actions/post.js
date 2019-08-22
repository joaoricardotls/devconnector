import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_POSTS,
    POST_ERROR,
    LIKE_UNLIKE_POST
} from './types';
import dispatchError from '../utilities/dispatchProfileError'

// Get posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('api/posts');
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (err) {
        dispatchError(dispatch, POST_ERROR, err);
    };
};

// Like or unlike a post
export const toggleLikePost = postId => async dispatch => {
    try {
        const res = await axios.put(`api/posts/${postId}/like`);
        const payload = {
            id: postId,
            likes: res.data
        };
        dispatch({
            type: LIKE_UNLIKE_POST,
            payload: payload
        })
    } catch (err) {
        dispatchError(dispatch, POST_ERROR, err);
    };
};