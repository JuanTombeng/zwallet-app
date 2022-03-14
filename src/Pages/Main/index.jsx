import React, { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Header from '../../Components/Module/Header';
import Footer from '../../Components/Module/Footer';
import Sidebar from '../../Components/Module/Sidebar';

import './main.css'

const Main = () => {
    return (
        <Fragment>
            <Header />
                <main className='d-flex'>
                    <Sidebar />
                    <div className="container-fluid d-flex h-auto">
                        <Outlet />
                    </div>
                </main>
            <Footer />
        </Fragment>
    )
}

export default Main