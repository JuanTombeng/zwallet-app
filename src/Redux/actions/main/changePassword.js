import { putRequest } from "../../../Helper/request";

export const PutUserPasswordRequest = () => {
    return {
        type : `PUT_USER_PASSWORD_REQUEST`
    }
}

export const PutUserPasswordSuccess = (data) => {
    return {
        type : `PUT_USER_PASSWORD_SUCCESS`,
        payload : data
    }
}

export const PutUserPasswordFail = (error) => {
    return {
        type : `PUT_USER_PASSWORD_FAIL`,
        payload : error
    }
}

export const PutUserPassword = ({current_password, new_password, confirm_password}, setErrorMessage) => {
    return (dispatch) => {
        dispatch(PutUserPasswordRequest())
        return putRequest({
            current_password : current_password,
            new_password : new_password,
            confirm_password : confirm_password
        },
        '/v2/users/new-password')
        .then((res) => {
            const data = res.data?.data
            dispatch(PutUserPasswordSuccess(data))
        })
        .catch((err) => {
            switch (err.response.data.code) {
                case 401 :
                    setErrorMessage('Your current password is incorrect.')
                    break
                case 403 :
                    setErrorMessage('Sorry, your account is not yet activated.')
                    break
                case 500 :
                    setErrorMessage('Sorry, Our server is currently under maintenance. Please try again.')
                    break
            }
            const message = err.message
            dispatch(PutUserPasswordFail(message))
        })
    }
}