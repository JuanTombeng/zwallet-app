import { getRequest } from "../../../Helper/request";

export const GetTransactionHistoryRequest = () => {
    return {
        type : `GET_TRANSACTION_HISTORY_REQUEST`
    }
}

export const GetTransactionHistorySuccess = (data) => {
    return {
        type : `GET_TRANSACTION_HISTORY_SUCCESS`,
        payload : data
    }
}

export const GetTransactionHistoryFail = (error) => {
    return {
        type : `GET_TRANSACTION_HISTORY_FAIL`,
        payload : error
    }
}

export const GetTransactionHistory = () => {
    return (dispatch) => {
        dispatch(GetTransactionHistoryRequest())
        return getRequest(`/v2/transactions/transaction-history`)
            .then((res) => {
                const data = res.data?.data
                dispatch(GetTransactionHistorySuccess(data))
            })
            .catch((err) => {
                const message = err.message
                dispatch(GetTransactionHistoryFail(message))
            })
    }
}