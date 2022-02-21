// import internal modules
import axios from "axios";

const tokenUser = localStorage.getItem('token');

export const GetTransferDetailRequest = () => {
    return {
        type: 'GET_TRANSFER_DETAIL_REQUEST'
    }
}
export const GetTransferDetailResponse = (data) => {
    return {
        type: 'GET_TRANSFER_DETAIL_RESPONSE',
        payload: data
    }
}
export const GetTransferDetailError = (error) => {
    return {
        type: 'GET_TRANSFER_DETAIL_ERROR',
        payload: error
    }
}

export const GetTransferDetail = (transferData) => {
    return (dispatch) => {
        dispatch(GetTransferDetailRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${transferData.receiver}`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const resultReceiver = res.data?.data
            dispatch(GetTransferDetailResponse(resultReceiver))
        })
        .catch((err) => {
            const message = err.message
            dispatch(GetTransferDetailError(message))
        })
    }
}