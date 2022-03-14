import { postRequest } from "../../../Helper/request";

export const PostSignUpRequest = () => {
    return {
        type : `POST_SIGNUP_REQUEST`
    }
}

export const PostSignUpSuccess = (data) => {
    return {
        type : `POST_SIGNUP_SUCCESS`,
        payload : data
    }
}

export const PostSignUpFail = (error) => {
    return {
        type : `POST_SIGNUP_FAIL`,
        payload : error
    }
}

export const PostSignUp = ({email, username, password, pin}, navigate) => {
    return (dispatch) => {
        dispatch(PostSignUpRequest())
        return postRequest({username : username, email : email, password : password, pin : pin}, `/v2/users/signup`, 'POST', null)
            .then((res) => {
                const data = res.data?.data
                dispatch(PostSignUpSuccess(data))
                navigate("/main");

            })
            .catch((err) => {
                const message = err.message
                dispatch(PostSignUpFail(message))
                console.log(err)
            })
    }
}