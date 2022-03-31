import React, { Fragment, useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../Components/Module/Header';
import Footer from '../../Components/Module/Footer';
import Sidebar from '../../Components/Module/Sidebar';

import {GetUserDetails} from '../../Redux/actions/main/userDetails'
import defaultPicture from '../../Assets/Images/default.jpg'
import './main.css'

const Main = () => {
    const handleLogout = () => {
        window.localStorage.clear();
    }
    return (
        <Fragment>
            <Header/>
                <main className='d-flex' style={{backgroundColor : '#FAFCFF'}}>
                    <Sidebar onClick={handleLogout} />
                    <Outlet />
                </main>
            <Footer />
        </Fragment>
    )
}

export default Main