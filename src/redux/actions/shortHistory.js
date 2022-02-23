// import internal modules
import axios from 'axios';
import { decodeToken } from 'react-jwt';

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const GetShortHistoryRequest = () => {
    return {
        type: 'GET_SHORT_HISTORY_REQUEST'
    }
}
export const GetShortHistoryResponse = (data) => {
    return {
        type: 'GET_SHORT_HISTORY_RESPONSE',
        payload: data
    }
}
export const GetShortHistoryError = (error) => {
    return {
        type: 'GET_SHORT_HISTORY_ERROR',
        payload: error
    }
}

export const GetShortHistory = () => {
    return (dispatch) => {
        dispatch(GetShortHistoryRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo?.id}/history?limit=4`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const resultShortHistory = res.data?.data
            dispatch(GetShortHistoryResponse(resultShortHistory))
        })
        .catch((err) => {
            const message = err.message
            dispatch(GetShortHistoryError(message))
        })
    }
}