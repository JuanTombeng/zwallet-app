import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Card from '../../../Components/Module/Card';
import Input from '../../../Components/Base/Input/'

import defaultPicture from '../../../Assets/Images/default.jpg'

const Transfer = () => {
    return (
        <Fragment>
            <section className="dashboard d-flex flex-column">
                <div className="wrapper-head d-flex flex-column">
                    <h4 className="summary-history-title">
                        Search Receiver
                    </h4>
                    <Input className='transfer-search' 
                    icon='icon-search fa-magnifying-glass'
                    // onChange={handleChangeForm}
                    name="receiver"
                    // value={form.email}
                    type="text"
                    placeholder="Search receiver here"
                    />
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

export default Transfer