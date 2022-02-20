// import internal modules
import { combineReducers } from "redux";

// import external modules
import contacts from './contacts';
import balance from './balance';
import phone from './phone';
import shortHistory from './shortHistory';
import history from './history';
import receiverDetail from './receiverDetail';
import transfer from './transfer';
import user from './user'

const rootReducers = combineReducers({
    contacts,
    balance,
    phone,
    shortHistory,
    history,
    receiverDetail,
    transfer,
    user



})

export default rootReducers