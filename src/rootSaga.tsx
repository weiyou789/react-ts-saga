import { all } from 'redux-saga/effects';
import { watchYieldIns } from "./features/insurance/saga/insSaga";

export default function* rootSaga() {
    yield all([
        watchYieldIns()
    ])
}