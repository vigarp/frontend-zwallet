const initialState = {
    data: [],
    loading: false,
    error: false
}


const Fetch = (state = initialState, action={})=> {
    switch (action.type) {
        case 'GET_GAME_REQUEST':
            return {...state, loading: true};
        case 'GET_GAME_SUCCESS':
            return {...state, loading: false, data: action.payload};
        case 'GET_GAME_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
    
}

export default Fetch