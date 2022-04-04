import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {PutUserPassword} from '../../../Redux/actions/main/changePassword'

import Input from '../../../Components/Base/Input/'
import Button from '../../../Components/Base/Button'
import ErrorMessage from '../../../Components/Module/ErrorMessage/ErrorMessage';

import defaultPicture from '../../../Assets/Images/default.jpg'
import editPen from '../../../Assets/Images/vector.svg'
import './Profile.css'

const ChangePassword = () => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState('')
    const userProfile = useSelector((state) => state.GetUserDetails)
    const [hiddenCurrentPass, setHiddenCurrentPass] = useState(true)
    const [hiddenNewPass, setHiddenNewPass] = useState(true)
    const [hiddenRepeatPass, setHiddenRepeatPass] = useState(true)
    const [defaultHiddenPassIcon, setDefaultHiddenPassIcon] = useState('icon-eye-change-password fa-solid fa-eye-slash')

    const handleCurrentHiddenPass = () => {
        if (hiddenCurrentPass) {
            setHiddenCurrentPass(false)
            setDefaultHiddenPassIcon('icon-eye-change-password active fa-solid fa-eye')
        } else {
            setHiddenCurrentPass(true)
        }
    }
    const handleNewHiddenPass = () => {
        if (hiddenNewPass) {
            setHiddenNewPass(false)
            setDefaultHiddenPassIcon('icon-eye-change-password active fa-solid fa-eye')
        } else {
            setHiddenNewPass(true)
        }
    }
    const handleRepeatHiddenPass = () => {
        if (hiddenRepeatPass) {
            setHiddenRepeatPass(false)
            setDefaultHiddenPassIcon('icon-eye-change-password active fa-solid fa-eye')
        } else {
            setHiddenRepeatPass(true)
        }
    }

    const [form, setForm] = useState({
        current_password : '',
        new_password : '',
        confirm_password : ''
    })
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        if (form.current_password.length === 0) {
            setErrorMessage('Current password cannot be empty.')
        } else if (form.new_password.length === 0) {
            setErrorMessage('New password cannot be empty.')
        } else if (form.confirm_password.length === 0) {
            setErrorMessage('Confirmation password cannot be empty.')
        }
        if (form.new_password === form.confirm_password) {
            console.log(form)
            dispatch(PutUserPassword(form, setErrorMessage))
            alert('Success change password.')
        }
    }
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column">
                <div className="profile-header d-flex flex-column h-25 justify-content-evenly">
                    <h3>Change Password</h3>
                    <p className='d-flex w-50 text-start'>You must enter your current password and then type your new password twice.</p>
                </div>
                <div className="profile-menubar d-flex flex-column align-items-center h-75">
                    <div className="d-flex w-50">
                        {
                            hiddenCurrentPass ? (
                                <>
                                    <Input className='change-password-form' 
                                    icon='icon-main-change-pass fas fa-lock'
                                    onChange={handleChangeForm}
                                    name="current_password"
                                    value={form.current_password}
                                    type="password"
                                    placeholder="Current Password"
                                    />
                                    <i className="icon-eye-change-password fa-solid fa-eye-slash" onClick={handleCurrentHiddenPass}></i>
                                </>
                            ) : (
                                <>
                                    <Input className='change-password-form' 
                                    icon='icon-main-change-pass fas fa-lock'
                                    onChange={handleChangeForm}
                                    name="current_password"
                                    value={form.current_password}
                                    type="text"
                                    placeholder="Current Password"
                                    />
                                    <i className={defaultHiddenPassIcon} onClick={handleCurrentHiddenPass}></i>
                                </>
                            )
                        }
                    </div>
                    <div className="d-flex  w-50">
                        {
                            hiddenNewPass ? (
                                <>
                                    <Input className='change-password-form' 
                                    icon='icon-main-change-pass fas fa-lock'
                                    onChange={handleChangeForm}
                                    name="new_password"
                                    value={form.new_password}
                                    type="password"
                                    placeholder="New Password"
                                    />
                                    <i className="icon-eye-change-password fa-solid fa-eye-slash" onClick={handleNewHiddenPass}></i>
                                </>
                            ) : (
                                <>
                                    <Input className='change-password-form' 
                                    icon='icon-main-change-pass fas fa-lock'
                                    onChange={handleChangeForm}
                                    name="new_password"
                                    value={form.new_password}
                                    type="text"
                                    placeholder="New Password"
                                    />
                                    <i className={defaultHiddenPassIcon} onClick={handleNewHiddenPass}></i>
                                </>
                            )
                        }
                    </div>
                    <div className="d-flex  w-50">
                        {
                            hiddenRepeatPass ? (
                                <>
                                    <Input className='change-password-form' 
                                    icon='icon-main-change-pass fas fa-lock'
                                    onChange={handleChangeForm}
                                    name="confirm_password"
                                    value={form.confirm_password}
                                    type="password"
                                    placeholder="Confirmation Password"
                                    />
                                    <i className="icon-eye-change-password fa-solid fa-eye-slash" onClick={handleRepeatHiddenPass}></i>
                                </>
                            ) : (
                                <>
                                    <Input className='change-password-form' 
                                    icon='icon-main-change-pass fas fa-lock'
                                    onChange={handleChangeForm}
                                    name="confirm_password"
                                    value={form.confirm_password}
                                    type="text"
                                    placeholder="Confirmation Password"
                                    />
                                    <i className={defaultHiddenPassIcon} onClick={handleRepeatHiddenPass}></i>
                                </>
                            )
                        }
                    </div>
                    <div className="d-flex">
                    {
                        errorMessage ? <ErrorMessage content={errorMessage}></ErrorMessage> : null
                    }
                    </div>
                    <div className="d-flex flex-fill w-50 align-items-end">
                        <Button className='auth-button-ready' value='Change Password' onClick={handleSubmit}></Button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ChangePassword