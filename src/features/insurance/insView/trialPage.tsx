import * as React from 'react';
import { connect } from 'react-redux';
import { DatePicker, List } from 'antd-mobile'
import { LineButtonCom } from '../component'
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
    location?:any
}

class TrialPage extends React.Component<Props>{
    public state = {
        date: undefined,
        cityArr:['一线','二线','三线','其他'],
        citySelect:'',
        dirArr:['出国深造','国内重点本科','国内普通本科'],
        dirSelect:'',
        depArr:['本科','硕士','博士'],
        depSelect:''
    }
    public componentDidMount(){
        const { query } = this.props.location
        console.log(query)
        //this.props.onIncrement('id1')
    }

    public onTap = (index,select) =>{
        this.setState({
            [select]:index
        })

        //console.log(index,select)
    }

    public render(){
        //const { demoData } = this.props
        //const {languageName,enthusiasmLevel} = demoData
        const { onTap } = this;
        console.log(this.state.citySelect)
         return(
            <div className={styles.insMain}>

                <div className={styles.trialTip}>
                    <p className={styles.red}>100%的家长都为子女设置了大学立业费目标</p>
                    <p>根据选择项，我们为您测算未来需要的资金</p>
                </div>

                <div className={styles.formStepOne}>
                    <List>
                        <DatePicker
                            mode="date"
                            title="选择日期"
                            extra="请选择"
                            format="YYYY-MM-DD"
                            value={this.state.date}
                            onChange={date => this.setState({ date })}
                            onOk={date => this.setState({ date })}
                        >
                            <List.Item className={styles.list} arrow="horizontal">你家孩子生日</List.Item>
                        </DatePicker>
                    </List>
                </div>

                {/*{LineButton({title:'测试',btnText:['测试1','测试2']})}*/}
                <LineButtonCom
                    title="请选择期待孩子未来居住的城市"
                    btnText={this.state.cityArr}
                    onTapBtn={(index)=>onTap(index,'citySelect')}
                >
                </LineButtonCom>

                <LineButtonCom
                    btnWidth={[1.7,2.2,2.2]}
                    title="你期待孩子的学业方向"
                    btnText={this.state.dirArr}
                    onTapBtn={(index)=>onTap(index,'dirSelect')}
                >
                </LineButtonCom>

                <LineButtonCom
                    title="你期待孩子的学业深度"
                    btnText={this.state.depArr}
                    onTapBtn={(index)=>onTap(index,'depSelect')}
                >
                </LineButtonCom>


                <div className="bigbtn">

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
)(TrialPage);



