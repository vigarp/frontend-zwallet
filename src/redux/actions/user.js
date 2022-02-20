// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const GetUserDetailRequest = () => {
    return {
        type: 'GET_USER_DETAIL_REQUEST'
    }
}
export const GetUserDetailResponse = (data) => {
    return {
        type: 'GET_USER_DETAIL_RESPONSE',
        payload: data
    }
}
export const GetUserDetailError = (error) => {
    return {
        type: 'GET_USER_DETAIL_ERROR',
        payload: error
    }
}

export const GetUserDetail = () => {
    return (dispatch) => {
        dispatch(GetUserDetailRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo?.id}`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const userDetail = res.data?.data
            dispatch(GetUserDetailResponse(userDetail))
        })
        .catch((err) => {
            const message = err.message
            dispatch(GetUserDetailError(message))
        })
    }
}