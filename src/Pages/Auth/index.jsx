import React, { Fragment } from 'react'
import { Link, Outlet, Navigate } from 'react-router-dom';
import authImg from '../../Assets/Images/bg-app.svg'
import './auth.css'

const Auth = () => {
    return (
        <Fragment>
            <div className="container d-flex">
                <div className="auth-left">
                    <h2 className="auth-logo-title mb-2">
                        Zwallet
                    </h2>
                    <img className='img-fluid' src={authImg} width={450} alt="" />
                    <h2 className="auth-parag mb-3">
                        App that Covering Banking Needs.
                    </h2>
                    <p className="auth-subparag mb-2">
                        Zwallet is an application that focussing in banking needs for all users
                        in the world. Always updated and always following world trends.
                        5000+ users registered in Zwallet everyday with worldwide
                        users coverage.
                    </p>
                </div>
                <div className="auth-right d-flex flex-fill">
                    <Outlet />
                </div>
            </div>
        </Fragment>
    )
}

export default Auth