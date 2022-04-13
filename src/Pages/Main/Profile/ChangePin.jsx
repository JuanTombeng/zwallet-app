import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PutUserPin } from '../../../Redux/actions/main/changPin';
import Input from '../../../Components/Base/Input/'
import Button from '../../../Components/Base/Button'

import ErrorMessage from '../../../Components/Module/ErrorMessage/ErrorMessage';
import PinModal from '../../../Components/Module/Modal/PinModal';
import SuccessModal from '../../../Components/Module/Modal/SuccessModel';
import resetPin from '../../../Assets/Images/reset-pin.svg'
import './Profile.css'

const ChangePin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    const [errorMessage, setErrorMessage] = useState('')
    const [pinModal, setPinModal] = useState(true)
    const [successModal, setSuccessModal] = useState(false)
    const [showNewPin, setShowNewPin] = useState(false)
    const [pin, setPin] = useState(new Array(6).fill(''))
    const [newPin, setNewPin] = useState(new Array(6).fill(''))

    const handleResetPin = () => {
        setPin(new Array(6).fill(''))
    }
    const handleResetNewPin = () => {
        setNewPin(new Array(6).fill(''))
    }
    const handleModal = () => {
        setPinModal(!pinModal)
    }
    const handleChangePin = (element, index) => {
        if (isNaN(element.value)) return false
        const pinInt = [...pin.map((d, idx) => (idx === index ? element.value : d))]
        setPin(pinInt)
        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    }
    const handleChangeNew = (element, index) => {
        if (isNaN(element.value)) return false
        const pinInt = [...newPin.map((d, idx) => (idx === index ? element.value : d))]
        setNewPin(pinInt)
        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    }

    const handleSubmitNew = () => {
        if (newPin.join('').length < 6) {
            setErrorMessage('Your PIN must not be less than 6 digits')
            handleResetNewPin()
        } else {
            dispatch(PutUserPin({
                current_pin : parseInt(pin.join('')),
                new_pin : parseInt(newPin.join(''))
            }, setErrorMessage, setSuccessModal))
        }
    }
    const handleSubmit = () => {
        if (pin.join('').length < 6) {
            setErrorMessage('Your PIN must not be less than 6 digits')
            handleResetPin()
        } else if (pin.join('').length == 6) {
            if (userProfile.pin == pin.join('')) {
                setPinModal(!pinModal)
                setShowNewPin(!showNewPin)
                setErrorMessage('')
            } else {
                setErrorMessage('Your PIN is incorrect')
                handleResetPin()
            }
        }
    }

    const handleSubmitSuccess = () => {
        navigate('/main/profile')
    }
    return (
        <Fragment>
            {
                userProfile && 
                <section className="dashboard d-flex flex-column">
                    {
                        showNewPin ? (
                            <>
                                <div className="profile-header d-flex flex-column h-25 justify-content-evenly">
                                    <h3>Change PIN</h3>
                                    <p className='d-flex w-50 text-start'>Type your new 6 digits security PIN to use in Zwallet.</p>
                                </div>
                                <div className="profile-menubar d-flex flex-column align-items-center justify-content-evenly">
                                    <div className="d-flex justify-content-center w-50">
                                        {
                                            newPin.map((data, index) => {
                                                return (
                                                    <input
                                                        className="pin-confirm-input"
                                                        type="text"
                                                        name="otp"
                                                        maxLength="1"
                                                        key={index}
                                                        value={data}
                                                        onChange={e => handleChangeNew(e.target, index)}
                                                        onFocus={e => e.target.select()}
                                                    />
                                                )
                                            })
                                        }
                                        <img className='reset-pin-icon' src={resetPin} onClick={handleResetNewPin} width={20} alt="" />
                                    </div>
                                    {
                                        errorMessage ? <ErrorMessage content={errorMessage}></ErrorMessage> : null
                                    }
                                    <div className="d-flex w-50">
                                        <Button className='auth-button-ready' value='Change PIN' onClick={handleSubmitNew}></Button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="profile-header d-flex flex-column h-25 justify-content-evenly">
                                    <h3>Change PIN</h3>
                                    <p className='d-flex w-50 text-start'>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                                </div>
                                <div className="profile-menubar d-flex flex-column align-items-center justify-content-evenly">
                                    <Button className='auth-button-ready' value='Input Current PIN' onClick={handleModal}></Button>       
                                </div>
                            </>
                            
                            
                        )
                    }
                    {
                        pinModal ? (
                            <PinModal show={pinModal} closeModal={handleModal} modalTitle={'Enter Your current PIN first'}
                            modalSubtitle={'Enter your 6 digits PIN for confirmation to continue transferring money.'}
                            resetPin={handleResetPin} handleSubmit={handleSubmit} errorMessage={errorMessage} >
                                {
                                    pin.map((data, index) => {
                                        return (
                                            <input
                                                className="pin-confirm-input"
                                                type="text"
                                                name="otp"
                                                maxLength="1"
                                                key={index}
                                                value={data}
                                                onChange={e => handleChangePin(e.target, index)}
                                                onFocus={e => e.target.select()}
                                            />
                                        )
                                    })
                                }
                            </PinModal>
                        ) : null
                    }
                    {
                        successModal ? (
                            <SuccessModal modalTitle={'Success!'} modalSubtitle='Your PIN is Changed.'
                            handleSubmit={handleSubmitSuccess} >
                                <div className="d-flex">
                                    
                                </div>
                            </SuccessModal>
                        ) : null
                    }
                </section>
            }
        </Fragment>
    )
}

export default ChangePin