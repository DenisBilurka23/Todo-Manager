import {combineReducers, createStore} from "redux";
import UserReducer from "./UserReducer";
import ListReducer from "./ListReducer";
const reducers = {
    UserReducer,
    ListReducer
}
const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer)
window.store= store
export default store