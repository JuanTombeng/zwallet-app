import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../../Components/Module/Card';
import PinModal from '../../../Components/Module/Modal/PinModal';

import defaultPicture from '../../../Assets/Images/default.jpg'

import {PostTransaction} from '../../../Redux/actions/main/createTransfer'

const TransferConfirmation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [receiver, setReceiver] = useState(null)
    const {id} = useParams()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    const [transferDetail, setTransferDetail] = useState(null)
    const [balanceLeft, setBalanceLeft] = useState(0)
    const [transferDate, setTransferDate] = useState(new Date())
    const [pinModal, setPinModal] = useState(false)
    const [pin, setPin] = useState(new Array(6).fill(''))
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token')) 
        axios({
            baseURL : process.env.REACT_APP_URL_BACKEND,
            method : 'GET',
            url : `/v2/contacts/contact-list/member/${id}`,
            headers : {'Authorization': `Bearer ${token}`}
        })
        .then((res) => {
            const result = res.data.data[0]
            setReceiver(result)
        })
        .catch((err) => {
            console.log(err.message)
        })
        const tempData = JSON.parse(localStorage.getItem('transfer-details'))
        setTransferDetail(tempData)
        // window.localStorage.removeItem('transfer-details');
        const timer = setInterval(() => {
            setTransferDate(new Date());
        }, 60 * 1000)
            return () => {
            clearInterval(timer)
        }
    }, [])


    const remainingBalance = () => {
        return (userProfile && userProfile.balance) - (parseInt(transferDetail && transferDetail.amount))
    }

    const handleModal = () => {
        setPinModal(!pinModal)
    }

    // const handleInputPin = (childData) => {
    //     setPin(childData)
    // }

    const handleChange = (element, index) => {
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
    
    const handleSubmit = () => {
        // console.log({...transferDetail, pin : parseInt(pin.join(''))})
        dispatch(PostTransaction(id, {...transferDetail, pin : parseInt(pin.join(''))}, navigate))
    }
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column h-100">
                <div className="wrapper-head d-flex flex-column">
                    <h4 className="summary-history-title">
                        Transfer To
                    </h4>
                </div>
                <div className="transfer-target-wrapper d-flex align-items-center px-4 py-3">
                    <img className='card-profile-round' src={receiver ? receiver.profile_picture : defaultPicture} alt="" />
                    <div className="d-flex flex-column mx-3 justify-content-center">
                        <h2>{`${receiver ? receiver.first_name : 'loading..'} ${receiver ? receiver.last_name : ''}`}</h2>
                        <p>{receiver && receiver.phone_number}</p>
                    </div>
                </div>
                <div className="transfer-confirmation-wrapper d-flex flex-column">
                    <h4>Details</h4>
                    <div className="transfer-confirmation-detail d-flex align-items-center px-4 py-3">
                        <div className="confirmation-detail d-flex flex-column mx-3 justify-content-center">
                            <p>Amount</p>
                            <h2>Rp {transferDetail && transferDetail.amount}</h2>
                        </div>
                    </div>
                    <div className="transfer-confirmation-detail d-flex align-items-center px-4 py-3">
                        <div className="confirmation-detail d-flex flex-column mx-3 justify-content-center">
                            <p>Balance Left</p>
                            <h2>Rp {remainingBalance()}</h2>
                        </div>
                    </div>
                    <div className="transfer-confirmation-detail d-flex align-items-center px-4 py-3">
                        <div className="confirmation-detail d-flex flex-column mx-3 justify-content-center">
                            <p>Date & Time</p>
                            <h2>{`${transferDate.toDateString()} - ${transferDate.getHours()}:${transferDate.getMinutes()}`}</h2>
                        </div>
                    </div>
                    <div className="transfer-confirmation-detail d-flex align-items-center px-4 py-3">
                        <div className="confirmation-detail d-flex flex-column mx-3 justify-content-center">
                            <p>Notes</p>
                            <h2>{transferDetail && transferDetail.notes}</h2>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button onClick={handleModal} className='transfer-input-button'>Continue</button>
                </div>
                <div className="modal-area-pin d-flex flex-column">
                    {
                        pinModal ? (
                            <PinModal show={pinModal} closeModal={handleModal} modalTitle={'Enter PIN to Transfer'}
                            modalSubtitle={'Enter your 6 digits PIN for confirmation to continue transferring money.'}
                            resetPin={handleResetPin} handleSubmit={handleSubmit} >
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
                                                onChange={e => handleChange(e.target, index)}
                                                onFocus={e => e.target.select()}
                                            />
                                        )
                                    })
                                }
                            </PinModal>
                        ) : null
                    }
                </div>
            </section>
        </Fragment>
    )
}

export default TransferConfirmation