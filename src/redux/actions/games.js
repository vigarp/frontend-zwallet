import axios from 'axios'


export const GetGameRequest = ()=> {
    return {
        type: 'GET_GAME_REQUEST'
    }
}
export const GetGameSuccess = (data)=> {
    return {
        type: 'GET_GAME_SUCCESS',
        payload: data
    }
}
export const GetGameFail = (error)=> {
    return {
        type: 'GET_GAME_FAIL',
        payload: error
    }
}


export const GetGame = ()=> {
    return (dispatch) => {
        dispatch(GetGameRequest())
        return axios({
            method: 'GET',
            url: 'http://localhost:3001/api/v1/games/'
        }).then((res)=> {
           const data =  res.data?.data
           dispatch(GetGameSuccess(data))
           dispatch(GetGameSuccess(data))
        }).catch((err)=>{
            const message =  err.message
            dispatch(GetGameFail(message))
        })
    }
}