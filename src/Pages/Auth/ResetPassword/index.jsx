import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import Input from '../../../Components/Base/Input';
import Button from '../../../Components/Base/Button'

const ResetPassword = () => {
    const [form, setForm] = useState({
        email : ''
    })
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = () => {
        console.log(form)
    }
    return (
        <Fragment>
            <div className="reset-password d-flex flex-column flex-fill my-auto px-5">
                <h1 className="auth-right-title mb-3">
                Did You Forgot Your Password?
                Don’t Worry, You Can Reset Your
                Password In a Minutes.
                </h1>
                <h2 className="auth-right-parag mb-3">
                To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                </h2>
                <div className="input-form my-5">
                    <Input className='form-search' 
                    icon='icon far fa-envelope'
                    onChange={handleChangeForm}
                    name="email"
                    value={form.email}
                    type="text"
                    placeholder="Enter Your Email"
                    />
                </div>
                <div className="auth-submision-area d-flex flex-column justify-content-center my-5">
                    <Button className='auth-button-ready' value='Confirm' onClick={handleSubmit}></Button>
                </div>
            </div>
        </Fragment>
    )
}

export default ResetPassword