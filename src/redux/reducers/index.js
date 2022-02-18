// import internal modules
import { combineReducers } from "redux";

// import external modules
import contacts from './contacts';
import balance from './balance';
import phone from './phone';

const rootReducers = combineReducers({
    contacts,
    balance,
    phone

})

export default rootReducers