// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const deletePhoneRequest = () => {
    return {
        type: 'DELETE_PHONE_REQUEST'
    }
}
export const deletePhoneResponse = (data) => {
    return {
        type: 'DELETE_PHONE_RESPONSE',
        payload: data
    }
}
export const deletePhoneError = (error) => {
    return {
        type: 'DELETE_PHONE_ERROR',
        payload: error
    }
}

export const deletePhone = () => {
    return (dispatch) => {
        dispatch(deletePhoneRequest())
        return axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/phone`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const resultDeletePhone = res.data?.message
            dispatch(deletePhoneResponse(resultDeletePhone))
            alert(resultDeletePhone)
        })
        .catch((err) => {
            const message = err.message
            dispatch(deletePhoneError(message))
            alert(message)
        })
    }
}