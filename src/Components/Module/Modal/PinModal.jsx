import React, { useState, useEffect, Fragment } from 'react'
import Button from '../../Base/Button'
import closeIcon from '../../../Assets/Images/close-modal.svg'
import resetIcon from '../../../Assets/Images/reset-pin.svg'
import './Modal.css'

const PinModal = ({show, closeModal, modalTitle, modalSubtitle, children, resetPin, handleSubmit}) => {
    return (
        <Fragment>
            <div className='modal display-block'>
                <section className="modal-main-profile animation-fade-in">
                    <div className="modal-pin-header d-flex justify-content-between">
                        <div className="modal-title">
                            <h2>{modalTitle}</h2>
                        </div>
                        <div className="modal-close-button" onClick={closeModal}>
                            <img src={closeIcon} width={20} height={20} alt="" />
                        </div>
                    </div>
                    <div className="modal-pin-content d-flex flex-column">
                        <p>{modalSubtitle}</p>
                        <div className="modal-pin-wrapper d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex">{children}</div>
                            <div className="modal-pin-reset mt-3">
                                <p onClick={resetPin}>reset pin</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-button-area d-flex justify-content-end align-items-end">
                        <button onClick={handleSubmit} className='transfer-input-button'>Continue</button>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default PinModal