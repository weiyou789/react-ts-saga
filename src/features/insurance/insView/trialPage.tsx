import * as React from 'react';
import { connect } from 'react-redux';
import { DatePicker, List, Picker, InputItem } from 'antd-mobile'
import {
    INCREMENT_ENTHUSIASM
} from '../redux/actionTypes'
import styles from '../styles/style.scss'

export interface Demo{
    languageName:string;
    enthusiasmLevel?: number;
}

interface Props {
    demoData:Demo
    onIncrement:(Id:string)=>any
}

class TrialPage extends React.Component<Props>{
    public state = {
    }
    public componentDidMount(){
        const { query } = this.props.location
        console.log(query)
        //this.props.onIncrement('id1')
    }

    public render(){
        //const { demoData } = this.props
        //const {languageName,enthusiasmLevel} = demoData
         return(
            <div className={styles.insMain}>

                试算页面

            </div>
        );
    }
}


const mapStateToProps = (state:Props):object =>{
    return {
        demoData:state.demoData
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return{
        onIncrement:(Id:string) => dispatch({type:INCREMENT_ENTHUSIASM,Id}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrialPage);



