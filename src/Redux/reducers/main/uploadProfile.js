const initialState = {
    data : [],
    loading : false,
    error : false
}

const PostProfilePicture = (state = initialState, action={}) => {
    switch (action.type) {
        case `POST_PROFILE_PICTURE_REQUEST` :
            return {...state, loading: true}
        case `POST_PROFILE_PICTURE_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `POST_PROFILE_PICTURE_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default PostProfilePicture