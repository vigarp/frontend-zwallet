const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchUserBalance = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_USER_BALANCE_REQUEST':
            return {...state, loading: true};
        case 'GET_USER_BALANCE_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'GET_USER_BALANCE_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchUserBalance