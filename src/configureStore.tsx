import {createStore,applyMiddleware} from "redux";
import reducers from "./rootReducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()
export default function () {
    const store = createStore(reducers,applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga)
    return store;
}