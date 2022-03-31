import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

//components
import Bluebar from '../../../Components/Module/Bluebar';
import Chart from '../../../Components/Module/Chart';
import SummaryHistory from '../../../Components/Module/SummaryHistory';
import Card from '../../../Components/Module/Card';
import PinModal from '../../../Components/Module/Modal/PinModal';

//assets
import defaultPicture from '../../../Assets/Images/default.jpg'

import {GetUserDetails} from '../../../Redux/actions/main/userDetails'
import {GetTransactionHistory} from '../../../Redux/actions/main/transactionHistory'


const Home = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    const transactionHistory = useSelector((state) => state.GetTransactionHistory)
    console.log(userProfile)
    // window.location.reload(false)
    useEffect(() => {
        dispatch((GetUserDetails()))
        dispatch(GetTransactionHistory())
    }, [])
    console.log(data)
    return (
        <Fragment>
            <section className="dashboard home d-flex flex-column">
                <div className="dashboard-upper d-flex">
                    <Bluebar 
                        balance={ userProfile && userProfile.balance }
                        phone_number={userProfile ? userProfile.phone_number : 'loading..'}
                    />
                </div>
                <div className="dashboard-lower d-flex w-100">
                    <Chart 
                        income={userProfile ? userProfile.income : 'loading..'}
                        outcome={userProfile ? userProfile.outcome : 'loading..'}
                    />  
                    <SummaryHistory>
                        {   transactionHistory.data && 
                            transactionHistory.data?.map((item) => {
                            return (item.from_user_id === userProfile && userProfile.id ? 
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
                    </SummaryHistory>
                </div>
            </section>
        </Fragment>
    )
}

export default Home