// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const editPhoneRequest = () => {
    return {
        type: 'EDIT_PHONE_REQUEST'
    }
}
export const editPhoneResponse = (data) => {
    return {
        type: 'EDIT_PHONE_RESPONSE',
        payload: data
    }
}
export const editPhoneError = (error) => {
    return {
        type: 'EDIT_PHONE_ERROR',
        payload: error
    }
}

export const editPhone = (formDataPhone, setLoading) => {
    return (dispatch) => {
        dispatch(editPhoneRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/phone`,
            data: formDataPhone,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            setLoading(false)
            const resultEditPhone = res.data?.message
            dispatch(editPhoneResponse(resultEditPhone))
            alert(resultEditPhone)
        })
        .catch((err) => {
            setLoading(false)
            const message = err.message
            dispatch(editPhoneError(message))
            alert(message)
        })
    }
}