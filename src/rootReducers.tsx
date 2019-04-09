import {combineReducers} from "redux";
import insReducer from "./features/insurance/redux/reduer";
const reducerMap = {
    ...insReducer
}

const rootReducer = combineReducers(reducerMap);
export default rootReducer;