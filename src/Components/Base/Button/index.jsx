import React from 'react'
import './button.css'

const Button = ({children, disabled, icon, value, ...props}) => {
    return (
        <>
            <button disabled={disabled ? true : false} {...props}>{disabled ? value : value}</button>
            {/* <i className={icon} ></i> */}
        </>
    )
}

export default Button