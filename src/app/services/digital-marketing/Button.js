import digitalcss from './digitalcss.module.css'
export default function Button(props) {
    const style = {
        color: props.tcolor,
        backgroundColor: props.bcolor,
        borderColor: props.borderColor,
    }
    return (<div className={digitalcss.buttondiv}>

        <button style={style}><span>{props.text}</span></button>
    </div>)
}