import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '../../../Components/Module/Card';
import Input from '../../../Components/Base/Input/'
import Button from '../../../Components/Base/Button'
import SuccessModal from '../../../Components/Module/Modal/SuccessModel';
import {GetTransferReceiver} from '../../../Redux/actions/main/receiverList'


const AddReceiver = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState({phone_number : ''})
    const [receivers, setReceivers] = useState([])
    const [token, setToken] = useState('')
    const receiverList = useSelector((state) => state.GetTransferReceiver)
    const [errorReceiverSelect, setErrorReceiverSelect] = useState(false)
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    
    const handleChangeSearch = (e) => {
        e.preventDefault()
        setForm({
            [e.target.name] : e.target.value
        })
    }
    
    const handleAddReceiver = () => {
        const checkReceiver = receiverList.data.findIndex((item) => {
            return item.phone_number == form.phone_number
        })
        console.log(checkReceiver)
        if (checkReceiver == '-1') {
            axios({
                baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
                method : 'POST',
                data : {phone_number : form.phone_number},
                url : `/v2/contacts/add-contact-list`,
                headers : {'Authorization': `Bearer ${token}`}
            }).then((res) => {
                const data = res.data?.data
                setModal(!modal)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            setErrorReceiverSelect(true)
        }
    }

    const handleReceiverSubmit = () => {
        dispatch(GetTransferReceiver())
        navigate('/main/transfer')
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        setToken(token)
        dispatch(GetTransferReceiver())
    }, [])
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column">
                {
                    errorReceiverSelect ? (
                        <div className="alert">
                            <span className="closebtn" onClick={() => {
                                setErrorReceiverSelect(!errorReceiverSelect)
                                setForm({phone_number : ''})
                                setReceivers([])
                            }}>&times;</span>  
                            <strong>Warning!</strong> {`${receivers[0].first_name} is already in your contact list.`}
                        </div>
                    ) : null
                }
                <div className="wrapper-head d-flex justify-content-between">
                    <h4 className="summary-history-title">
                    Search other user with their phone number.
                    </h4>
                </div>
                <Input className='add-receiver-search'
                onChange={handleChangeSearch}
                name="phone_number"
                value={form.phone_number}
                type="text"
                placeholder="Search receiver here"
                onKeyPress={(e) => {
                    if (e.key == 'Enter') {
                        let temp = form.phone_number.split('').splice(0,1)
                        let phoneLength = form.phone_number.length
                        if (temp.join('') == '0') {
                            temp = form.phone_number.split('').splice(1,phoneLength)
                            temp = `+62${temp.join('')}`
                            axios({
                                baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
                                method : 'GET',
                                url : `/v2/users/receiver/${temp}`,
                                headers : {'Authorization': `Bearer ${token}`}
                            }).then((res) => {
                                const data = res.data?.data
                                const filtered = data.filter((item) => {
                                    return item.id != userProfile.id
                                })
                                setReceivers(filtered)
                            }).catch((err) => {
                                console.log(err)
                            })
                        } else if (form.phone_number.split('').splice(0,3).join('') == '+62') {
                            axios({
                                baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
                                method : 'GET',
                                url : `/v2/users/receiver/${form.phone_number}`,
                                headers : {'Authorization': `Bearer ${token}`}
                            }).then((res) => {
                                const data = res.data?.data
                                const filtered = data.filter((item) => {
                                    return item.id != userProfile.id
                                })
                                setReceivers(filtered)
                            }).catch((err) => {
                                console.log(err)
                            })
                        }
                    }
                }}
                /> 
                <div className="receiver-wrapper-content d-flex justify-content-between">
                    {receivers?.length == 0 ? (
                            <p className='receivers-not-found'>No User Found.</p>
                        ) : (
                            receivers.map((item) => {
                                    return <Card key={item.id}
                                    profile_picture={item && item.profile_picture}
                                    transaction_name={`${item.first_name} ${item.last_name}`}
                                    transaction_subject={item.phone_number}
                                    />                            
                            })
                        )}
                    {receivers?.length != 0 ? (
                            <Button className='transfer-add-contact-button' value='Add Receiver' onClick={handleAddReceiver}></Button>
                        ) : null}

                </div>
                <div className="d-flex justify-content-center">
                    {
                        modal ? (
                            <SuccessModal modalTitle={'Success!'} modalSubtitle='New Receiver Added.'
                            handleSubmit={handleReceiverSubmit} >
                                <div className="d-flex">
                                    <img className='success-add-img' src={receivers[0].profile_picture} alt="" />
                                    <div className="d-flex flex-column ms-3">
                                        <h2 className='success-add-receiver'>{receivers[0].first_name}</h2>
                                        <h3 className='success-add-receiver-sub'>{receivers[0].phone_number}</h3>
                                    </div>
                                </div>
                            </SuccessModal>
                        ) : (
                            null
                        )
                    }
                </div>
            </section>
        </Fragment>
    )
}

export default AddReceiver