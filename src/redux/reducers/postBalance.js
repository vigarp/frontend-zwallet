const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPostBalance = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POST_BALANCE_REQUEST':
            return {...state, loading: true};
        case 'POST_BALANCE_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'POST_BALANCE_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchPostBalance