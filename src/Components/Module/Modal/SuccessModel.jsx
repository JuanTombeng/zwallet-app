import React, { useState, useEffect, Fragment } from 'react'
import Button from '../../Base/Button'

const SuccessModal = ({modalTitle, modalSubtitle, children, handleSubmit}) => {
    return (
        <Fragment>
            <div className='modal display-block'>
                <section className="modal-main-profile animation-fade-in">
                    <div className="modal-pin-header d-flex">
                        <div className="modal-title">
                            <h2>{modalTitle}</h2>
                        </div>
                    </div>
                    <div className="modal-pin-content d-flex flex-column">
                        <p>{modalSubtitle}</p>
                        <div className="modal-pin-wrapper d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex">{children}</div>
                        </div>
                    </div>
                    <div className="modal-button-area d-flex justify-content-end align-items-end">
                        <button onClick={handleSubmit} className='transfer-input-button'>Done</button>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default SuccessModal