const initialState = {
    data : [],
    loading : false,
    error : false
}

const PutPhoneNumber = (state = initialState, action={}) => {
    switch (action.type) {
        case `PUT_PHONE_NUMBER_REQUEST` :
            return {...state, loading: true}
        case `PUT_PHONE_NUMBER_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `PUT_PHONE_NUMBER_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default PutPhoneNumber