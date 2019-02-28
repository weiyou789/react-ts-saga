var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { combineReducers } from "redux";
import AppReducer2 from "@src/reducers/demoStore";
import AppReducer from "@src/reducers/Test";
var reducerMap = __assign({}, AppReducer2, AppReducer);
var rootReducer = combineReducers(reducerMap);
export default rootReducer;
//# sourceMappingURL=rootReducers.js.map