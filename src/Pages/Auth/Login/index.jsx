import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import Input from '../../../Components/Base/Input';

const Login = () => {
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    const [hiddenPass, setHiddenPass] = useState(true)
    const [defaultHiddenPassIcon, setDefaultHiddenPassIcon] = useState('icon-eye fa-solid fa-eye-slash')
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }
    const handleHiddenPass = () => {
        if (hiddenPass) {
            setHiddenPass(false)
            setDefaultHiddenPassIcon('icon-eye fa-solid fa-eye')
        } else {
            setHiddenPass(true)
        }
    }
    return (
        <Fragment>
            <div className="login d-flex flex-column" style={{padding: '40px 50px'}}>
                <h1 className="auth-right-title mb-3">
                    Start Accessing Banking Needs<br />
                    With All Devices and All Platforms<br /> With 30.000+ Users
                </h1>
                <h2 className="auth-right-parag mb-3">
                    Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                </h2>
                <div className="input-form mt-3">
                    <Input className='form-search' 
                    icon='icon far fa-envelope'
                    onChange={handleChangeForm}
                    name="email"
                    value={form.email}
                    type="email"
                    placeholder="Enter Your e-mail"
                    />
                    {
                        hiddenPass === true ? (
                            <Input className='form-search' 
                            icon='icon-lock fas fa-lock'
                            secondIcon='icon-eye fa-solid fa-eye-slash'
                            secondIconOnClick={handleHiddenPass}
                            onChange={handleChangeForm}
                            name="password"
                            value={form.password}
                            type="password"
                            placeholder="Enter Your password"
                            />
                        ) : (
                            <Input className='form-search' 
                            icon='icon-lock fas fa-lock'
                            secondIcon={defaultHiddenPassIcon}
                            secondIconOnClick={handleHiddenPass}
                            onChange={handleChangeForm}
                            name="password"
                            value={form.password}
                            type="text"
                            placeholder="Enter Your password"
                            />
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Login