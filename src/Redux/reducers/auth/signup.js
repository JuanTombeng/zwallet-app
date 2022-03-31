const initialState = {
    data : [],
    loading : false,
    error : false
}

const PostSignUp = (state = initialState, action={}) => {
    switch (action.type) {
        case `POST_SIGNUP_REQUEST` :
            return {...state, loading: true}
        case `POST_SIGNUP_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `POST_SIGNUP_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default PostSignUp