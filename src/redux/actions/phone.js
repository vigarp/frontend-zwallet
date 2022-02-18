// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const GetUserPhoneRequest = () => {
    return {
        type: 'GET_USER_PHONE_REQUEST'
    }
}
export const GetUserPhoneResponse = (data) => {
    return {
        type: 'GET_USER_PHONE_RESPONSE',
        payload: data
    }
}
export const GetUserPhoneError = (error) => {
    return {
        type: 'GET_USER_PHONE_ERROR',
        payload: error
    }
}

export const GetUserPhone = () => {
    return (dispatch) => {
        dispatch(GetUserPhoneRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const userPhone = res.data?.data.phone
            dispatch(GetUserPhoneResponse(userPhone))
        })
        .catch((err) => {
            const message = err.message
            dispatch(GetUserPhoneError(message))
        })
    }
}