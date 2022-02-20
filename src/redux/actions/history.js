// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const GetUserHistoryRequest = () => {
    return {
        type: 'GET_USER_HISTORY_REQUEST'
    }
}
export const GetUserHistoryResponse = (data) => {
    return {
        type: 'GET_USER_HISTORY_RESPONSE',
        payload: data
    }
}
export const GetUserHistoryError = (error) => {
    return {
        type: 'GET_USER_HISTORY_ERROR',
        payload: error
    }
}

export const GetUserHistory = () => {
    return (dispatch) => {
        dispatch(GetUserHistoryRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/history?limit=5`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const resultHistory = res.data?.data
            dispatch(GetUserHistoryResponse(resultHistory))
        })
        .catch((err) => {
            const message = err.message
            dispatch(GetUserHistoryError(message))
        })
    }
}