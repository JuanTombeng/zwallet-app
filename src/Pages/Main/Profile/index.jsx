import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {UserContext} from '../../../Context/userContext'

import defaultPicture from '../../../Assets/Images/default.jpg'
import editPen from '../../../Assets/Images/vector.svg'
import './Profile.css'

const Profile = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    return (
        <Fragment>
            {
                userProfile &&
                <section className="dashboard d-flex flex-column">
                    <div className="profile-header d-flex flex-column align-items-center justify-content-between">
                        <img src={userProfile.profile_picture} alt="" />
                        <div className="profile-edit d-flex">
                            <img src={editPen} alt=""/>
                            <p>Edit</p>
                        </div>
                        <h2>
                            {`${userProfile.first_name} ${userProfile.last_name}`}
                        </h2>
                        <p>
                            {userProfile.phone_number}
                        </p>
                    </div>
                    <div className="profile-menubar d-flex flex-column align-items-center justify-content-center">
                        <Link className='personal-information menubar-list d-flex flex-column justify-content-center' to='/main/personal-information' style={{textDecoration : 'none'}}>
                            <h2>Personal Information</h2>
                        </Link>
                        <Link className='change-password menubar-list d-flex flex-column justify-content-center' to='/main/change-password' style={{textDecoration : 'none'}}>
                            <h2>Change Password</h2>
                        </Link>
                        <Link className='change-pin menubar-list d-flex flex-column justify-content-center' to='/main/change-pin' style={{textDecoration : 'none'}}>
                            <h2>Change Pin</h2>
                        </Link>
                        <Link className='logout menubar-list d-flex flex-column justify-content-center' to='/auth/login' style={{textDecoration : 'none'}}>
                            <h2>Log Out</h2>
                        </Link>
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default Profile