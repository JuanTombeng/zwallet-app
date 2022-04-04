import React, { Fragment } from 'react';
import './ErrorMessage.css'

const ErrorMessage = ({content}) => {
    return (
        <Fragment>
            <div className="error-wrapper d-flex align-items-center justify-content-center">
                <p className='error-wrapper-text'>{content}</p>
            </div>
        </Fragment>
    )
}

export default ErrorMessage