import React, {Fragment} from 'react'
import './input.css'

const Input = (props) => {
    return (
       <Fragment>
            <i className={props.icon ? props.icon : null}></i>
            <input className={props.className ? props.className : `input`} {...props}  placeholder={props.placeholder}/>
            {/* <i className={props.seconicon ? props.seconicon : null} onClick={props.changeicon} ></i> */}
            {/* <i className={props.close} onClick={props.onClick} onChange={props.onChange}></i> */}
       </Fragment>
    )
}

export default Input