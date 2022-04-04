import { postRequest } from "../../../Helper/request";

export const PostLoginRequest = () => {
    return {
        type : `POST_LOGIN_REQUEST`
    }
}

export const PostLoginSuccess = (data) => {
    return {
        type : `POST_LOGIN_SUCCESS`,
        payload : data
    }
}

export const PostLoginFail = (error) => {
    return {
        type : `POST_LOGIN_FAIL`,
        payload : error
    }
}

export const PostLogin = ({email, password}, navigate, setErrorMessage) => {
    return (dispatch) => {
        dispatch(PostLoginRequest())
        return postRequest({email : email, password : password}, `/v2/users/login`, 'POST', null)
            .then((res) => {
                const data = res.data?.data
                console.log(data[0].token)
                const token = data[0].token
                localStorage.setItem('auth', '0')
                localStorage.setItem('token', JSON.stringify(token))
                dispatch(PostLoginSuccess(data))
                dispatch(PostLoginSuccess(data))
                const retrievedToken = JSON.parse(localStorage.getItem('token'))
                if (retrievedToken) {
                    navigate("/welcome");
                }
            })
            .catch((err) => {
                switch (err.response.data.code) {
                    case 401 :
                        setErrorMessage('Sorry, your password is wrong! Please try again.')
                        break
                    case 403 :
                        setErrorMessage('Sorry, your account is not yet activated.')
                        break
                    case 404 :
                        setErrorMessage('Sorry, We cannot find your email! Please try again.')
                        break
                    case 500 :
                        setErrorMessage('Sorry, Our server is currently under maintenance. Please try again.')
                        break
                }
                const message = err.message
                dispatch(PostLoginFail(message))
            })
    }
}