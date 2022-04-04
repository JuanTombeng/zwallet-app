import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

//components
import Input from '../../../Components/Base/Input';
import Button from '../../../Components/Base/Button'
import ErrorMessage from '../../../Components/Module/ErrorMessage/ErrorMessage';

//redux
import { PostLogin } from '../../../Redux/actions/auth/login';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    const [errorMessage, setErrorMessage] = useState('')
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
        dispatch(PostLogin(form, navigate, setErrorMessage))
    }
    return (
        <Fragment>
            <div className="login d-flex flex-column flex-fill my-auto px-5">
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
                    type="email"
                    placeholder="Enter Your e-mail"
                    />
                    {
                        hiddenPass ? (
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
                <div className="auth-forget-password d-flex justify-content-end py-4">
                    <Link className='link-decoration' to='/auth/reset-password'>
                        <p className="auth-forget-parag">
                            Forgot Password?
                        </p>
                    </Link>
                </div>
                <div className="auth-submision-area d-flex flex-column justify-content-center">
                    <Button className='auth-button-ready' value='Login' onClick={handleSubmit}></Button>
                    <p className="auth-label py-4">Don’t have an account? <Link className='link-decoration primary' to="/auth/signup" replace > Sign Up </Link></p>
                </div>
                {
                    errorMessage ? <ErrorMessage content={errorMessage}></ErrorMessage> : null
                }
            </div>
        </Fragment>
    )
}

export default Login