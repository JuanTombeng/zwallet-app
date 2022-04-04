const initialState = {
    data : [],
    loading : false,
    error : false
}

const PostTopUp = (state = initialState, action={}) => {
    switch (action.type) {
        case `POST_TOP_UP_REQUEST` :
            return {...state, loading: true}
        case `POST_TOP_UP_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `POST_TOP_UP_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default PostTopUp