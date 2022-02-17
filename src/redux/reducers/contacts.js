const initialState = {
    data: [],
    loading: false,
    error: false
}


const FetchUsers = (state = initialState, action={})=> {
    switch (action.type) {
        case 'GET_CONTACTS_REQUEST':
            return {...state, loading: true};
        case 'GET_CONTACTS_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'GET_CONTACTS_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
    
}

export default FetchUsers