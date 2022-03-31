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

export const GetTransferReceiver = () => {
    return (dispatch) => {
        dispatch(GetTransferReceiverRequest())
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