import {
    GET_POSTS,
    POST_ERROR,
    LIKE_UNLIKE_POST
} from "../actions/types";

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {

    const {
        type,
        payload
    } = action;

    switch (type) {

        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false,
            };

        case LIKE_UNLIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post._id === payload.id) {
                        return {
                            ...post,
                            likes: payload.likes
                        };
                    };
                    return { ...post }
                }),
                loading: false
            }

        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };

        default:
            return state;
    };
};