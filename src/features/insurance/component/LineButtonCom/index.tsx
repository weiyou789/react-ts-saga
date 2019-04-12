import * as React from 'react'
import styles from './style/style.scss'

interface BtnProps {
    title?:string
    num?:number
    btnText:Array<string>
    onTapBtn:(index:number|string)=>any
    btnWidth?:Array<number>
}

interface BtnState {
    activeKey: number|string
}

export default class LineButtonCom extends React.Component<BtnProps, BtnState>{
    constructor(props) {
        super(props)
        this.state = {
            activeKey: ''
        }
    }

    static defaultProps: BtnProps = {
        btnWidth:[],
        btnText:[],
        onTapBtn:()=>{

        }
    }

    render(){
        const { title, btnText, btnWidth } = this.props;
        const { handleTouch } = this;
        const { activeKey } = this.state;
        return(
            <div className={styles.wrap}>
                <h2>
                    {title}
                </h2>
                <div className={styles.btn}>
                    <ul>
                        {btnText.map((item,index)=>{
                            return (
                                <li
                                    onClick={()=>handleTouch(index)}
                                    style={{width:btnWidth&&btnWidth.length>0?`${btnWidth[index]}rem`:'1.5rem'}}
                                    className={index===activeKey?styles.selectActive:''}
                                    key={index}>{item}</li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        )
    }

    private handleTouch = index => {
        if(index===this.state.activeKey){
            this.setState({
                activeKey:''
            },this.props.onTapBtn(''))
        }else{
            this.setState({
                activeKey:index
            },this.props.onTapBtn(index))
        }

    }

}

