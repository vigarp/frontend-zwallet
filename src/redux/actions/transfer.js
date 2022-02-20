// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const PostTransferRequest = () => {
    return {
        type: 'POST_TRANSFER_REQUEST'
    }
}
export const PostTransferResponse = (data) => {
    return {
        type: 'POST_TRANSFER_RESPONSE',
        payload: data
    }
}
export const PostTransferError = (error) => {
    return {
        type: 'POST_TRANSFER_ERROR',
        payload: error
    }
}

export const PostTransfer = (transferData) => {
    return (dispatch) => {
        dispatch(PostTransferRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/transfer`,
            data: {
                receiver: transferData.receiver,
                amount: transferData.amount,
                notes: transferData.notes
            },
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const resultTransfer = res.data?.message
            dispatch(PostTransferResponse(resultTransfer))
            window.location.replace("transfer-success")
        })
        .catch((err) => {
            const message = err.message
            dispatch(PostTransferError(message))
            window.location.replace("transfer-failed")
        })
    }
}