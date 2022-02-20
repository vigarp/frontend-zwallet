const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchReceiverDetail = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_RECEIVER_DETAIL_REQUEST':
            return {...state, loading: true};
        case 'GET_RECEIVER_DETAIL_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'GET_RECEIVER_DETAIL_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchReceiverDetail