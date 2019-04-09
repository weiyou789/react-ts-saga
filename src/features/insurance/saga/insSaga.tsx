import { call, put, takeEvery } from 'redux-saga/effects'
import { EnthusiasmAction } from '../redux/actions'
import { INCREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM_FINISH } from '../redux/actionTypes'
//import { fetchTest } from './services'
import { fetchInfo } from './services'

function* yieldIns(action:EnthusiasmAction) {
    const res = yield call(fetchInfo, action.Id)
    console.log(112,res)
    //const { data } = demoData
    const demoData = res.data
    yield put({ type: INCREMENT_ENTHUSIASM_FINISH, demoData })
}

export function* watchYieldIns() {
    yield takeEvery(INCREMENT_ENTHUSIASM, yieldIns)
    //alert(454)
}