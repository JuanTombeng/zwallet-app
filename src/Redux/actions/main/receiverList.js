import { getRequest } from "../../../Helper/request";

export const GetTransferReceiverRequest = () => {
    return {
        type : `GET_TRANSFER_RECEIVER_REQUEST`
    }
}

export const GetTransferReceiverSuccess = (data) => {
    return {
        type : `GET_TRANSFER_RECEIVER_SUCCESS`,
        payload : data
    }
}

export const GetTransferReceiverFail = (error) => {
    return {
        type : `GET_TRANSFER_RECEIVER_FAIL`,
        payload : error
    }
}

export const GetTransferReceiver = (querySearch) => {
    return (dispatch) => {
        dispatch(GetTransferReceiverRequest())
        if (querySearch) {
            return getRequest(`/v2/contacts/contact-list?name=${querySearch}`)
            .then((res) => {
                const data = res.data?.data
                dispatch(GetTransferReceiverSuccess(data))
            })
            .catch((err) => {
                const message = err.message
                dispatch(GetTransferReceiverFail(message))
            })
        } else {
            return getRequest(`/v2/contacts/contact-list`)
            .then((res) => {
                const data = res.data?.data
                dispatch(GetTransferReceiverSuccess(data))
            })
            .catch((err) => {
                const message = err.message
                dispatch(GetTransferReceiverFail(message))
            })
        }
    }
}