import { call, put, takeEvery } from 'redux-saga/effects'
import { TestAction } from '../redux/actions'
import { REQUEST_TEST, RECEIVE_TEST,REQUEST_TEST_BTN,RECEIVE_TEST_BTN } from '../redux/actionTypes'
import { fetchTestData,fetchTestBtn } from  './services'

function* yieldTest(action:TestAction) {
    const testData = yield call(fetchTestData, action.query)
    const { testExample1 } = testData
    yield put({ type: RECEIVE_TEST, testExample1 })
}

function* yieldBtnTest(action:TestAction) {
    const testData2 = yield call(fetchTestBtn, action.query)
    const { testDataBtn } = testData2
    yield put({ type: RECEIVE_TEST_BTN, testDataBtn })
}

export function* watchYieldTest() {
    yield takeEvery(REQUEST_TEST, yieldTest)
    yield takeEvery(REQUEST_TEST_BTN, yieldBtnTest)
}