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
/*console.log(2)
const startTime = moment()
startTime.startOf('hour').fromNow()
console.log(1,startTime)*/
//const nowTimeStamp = Date.now();
//const now = new Date(nowTimeStamp);

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
class FillIns extends React.Component<Props>{
    public onBtn = (cState:string) => {
        let inverseValue:any = !this.state[cState];
        this.setState({
            [cState]:inverseValue*1
        })
    }

    public jumpLink = (pathname:string, query:object) => {
        this.props.history.push({ pathname, query })
    }
    public state = {
        date: undefined,
        sex:1,
        plan:1,
        dataPrive:[
            {
                label: '100元/周',
                value: 1,
            },
            {
                label: '1000元/周',
                value: 2,
            },
            {
                label: '10000元/周',
                value: 3,
            }
        ],
        dataCycle:[
            {
                label: '10年',
                value: 1,
            },
            {
                label: '100年',
                value: 2,
            }
        ],
        pValue:[1],
        cValue:[1],
        iValue:""
    }
    public componentDidMount(){
        //console.log(this.props)
        //this.props.onIncrement('id1')
    }

    public render(){
        //const { demoData } = this.props
        //const {languageName,enthusiasmLevel} = demoData

        const { sex, plan, dataPrive, dataCycle, date, pValue, cValue, iValue } = this.state
        const { jumpLink } = this
         return(
            <div className={styles.insMain}>
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
                            <List.Item className={styles.list} arrow="horizontal">宝宝出生日期</List.Item>
                        </DatePicker>

                    <List.Item align='middle'>
                        <div className={styles.lists}>
                            <div className={styles.text}>
                                宝宝性别
                            </div>
                            <div className={styles.right}>
                                <div className={`${styles.btn} ${sex?styles.active:''}`} onClick={()=>this.onBtn('sex')}>
                                    男
                                </div>
                                <div className={`${styles.btn} ${sex?'':styles.active}`} onClick={()=>this.onBtn('sex')}>
                                    女
                                </div>
                            </div>
                        </div>

                    </List.Item>
                    <List.Item className={styles.lists}>
                        <div className={styles.lists}>
                            <div className={styles.text}>
                                投保计划
                            </div>
                            <div className={styles.right}>
                                <div className={`${styles.btn} ${plan?styles.active:''}`} onClick={()=>this.onBtn('plan')}>
                                    每周待扣
                                </div>
                                <div className={`${styles.btn} ${plan?'':styles.active}`} onClick={()=>this.onBtn('plan')}>
                                    任意投
                                </div>
                            </div>
                        </div>

                    </List.Item>
                        <div style={{'display':`${plan?'block':'none'}`}}>
                            <Picker
                                data={dataPrive} cols={1}
                                value={this.state.pValue}
                                onPickerChange={pValue => this.setState({pValue})}
                                onOk={pValue => this.setState({pValue})}
                            >
                                <List.Item className={styles.list} arrow="horizontal">代扣金额</List.Item>
                            </Picker>
                            <Picker
                                data={dataCycle} cols={1}
                                value={this.state.cValue}
                                onPickerChange={cValue => this.setState({cValue})}
                                onOk={cValue => this.setState({cValue})}
                            >
                                <List.Item className={styles.list} arrow="horizontal">代扣周期</List.Item>
                            </Picker>
                        </div>
                        <div style={{'display':`${plan?'none':'block'}`}}>
                            <InputItem
                                type="money"
                                className={styles.list}
                                placeholder="请输入金额500元起"
                                extra="元"
                                clear
                                onChange={(iValue) => this.setState({iValue})}
                                onBlur={(iValue) => this.setState({iValue})}
                                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                            >保费</InputItem>
                        </div>
                    </List>
                </div>
                <div className={styles.trial}>
                    <p>您为宝贝准备的大学立业费为:<span>12.23</span>万元</p>
                    <div className={styles.trialIcon} onClick={()=>{ jumpLink('/ins/trial',{sex,plan,date,pValue,cValue,iValue}) }}>
                        <i className={styles.icon}></i>
                        <i>目标价值</i>
                    </div>

                </div>
                <div className={styles.moneyDetial}>
                    <dl>
                        <dt>
                            领取金额详情
                        </dt>
                        <dd>
                            <ul>
                                <li>
                                    <span>18-24周岁</span>
                                    <p>每年可领取xx元，总计xx元</p>
                                </li>
                                <li>
                                    <span>18-24周岁</span>
                                    <p>每年可领取xx元，总计xx元</p>
                                </li>
                                <li>
                                    <span>18-24周岁</span>
                                    <p>每年可领取xx元，总计xx元</p>
                                </li>
                                <li>
                                    <span>18-24周岁</span>
                                    <p>每年可领取xx元，总计xx元</p>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <div className={styles.tip}>投保次年起可随时提取，上述领取金额为固定领取发放</div>
                </div>

                <div className={styles.productDetial}>
                    <span>产品详情</span>
                    <i>查看详情 ></i>
                </div>

                <div className={styles.banner}>

                </div>

                <div className={styles.fixedBottom}>
                    <span>
                        <i>260</i>元
                    </span>
                    <div className="btn">
                        立即投保
                    </div>
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
)(FillIns);



