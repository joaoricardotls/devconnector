import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_POSTS,
    POST_ERROR
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