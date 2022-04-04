const initialState = {
    data : [],
    loading : false,
    error : false
}

const PutUserPin = (state = initialState, action={}) => {
    switch (action.type) {
        case `PUT_USER_PIN_REQUEST` :
            return {...state, loading: true}
        case `PUT_USER_PIN_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `PUT_USER_PIN_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default PutUserPin