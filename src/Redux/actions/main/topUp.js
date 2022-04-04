import { postRequest } from "../../../Helper/request";

export const PostTopUpRequest = () => {
    return {
        type : `POST_TOP_UP_REQUEST`
    }
}

export const PostTopUpSuccess = (data) => {
    return {
        type : `POST_TOP_UP_SUCCESS`,
        payload : data
    }
}

export const PostTopUpFail = (error) => {
    return {
        type : `POST_TOP_UP_FAIL`,
        payload : error
    }
}

export const PostTopUp = ({amount, pin}, setErrorMessage) => {
    return (dispatch) => {
        dispatch(PostTopUpRequest())
        return postRequest({
            amount : amount,
            topUpMethod : 'transfer', 
            pin : pin}, '/v2/transactions/topup')
        .then((res) => {
            const data = res.data?.data
            dispatch(PostTopUpSuccess(data))
        }).catch((err) => {
            switch (err.response.data.code) {
                case 400 :
                    setErrorMessage('Sorry, Your current PIN is incorrect.')
                    break
                case 403 :
                    setErrorMessage('Sorry, your account is not yet activated.')
                    break
                case 500 :
                    setErrorMessage('Sorry, Our server is currently under maintenance. Please try again.')
                    break
            }
            const message = err.message
            dispatch(PostTopUpFail(message))
        })
    }
}