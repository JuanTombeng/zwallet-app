import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {PostProfilePicture} from '../../../Redux/actions/main/uploadProfile'
import ProfileModal from '../../../Components/Module/Modal/ProfileModal';
import SuccessModal from '../../../Components/Module/Modal/SuccessModel';
import defaultPicture from '../../../Assets/Images/default.jpg'
import editPen from '../../../Assets/Images/vector.svg'
import './Profile.css'

const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector((state) => state.UserDetails)
    const [errorMessage, setErrorMessage] = useState('')
    const [modal, setModal] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [uploadErrorMessage, setUploadErrorMessage] = useState('')
    const [profilePicture, setProfilePicture] = useState(null)
    const userProfile = data[0]

    const handleModal = () => {
        setModal(!modal)
    }

    const handleProfilePicture = (childData) => {
        setProfilePicture(childData)
    }

    const handleSubmitProfilePicture = (e) => {
        e.preventDefault()
        const profilePictureData = new FormData()
        profilePictureData.append('profile_picture', profilePicture)
        for (let pair of profilePictureData.entries()) {
            if (pair[1] === 'undefined' || pair[1] === null) {
                setUploadErrorMessage('Upload new profile picture, or please close the window')
            } else {
                dispatch(PostProfilePicture(profilePictureData, setErrorMessage, setSuccessModal))
            }
        }
    }

    const handleSubmitSuccess = () => {
        navigate('/main/home')
    }
    return (
        <Fragment>
            {
                userProfile &&
                <section className="dashboard d-flex flex-column">
                    <div className="profile-header d-flex flex-column align-items-center justify-content-between">
                        <img src={userProfile ? userProfile.profile_picture : defaultPicture} alt="" />
                        <div className="profile-edit d-flex" onClick={handleModal} >
                            <img src={editPen} alt="" />
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
                            <h2>Change PIN</h2>
                        </Link>
                        <Link className='logout menubar-list d-flex flex-column justify-content-center' to='/auth/login' style={{textDecoration : 'none'}}>
                            <h2>Log Out</h2>
                        </Link>
                    </div>
                    {
                        modal ? (
                            <ProfileModal closeModal={handleModal} modalTitle={'Upload Profile Picture'} modalSubtitle={'Picture can be only .png, .jpg and .jpeg format allowed'}
                            handleSubmit={handleSubmitProfilePicture} parentCallback={handleProfilePicture} resetImage={() => {
                                setProfilePicture(userProfile && userProfile.profilePicture)
                            }} uploadErrorMessage={uploadErrorMessage ? uploadErrorMessage : ''} errorMessage={errorMessage}>
                                <div className="profile-input-wrapper d-flex flex-column justify-content-center">
                                    {
                                        profilePicture ? <img className='profile-pict-preview' src={URL.createObjectURL(profilePicture)}/> : userProfile && <img className='profile-pict-preview' src={userProfile.profile_picture} />
                                    }
                                </div>
                            </ProfileModal>
                        ) : (
                            null
                        )
                    } 
                    {
                        successModal ? (
                            <SuccessModal modalTitle={'Success!'} modalSubtitle='New Profile Change.'
                            handleSubmit={handleSubmitSuccess} >
                                <div className="d-flex">
                                    
                                </div>
                            </SuccessModal>
                        ) : null
                    }
                </section>
            }
        </Fragment>
    )
}

export default Profile