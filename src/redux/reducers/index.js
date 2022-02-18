// import internal modules
import { combineReducers } from "redux";

// import external modules
import contacts from './contacts';
import balance from './balance';

const rootReducers = combineReducers({
    contacts,
    balance

})

export default rootReducers