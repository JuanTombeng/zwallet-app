const initialState = {
    data : [],
    loading : false,
    error : false
}

const GetTransferReceiver = (state = initialState, action={}) => {
    switch (action.type) {
        case `GET_TRANSFER_RECEIVER_REQUEST` :
            return {...state, loading: true}
        case `GET_TRANSFER_RECEIVER_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `GET_TRANSFER_RECEIVER_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default GetTransferReceiver