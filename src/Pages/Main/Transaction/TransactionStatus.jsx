import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../../Components/Module/Card';
import defaultPicture from '../../../Assets/Images/default.jpg'
import successIcon from '../../../Assets/Images/transfer-success.svg'
import failIcon from '../../../Assets/Images/transfer-success.svg'

import {GetUserDetails} from '../../../Redux/actions/main/userDetails'


const TransactionStatus = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [receiver, setReceiver] = useState(null)
    const {id} = useParams()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    const [transferDetail, setTransferDetail] = useState(null)
    const [transferDate, setTransferDate] = useState(new Date())

    useEffect(() => {
        dispatch((GetUserDetails()))
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
    console.log(transferDetail);
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column h-100">
                <div className="transfer-confirmation-wrapper d-flex flex-column">
                    <div className="d-flex flex-column align-items-center">
                        <img src={transferDetail && transferDetail.status === 1 ? successIcon : failIcon} width={70} height={70} alt="" />
                        <h2 className="transfer-status-title mt-3">
                            {transferDetail && transferDetail.status === 1 ? 'Transfer Success' : 'Transfer Failed'}
                        </h2>
                    </div>
                    <div className="transfer-confirmation-detail d-flex align-items-center px-4 py-3">
                        <div className="confirmation-detail d-flex flex-column mx-3 justify-content-center">
                            <p>Amount</p>
                            <h2>Rp {transferDetail && transferDetail.amount}</h2>
                        </div>
                    </div>
                    <div className="transfer-confirmation-detail d-flex align-items-center px-4 py-3">
                        <div className="confirmation-detail d-flex flex-column mx-3 justify-content-center">
                            <p>Balance Left</p>
                            <h2>Rp {userProfile ? userProfile.balance : 'loading...'}</h2>
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
                    <div className="transfer-target-wrapper d-flex align-items-center px-4 py-3">
                        <img className='card-profile-round' src={receiver ? receiver.profile_picture : defaultPicture} alt="" />
                        <div className="d-flex flex-column mx-3 justify-content-center">
                            <h2>{`${receiver ? receiver.first_name : 'loading..'} ${receiver ? receiver.last_name : ''}`}</h2>
                            <p>{receiver && receiver.phone_number}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end p-3">
                        <button onClick={() => {
                            window.localStorage.removeItem('transfer-details');
                            navigate('/main/home')
                        }} className='transfer-input-button'>Back to Home</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default TransactionStatus