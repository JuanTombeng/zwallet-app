import React from 'react'
import './button.css'

const Button = ({children, disabled, value, ...props}) => {
    return (
        <button disabled={disabled ? true : false} {...props}>{disabled ? value : value}</button>
    )
}

export default Button