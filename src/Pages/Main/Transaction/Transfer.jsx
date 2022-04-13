import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,useSearchParams } from 'react-router-dom';
import { IconName } from "react-icons/bs";

import Card from '../../../Components/Module/Card';
import Input from '../../../Components/Base/Input/'
import Button from '../../../Components/Base/Button'

import defaultPicture from '../../../Assets/Images/default.jpg'

import {GetTransferReceiver} from '../../../Redux/actions/main/receiverList'

const Transfer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get("search");
    const receiverList = useSelector((state) => state.GetTransferReceiver)
    useEffect(() => {
        dispatch(GetTransferReceiver(querySearch))
    }, [querySearch])
    
    const handleAddContact = () => {
        navigate('/main/transfer-receiver')
    }
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setSearchParams({ search: e.target.value });
        }
    }
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column">
                <div className="wrapper-head d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="summary-history-title">
                            Search Receiver
                        </h4>
                        <Button className='transfer-add-contact-button' value='Add Receiver' onClick={handleAddContact}></Button>
                    </div>
                    <p>List of receivers from your contact list.</p>
                    <Input className='transfer-search' 
                    // icon='icon-search fa-magnifying-glass'
                    onKeyUp={handleSearch}
                    name="search"
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