import { getRequest } from "../../../Helper/request";

export const GetUserDetailsRequest = () => {
    return {
        type : `GET_USER_DETAILS_REQUEST`
    }
}

export const GetUserDetailsSuccess = (data) => {
    return {
        type : `GET_USER_DETAILS_SUCCESS`,
        payload : data
    }
}

export const GetUserDetailsFail = (error) => {
    return {
        type : `GET_USER_DETAILS_FAIL`,
        payload : error
    }
}

export const GetUserDetails = () => {
    return (dispatch) => {
        console.log('get user action')
        dispatch(GetUserDetailsRequest())
        return getRequest(`/v2/users/details`)
            .then((res) => {
                const data = res.data?.data
                console.log(data)
                dispatch(GetUserDetailsSuccess(data))
                dispatch(GetUserDetailsSuccess(data))
            })
            .catch((err) => {
                const message = err.message
                dispatch(GetUserDetailsFail(message))
                console.log(err)
            })
    }
}