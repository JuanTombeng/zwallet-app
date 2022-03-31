import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Welcome.css'

const Welcome = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState(0)
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        axios({
            baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            method : 'GET',
            url : '/v2/users/details',
            headers : {'Authorization': `Bearer ${token}`}
        }).then((res) => {
            const data = res.data?.data
            setUser(data[0])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    console.log(user)
    return (
        <Fragment>
            <div className="welcome-wrapper d-flex justify-content-center align-items-center">
                <div className="welcome-content d-flex flex-column animation-fade-in">
                    <div className="d-flex flex-column justify-content-evenly align-items-center w-100 h-50">
                        {
                            user && user.first_name && user.last_name ? (
                                <h2>Welcome back, {user.first_name} {user.last_name}!</h2>
                            ) : (
                                <h2>Welcome, {user && user.email}!</h2>
                            )
                        }
                        <h3>You have {notification && notification} notifications.</h3>
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100 h-50">
                        <button onClick={() => {
                                window.localStorage.removeItem('transfer-details');
                                navigate('/main/home')
                                window.location.reload(false)
                            }} className='transfer-input-button'>Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Welcome