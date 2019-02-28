import {
    REQUEST_TEST,
    RECEIVE_TEST,
    REQUEST_TEST_BTN,
    RECEIVE_TEST_BTN
} from './actionTypes'

export interface IRequestTest{
    type:REQUEST_TEST,
    query:object
}

export interface IReceiveTest{
    type:RECEIVE_TEST
    query:object
    testExample1:object[]
}

export interface IRequestTestBtn{
    type:REQUEST_TEST_BTN,
    query:object
}

export interface IReceiveTestBtn{
    type:RECEIVE_TEST_BTN
    query:object
    testDataBtn:object[]
}

export type TestAction = IRequestTest | IReceiveTest| IRequestTestBtn| IReceiveTestBtn;

