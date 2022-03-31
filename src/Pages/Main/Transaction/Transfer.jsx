import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IconName } from "react-icons/bs";

import Card from '../../../Components/Module/Card';
import Input from '../../../Components/Base/Input/'

import defaultPicture from '../../../Assets/Images/default.jpg'

import {GetTransferReceiver} from '../../../Redux/actions/main/receiverList'

const Transfer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const receiverList = useSelector((state) => state.GetTransferReceiver)
    useEffect(() => {
        dispatch(GetTransferReceiver())
    }, [])
    console.log(receiverList.data)
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column">
                <div className="wrapper-head d-flex flex-column">
                    <h4 className="summary-history-title">
                        Search Receiver
                    </h4>
                    <Input className='transfer-search' 
                    // icon='icon-search fa-magnifying-glass'
                    // onChange={handleChangeForm}
                    name="receiver"
                    // value={form.email}
                    type="text"
                    placeholder="Search receiver here"
                    />
                </div>
                <div className="wrapper-content d-flex flex-column">
                    {
                        receiverList.data?.map((item) => {
                            return <Card key={item.id}
                            profile_picture={item && item.profile_picture}
                            transaction_name={`${item.first_name} ${item.last_name}`}
                            transaction_subject={item.phone_number}
                            onClick={() => {
                                navigate(`/main/transfer-input/${item.id}`)
                            }}
                            />
                        })
                    }
                </div>
            </section>
        </Fragment>
    )
}

export default Transfer