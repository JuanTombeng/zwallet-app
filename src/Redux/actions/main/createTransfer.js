import { postRequest } from "../../../Helper/request";
export const PostTransactionRequest = () => {
    return {
        type : `POST_TRANSACTION_REQUEST`
    }
}

export const PostTransactionSuccess = (data) => {
    return {
        type : `POST_TRANSACTION_SUCCESS`,
        payload : data
    }
}

export const PostTransactionFail = (error) => {
    return {
        type : `POST_TRANSACTION_FAIL`,
        payload : error
    }
}

export const PostTransaction = (id, {to_user_id, amount, transaction_type, notes, pin}, navigate) => {
    console.log(to_user_id, amount, transaction_type, notes, pin)
    return (dispatch) => {
        dispatch(PostTransactionRequest())
        return postRequest({
            to_user_id : to_user_id,
            amount : parseInt(amount),
            transaction_type : transaction_type,
            notes : notes,
            pin : pin
        }, '/v2/transactions/create').then((res) => {
            const data = res.data?.data
            dispatch(PostTransactionSuccess(data))
            if (data.transfer.affectedRows === 1) {
                localStorage.setItem('transfer-details', JSON.stringify({
                    to_user_id : to_user_id,
                    amount : amount,
                    transaction_type : transaction_type,
                    notes : notes,
                    pin : pin,
                    status : 1
                }))
                navigate(`/main/transfer-status/${id}`)
            } else {
                localStorage.setItem('transfer-details', JSON.stringify({
                    to_user_id : to_user_id,
                    amount : amount,
                    transaction_type : transaction_type,
                    notes : notes,
                    pin : pin,
                    status : 0
                }))
                navigate(`/main/transfer-status/${id}`)
            }
        }).catch((err) => {
            const message = err.message
            dispatch(PostTransactionFail(message))
            console.log(err)
        })
    }
}