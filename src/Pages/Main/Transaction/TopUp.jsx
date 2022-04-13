import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {PostTopUp} from '../../../Redux/actions/main/topUp'
import ErrorMessage from '../../../Components/Module/ErrorMessage/ErrorMessage';
import Input from '../../../Components/Base/Input/'
import Button from '../../../Components/Base/Button'
import PinModal from '../../../Components/Module/Modal/PinModal';
import SuccessModal from '../../../Components/Module/Modal/SuccessModel';


const TopUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    const [errorMessage, setErrorMessage] = useState('')
    const [amount, setAmount] = useState('')
    const [pinModal, setPinModal] = useState(false)
    const [pin, setPin] = useState(new Array(6).fill(''))
    const [successModal, setSuccessModal] = useState(false)
    const [errorAmountMessage, setErrorAmountMessage] = useState(false)

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
    const handleResetPin = () => {
        setPin(new Array(6).fill(''))
    }
    const handleChange = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
    }
    const handleSubmit = () => {
        if (parseInt(pin.join('')) === userProfile.pin) {
            console.log(pin.join(''))
            console.log(typeof amount);
            dispatch(PostTopUp({
                amount : parseInt(amount),
                pin : parseInt(pin.join(''))
            }, setErrorMessage, setSuccessModal, setPinModal))
        } else {
            setErrorMessage('Your PIN is incorrect')
        }
    }
    const handleSubmitSuccess = () => {
        navigate('/main/home')
    }
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column h-100">
                {
                    errorAmountMessage ? (
                        <div className="alert">
                            <span className="closebtn" onClick={() => {
                                setErrorAmountMessage(!errorAmountMessage)
                            }}>&times;</span>  
                            <strong>Warning!</strong> Please Input The Amount Top Up Correctly.
                        </div>
                    ) : null
                }
                <div className="wrapper-head d-flex flex-column pb-3">
                    <h4 className="summary-history-title">
                        Top Up Your Account
                    </h4>
                </div>
                <div className="transfer-input-area d-flex flex-column h-100 justify-content-between">
                    <p>Type the amount you want to transfer and then press continue to the next steps.</p>
                    <div className="d-flex flex-column align-items-center">
                        <input name='amount' 
                        value={amount} onChange={handleChange} 
                        className='transfer-input-tag' type="number" placeholder='0.00'/>
                        <h4>Current Balance : Rp. {userProfile ? userProfile.balance : 'Balance'}</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <button 
                        onClick={() => {
                            if (amount < 1000 || amount === '') {
                                setErrorAmountMessage(true)
                            } else {
                                handleModal()
                            }
                        }} 
                        className='transfer-input-button'>Top Up</button>
                    </div>
                    {
                        pinModal ? (
                            <PinModal show={pinModal} closeModal={handleModal} modalTitle={'Enter PIN to Transfer'}
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
                            <SuccessModal modalTitle={'Success!'} modalSubtitle='Top Up Proccess is Completed.'
                            handleSubmit={handleSubmitSuccess} >
                                <div className="d-flex">
                                    <h2 className='success-add-receiver'>{`Top Up Rp ${amount} is added to your current balance.`}</h2>     
                                </div>
                            </SuccessModal>
                        ) : null
                    }
                </div>
            </section>
        </Fragment>
    )
}

export default TopUp