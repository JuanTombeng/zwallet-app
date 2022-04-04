import React, { Fragment, useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {GetUserDetails} from '../../../Redux/actions/main/userDetails'

import './header.css'
import defaultPict from '../../../Assets/Images/default.jpg'
import bell from '../../../Assets/Images/bell.png'

const Header = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    useEffect(() => {
        dispatch(GetUserDetails())
    }, [])
    console.log(userProfile + 'dari header')
    return (
        <Fragment>
            <header className="header d-flex">
                <div className="header-left w-50 d-flex flex-fill align-items-center">
                    <div className="header-title">
                        Zwallet
                    </div>
                </div>
                <div className="header-right w-50 d-flex">
                    <div className="header-user-profile d-flex flex-fill justify-content-end align-items-center text-center">
                        <img className="img-fluid" src={userProfile ? userProfile.profile_picture === null ? defaultPict : userProfile.profile_picture : defaultPict} width={50}  alt="" />
                        <div className="user-profile-middle mx-3">
                            <p className="header-profile-name">
                                {`${userProfile ? userProfile.first_name : 'First'} ${userProfile? userProfile.last_name : 'Last Name'}`}
                            </p>
                            <p className="header-phone-number">
                                {userProfile ? userProfile.phone_number : `Phone Number`}
                            </p>
                        </div>
                            <img src={bell} width={25} alt="" />
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header