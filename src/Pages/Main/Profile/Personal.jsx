import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import defaultPicture from '../../../Assets/Images/default.jpg'
import editPen from '../../../Assets/Images/vector.svg'
import './Profile.css'

const Personal = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.UserDetails)
    const userProfile = data[0]
    return (
        <Fragment>
            {
                userProfile && 
                <section className="dashboard d-flex flex-column">
                    <div className="profile-header d-flex flex-column h-25 justify-content-evenly">
                        <h3>Personal Information</h3>
                        <p className='d-flex w-50 text-start'>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                    </div>
                    <div className="profile-menubar d-flex flex-column justify-content-between h-75">
                        <div className="info d-flex flex-column justify-content-evenly">
                            <p>First Name</p>
                            <h2>{userProfile.first_name}</h2>
                        </div>
                        <div className="info d-flex flex-column justify-content-evenly">
                            <p>Last Name</p>
                            <h2>{userProfile.last_name}</h2>
                        </div>
                        <div className="info d-flex flex-column justify-content-evenly">
                            <p>Verified Email</p>
                            <h2>{userProfile.email}</h2>
                        </div>
                        <div className="info d-flex align-items-center justify-content-between">
                            <div className="d-flex flex-column">
                                <p>Phone Number</p>
                                <h2>{userProfile.phone_number}</h2>
                            </div>
                            <p className="manage-text">
                                Manage
                            </p>
                        </div>
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default Personal