const initialState = {
    data : [],
    loading : false,
    error : false
}

const PostTransaction = (state = initialState, action={}) => {
    switch (action.type) {
        case `POST_TRANSACTION_REQUEST` :
            return {...state, loading: true}
        case `POST_TRANSACTION_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `POST_TRANSACTION_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default PostTransaction