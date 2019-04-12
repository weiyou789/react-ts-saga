import * as React from 'react'
import styles from './style/style.scss'



interface LineButton {
    title?:string
    num?:number
    btnText:any
}

export default (props:LineButton) => {
    const _title = props.title;
    const _btnArr = props.btnText;

    return (
        <div className={styles.wrap}>
            <h1>
                {_title}
            </h1>
            <div className={styles.btn}>
                <ul>
                    {_btnArr.map((item,index)=>{
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}