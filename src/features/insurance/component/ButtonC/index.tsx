import * as React from 'react'
import styles from './style/style.scss'



interface BtnProps {
    btnText:string
    styleCus:object
    onTapBtn:(e:any)=>void
}

export default class ButtonC extends React.Component<BtnProps,{}>{

    constructor(props){
        super(props)
    }

    static defaultProps: BtnProps = {
        styleCus:{},
        btnText: '测试',
        onTapBtn: () => {
        }
    }

    render(){
        const { styleCus, btnText } = this.props;
        const { handleTouch } = this;
        return (
            <div className={styles.buttonC} style={styleCus} onClick={ handleTouch }>
                {btnText}
            </div>
        )

    }

    private handleTouch = e => {
        this.props.onTapBtn(e)
    }
}
