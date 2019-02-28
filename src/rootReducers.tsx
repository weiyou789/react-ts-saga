import {combineReducers} from "redux";
import AppReducer2 from "./features/test/redux/reduer";
import testReducer from "./features/test2/redux/testReducer";
const reducerMap = {
    ...AppReducer2,
    ...testReducer
}

const rootReducer = combineReducers(reducerMap);
export default rootReducer;