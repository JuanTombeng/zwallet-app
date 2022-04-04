import { putRequest } from "../../../Helper/request";

export const PutPhoneNumberRequest = () => {
    return {
        type : `PUT_PHONE_NUMBER_REQUEST`
    }
}

export const PutPhoneNumberSuccess = (data) => {
    return {
        type : `PUT_PHONE_NUMBER_SUCCESS`,
        payload : data
    }
}

export const PutPhoneNumberFail = (error) => {
    return {
        type : `PUT_PHONE_NUMBER_FAIL`,
        payload : error
    }
}

export const PutPhoneNumber = ({phone_number}, setErrorMessage) => {
    return (dispatch) => {
        dispatch(PutPhoneNumberRequest())
        return putRequest({new_phone_number : phone_number}, '/v2/users/new-phone')
        .then((res) => {
            const data = res.data?.data
            dispatch(PutPhoneNumberSuccess(data))
        })
        .catch((err) => {
            const message = err.message
            dispatch(PutPhoneNumberFail(message))
            setErrorMessage(err.response.data.message)
        })
    }
}