// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const editPasswordRequest = () => {
    return {
        type: 'EDIT_PASSWORD_REQUEST'
    }
}
export const editPasswordResponse = (data) => {
    return {
        type: 'EDIT_PASSWORD_RESPONSE',
        payload: data
    }
}
export const editPasswordError = (error) => {
    return {
        type: 'EDIT_PASSWORD_ERROR',
        payload: error
    }
}

export const editPassword = (formDataPassword, setLoading, navigate) => {
    return (dispatch) => {
        dispatch(editPasswordRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/password`,
            data: formDataPassword,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            setLoading(false)
            const resultEditPassword = res.data?.message
            dispatch(editPasswordResponse(resultEditPassword))
            alert(resultEditPassword)
            navigate(-1)
        })
        .catch((err) => {
            setLoading(false)
            const message = err.response.data?.message
            dispatch(editPasswordError(message))
            alert(err.response.data.message)
        })
    }
}