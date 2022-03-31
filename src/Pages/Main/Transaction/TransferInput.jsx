import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IconName } from "react-icons/bs";
import axios from 'axios';
import Card from '../../../Components/Module/Card';
import Input from '../../../Components/Base/Input/'

import {GetUserDetails} from '../../../Redux/actions/main/userDetails'

import defaultPicture from '../../../Assets/Images/default.jpg'


const TransferInput = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    const [receiver, setReceiver] = useState(null)
    const {id} = useParams()
    const [transferDetail, setTransferDetail] = useState({
        to_user_id : `${id}`,
        amount : '',
        transaction_type : 'transfer',
        notes : ''
    })
    const handleChangeFrom = (e) => {
        setTransferDetail({
            ...transferDetail,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = () => {
        console.log(transferDetail)
        localStorage.setItem('transfer-details', JSON.stringify(transferDetail))
        navigate(`/main/transfer-confirmation/${id}`)
    }
    useEffect(() => {
        dispatch(GetUserDetails())
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
    }, [])
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column h-100">
                <div className="wrapper-head d-flex flex-column">
                    <h4 className="summary-history-title">
                        Transfer Money
                    </h4>
                </div>
                <div className="transfer-target-wrapper d-flex align-items-center px-4 py-3">
                    <img  src={receiver ? receiver.profile_picture : defaultPicture} alt="" />
                    <div className="d-flex flex-column mx-3 justify-content-center">
                        <h2>{`${receiver ? receiver.first_name : 'loading..'} ${receiver ? receiver.last_name : ''}`}</h2>
                        <p>{receiver && receiver.phone_number}</p>
                    </div>
                </div>
                <div className="transfer-input-area d-flex flex-column h-100 justify-content-between">
                    <p>Type the amount you want to transfer and then press continue to the next steps.</p>
                    <div className="d-flex flex-column align-items-center">
                        <input name='amount' value={transferDetail.amount} onChange={handleChangeFrom} className='transfer-input-tag' type="number" placeholder='0.00'/>
                        <h4>Rp. {userProfile ? userProfile.balance : 'Balance'} Available</h4>
                        <input name='notes' value={transferDetail.notes} onChange={handleChangeFrom} className='transfer-input-notes' type="text" placeholder='Add some notes'/>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <button onClick={handleSubmit} className='transfer-input-button'>Continue</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default TransferInput