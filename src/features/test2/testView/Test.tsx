import * as React from 'react';
import { connect } from 'react-redux'
import {
    REQUEST_TEST, REQUEST_TEST_BTN
} from '../redux/actionTypes'


export interface testState{
    name:string;
    age: number;
}

export interface testState2{
    name:string;
    age: number;
}

interface Props {
    testExample:testState
    testDataBtn:testState2
    initData:(query:object)=>any
    initDataBtn:(query:object)=>any
}
class Test extends React.Component<Props>{
    public componentDidMount(){
        this.props.initData({name:'wyz'})
        //this.props.initDataBtn({name:'wyz'})
    }

    public render(){
        console.log(this.props)
        const { initDataBtn } = this.props
        return(
            <div className="hello">
                <div onClick={()=>initDataBtn({name:'wyz'})}>223323</div>
            </div>
        );
    }
}




const mapStateToProps = (state:Props):object =>{
    return {
        testExample:state.testExample,
        testDataBtn:state.testDataBtn
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return{
        initData:(query:object) => dispatch({type:REQUEST_TEST,query}),
        initDataBtn:(query:object) => dispatch({type:REQUEST_TEST_BTN,query}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);




