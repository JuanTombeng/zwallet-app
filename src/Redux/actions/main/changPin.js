import { putRequest } from "../../../Helper/request";
import {GetUserDetails} from '../main/userDetails'

export const PutUserPinRequest = () => {
    return {
        type : `PUT_USER_PIN_REQUEST`
    }
}

export const PutUserPinSuccess = (data) => {
    return {
        type : `PUT_USER_PIN_SUCCESS`,
        payload : data
    }
}

export const PutUserPinFail = (error) => {
    return {
        type : `PUT_USER_PIN_FAIL`,
        payload : error
    }
}

export const PutUserPin = ({current_pin, new_pin}, setErrorMessage) => {
    return (dispatch) => {
        dispatch(PutUserPinRequest())
        return putRequest({
            current_pin : current_pin,
            new_pin : new_pin
        },
        '/v2/users/new-pin')
        .then((res) => {
            const data = res.data?.data
            dispatch(PutUserPinSuccess(data))
            dispatch(GetUserDetails())
        })
        .catch((err) => {
            switch (err.response.data.code) {
                case 400 :
                    setErrorMessage('Sorry, Your current PIN is not match.')
                    break
                case 403 :
                    setErrorMessage('Sorry, your account is not yet activated.')
                    break
                case 500 :
                    setErrorMessage('Sorry, Our server is currently under maintenance. Please try again.')
                    break
            }
            const message = err.message
            dispatch(PutUserPinFail(message))
        })
    }
}