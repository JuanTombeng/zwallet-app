const initialState = {
    data : [],
    loading : false,
    error : false
}

const GetTransactionHistory = (state = initialState, action={}) => {
    switch (action.type) {
        case `GET_TRANSACTION_HISTORY_REQUEST` :
            return {...state, loading: true}
        case `GET_TRANSACTION_HISTORY_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `GET_TRANSACTION_HISTORY_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default GetTransactionHistory