import { postRequest } from "../../../Helper/request";
import {GetUserDetails} from '../main/userDetails'
export const PostProfilePictureRequest = () => {
    return {
        type : `POST_PROFILE_PICTURE_REQUEST`
    }
}

export const PostProfilePictureSuccess = (data) => {
    return {
        type : `POST_PROFILE_PICTURE_SUCCESS`,
        payload : data
    }
}

export const PostProfilePictureFail = (error) => {
    return {
        type : `POST_PROFILE_PICTURE_FAIL`,
        payload : error
    }
}

export const PostProfilePicture = (formData, setErrorMessage) => {
    return (dispatch) => {
        dispatch(PostProfilePictureRequest())
        return postRequest(formData, '/v2/users/profile-picture')
        .then((res) => {
            const data = res.data?.data
            dispatch(PostProfilePictureSuccess(data))
            dispatch(GetUserDetails())
            alert('Your profile picture is updated')
        })
        .catch((err) => {
            console.log(err.response.data.message)
            const message = err.message
            dispatch(PostProfilePictureFail())
            // setErrorMessage(err.response.data.message)
        })
    }
}