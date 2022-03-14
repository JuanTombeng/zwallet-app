import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import Input from '../../../Components/Base/Input';
import Button from '../../../Components/Base/Button'

const Signup = () => {
    const [form, setForm] = useState({
        email : '',
        username : '',
        password : ''
    })
    const [hiddenPass, setHiddenPass] = useState(true)
    const [defaultHiddenPassIcon, setDefaultHiddenPassIcon] = useState('icon-eye fa-solid fa-eye-slash')
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleHiddenPass = () => {
        if (hiddenPass) {
            setHiddenPass(false)
            setDefaultHiddenPassIcon('icon-eye fa-solid fa-eye')
        } else {
            setHiddenPass(true)
        }
    }
    const handleSubmit = () => {
        console.log(form)
    }
    return (
        <Fragment>
            <div className="signup d-flex flex-column flex-fill my-auto px-5">
                <h1 className="auth-right-title mb-3">
                    Start Accessing Banking Needs<br />
                    With All Devices and All Platforms<br /> With 30.000+ Users
                </h1>
                <h2 className="auth-right-parag mb-3">
                    Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                </h2>
                <div className="input-form">
                    <Input className='form-search' 
                    icon='icon far fa-envelope'
                    onChange={handleChangeForm}
                    name="email"
                    value={form.email}
                    type="text"
                    placeholder="Enter Your Email"
                    />
                    <Input className='form-search' 
                    icon='icon-user fa-solid fa-user'
                    onChange={handleChangeForm}
                    name="username"
                    value={form.username}
                    type="text"
                    placeholder="Enter Your username"
                    />
                    {
                        hiddenPass === true ? (
                            <>
                                <Input className='form-search' 
                                icon='icon-auth-secondary fas fa-lock'
                                seconicon='icon-eye fa-solid fa-eye-slash'
                                onChange={handleChangeForm}
                                name="password"
                                value={form.password}
                                type="password"
                                placeholder="Enter Your password"
                                />
                                <i className="icon-eye fa-solid fa-eye-slash" onClick={handleHiddenPass}></i>
                            </>
                        ) : (
                            <>
                                <Input className='form-search' 
                                icon='icon-auth-secondary fas fa-lock'
                                onChange={handleChangeForm}
                                name="password"
                                value={form.password}
                                type="text"
                                placeholder="Enter Your password"
                                />
                                <i className={defaultHiddenPassIcon} onClick={handleHiddenPass}></i>
                            </>
                        )
                    }
                </div>
                <div className="auth-submision-area d-flex flex-column justify-content-center my-5">
                    <Button className='auth-button-ready' value='Sign Up' onClick={handleSubmit}></Button>
                    <p className="auth-label py-4">Already have an account? Let's <Link className='link-decoration primary' to="/auth/login" replace> Login </Link></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup