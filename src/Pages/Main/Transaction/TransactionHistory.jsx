import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { GetUserDetails } from '../../../Redux/actions/main/userDetails';
import {GetTransactionHistory} from '../../../Redux/actions/main/transactionHistory'

import Card from '../../../Components/Module/Card';

import defaultPicture from '../../../Assets/Images/default.jpg'

const TransactionHistory = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.UserDetails)
    const transactionHistory = useSelector((state) => state.GetTransactionHistory)
    useEffect(() => {
        dispatch(GetTransactionHistory())
    }, [])
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column">
                <div className="wrapper-head d-flex">
                    <h4 className="summary-history-title">
                        Transaction History
                    </h4>
                </div>
                <div className="wrapper-content d-flex flex-column">
                    {transactionHistory.data?.map((item) => {
                        return (item.from_user_id === data[0].id ? 
                            <Card key={item.id}
                            profile_picture={item.profile_picture}
                            transaction_name={item.first_name}
                            transaction_subject={item.transaction_type}
                            transaction_amount={`- ${item.amount}`}
                            amount_color={'red'}
                        />
                        :
                        <Card key={item.id}
                            profile_picture={item.profile_picture}
                            transaction_name={item.first_name}
                            transaction_subject={item.transaction_type}
                            transaction_amount={`+ ${item.amount}`}
                            amount_color={'green'}
                        />)
                    })}
                </div>
            </section>
        </Fragment>
    )
}

export default TransactionHistory