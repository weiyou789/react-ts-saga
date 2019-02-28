import { TestAction } from './actions';
import { REQUEST_TEST,RECEIVE_TEST,REQUEST_TEST_BTN,RECEIVE_TEST_BTN } from './actionTypes';

function testExample(state: object[] = [], action:TestAction) : object{
    switch (action.type){
        case REQUEST_TEST:
            return state
        case RECEIVE_TEST:
            return action.testExample1
        default:
            return state
    }
}

function testBtnData(state: object[] = [],action:TestAction) : object{
    //console.log(333,action)
    switch (action.type){
        case REQUEST_TEST_BTN:
            return state
        case RECEIVE_TEST_BTN:
            return action.testDataBtn
        default:
            return state
    }
}

const testReducer = {
    testExample,
    testBtnData
}

export default testReducer