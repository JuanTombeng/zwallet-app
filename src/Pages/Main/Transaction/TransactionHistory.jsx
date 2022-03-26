import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Card from '../../../Components/Module/Card';

import defaultPicture from '../../../Assets/Images/default.jpg'

const TransactionHistory = () => {
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column">
                <div className="wrapper-head d-flex">
                    <h4 className="summary-history-title">
                        Transaction History
                    </h4>
                </div>
                <div className="wrapper-content d-flex flex-column">
                    <Card 
                        profilePicture={defaultPicture}
                    />
                    <Card 
                        profilePicture={defaultPicture}
                    />
                    <Card 
                        profilePicture={defaultPicture}
                    />
                    <Card 
                        profilePicture={defaultPicture}
                    />
                    <Card 
                        profilePicture={defaultPicture}
                    />
                    <Card 
                        profilePicture={defaultPicture}
                    />
                    <Card 
                        profilePicture={defaultPicture}
                    />
                </div>
            </section>
        </Fragment>
    )
}

export default TransactionHistory