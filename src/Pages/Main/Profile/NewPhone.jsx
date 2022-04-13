import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../Components/Base/Input/'
import Button from '../../../Components/Base/Button'
import ErrorMessage from '../../../Components/Module/ErrorMessage/ErrorMessage';
import SuccessModal from '../../../Components/Module/Modal/SuccessModel';

import {PutPhoneNumber} from '../../../Redux/actions/main/changePhoneNumber'

import trashIcon from '../../../Assets/Images/trash-icon.svg'
import './Profile.css'

const NewPhone = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    const [successModal, setSuccessModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setPhoneNumber(e.target.value)
    }
    const handleSubmit = () => {
        const formatNumber = phoneNumber.split('')
        let phone_number
        if (formatNumber[0] == 0) {
            formatNumber.shift(0)
            phone_number = formatNumber.join('')
            phone_number = '+62' + phone_number
        } else if (formatNumber[0] == 8) {
            phone_number = formatNumber.join('')
            phone_number = '+62' + phone_number
        } else if (phoneNumber.slice(0,2) == 62) {
            phone_number = '+' + phoneNumber
        }
        dispatch(PutPhoneNumber({phone_number}, setErrorMessage, setSuccessModal))
    }
    const handleSubmitSuccess = () => {
        navigate('/main/profile')
    }
    return (
        <Fragment>
            {
                userProfile && 
                <section className="dashboard d-flex flex-column">
                    <div className="profile-header d-flex flex-column h-25 justify-content-evenly">
                        <h3>Add Phone Number</h3>
                        <p className='d-flex w-50 text-start'>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                    </div>
                    <div className="profile-menubar d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex flex-column w-50">
                            <Input className='change-password-form' 
                            icon='icon-main-change-pass fa-solid fa-phone'
                            onChange={handleChange}
                            name="receiver"
                            value={phoneNumber}
                            type="number"
                            placeholder="Enter your phone number"
                            />
                            {
                                errorMessage ? <ErrorMessage content={errorMessage}></ErrorMessage> : null
                            }
                            <Button className='auth-button-ready mt-3' value='Change Phone Number' onClick={handleSubmit}></Button>  
                        </div>
                    </div>
                    {
                        successModal ? (
                            <SuccessModal modalTitle={'Success!'} modalSubtitle='Your Phone Number is Changed.'
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

export default NewPhone