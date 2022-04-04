import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import trashIcon from '../../../Assets/Images/trash-icon.svg'
import './Profile.css'

const ManagePhone = () => {
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
                        <div className="info d-flex align-items-center justify-content-between">
                            <div className="d-flex flex-column">
                                <p>Phone Number</p>
                                <h2>{userProfile.phone_number}</h2>
                            </div>
                            <Link to='/main/new-phone' style={{textDecoration : 'none'}}>
                                <img src={trashIcon} width={30} alt="" />
                            </Link>
                        </div>
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default ManagePhone