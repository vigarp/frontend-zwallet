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
import user from './user';
import login from './login';
import editPic from './editPic';
import transferDetail from './transferDetail';
import signUp from './signUp';
import editPhone from './editPhone';
import editPassword from './editPassword';
import deletePhone from './deletePhone';

const rootReducers = combineReducers({
    contacts,
    balance,
    phone,
    shortHistory,
    history,
    receiverDetail,
    transfer,
    user,
    login,
    editPic,
    transferDetail,
    signUp,
    editPhone,
    editPassword,
    deletePhone


})

export default rootReducers