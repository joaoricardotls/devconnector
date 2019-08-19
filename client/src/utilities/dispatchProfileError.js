const dispatchProfileError = (dispatch, type, error) => {
    return dispatch({
        type: type,
        payload: {
            msg: error.response.statusText,
            status: error.status
        }
    });
};

export default dispatchProfileError;