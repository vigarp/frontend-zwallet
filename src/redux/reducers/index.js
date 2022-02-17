import { combineReducers } from "redux";

/*reducers */
import Games from './games'
// import User from './user'

const rootReducers = combineReducers({
    Games,
    // User,
    // ...
})

export default rootReducers