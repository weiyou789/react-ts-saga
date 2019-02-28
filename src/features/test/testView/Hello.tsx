import * as React from 'react';
import { connect } from 'react-redux';
import {
    INCREMENT_ENTHUSIASM
} from '../redux/actionTypes'
import styles from './style.scss'

export interface Demo{
    languageName:string;
    enthusiasmLevel?: number;
}

interface Props {
    demoData:Demo
    onIncrement:(Id:string)=>any
}
class Hello extends React.Component<Props>{
    public componentDidMount(){
        console.log(this.props)
        this.props.onIncrement('id1')
    }

    public render(){

        const { demoData } = this.props
        const {languageName,enthusiasmLevel} = demoData
        return(
            <div className={styles.hello}>
                <div className="greeting">
                    Hello{languageName+enthusiasmLevel}
                </div>
                <div>
                    <button>触发2221</button>
                </div>
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
)(Hello);



