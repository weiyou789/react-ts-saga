import { all } from 'redux-saga/effects';
import { watchYieldDemo } from "./features/test/saga/testSaga";
import { watchYieldTest } from "./features/test2/saga/Test";

export default function* rootSaga() {
    yield all([
        watchYieldDemo(),
        watchYieldTest()
    ])
}