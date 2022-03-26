import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

//components
import Bluebar from '../../../Components/Module/Bluebar';
import Chart from '../../../Components/Module/Chart';
import SummaryHistory from '../../../Components/Module/SummaryHistory';
import Card from '../../../Components/Module/Card';

//assets
import defaultPicture from '../../../Assets/Images/default.jpg'

const Home = () => {
    return (
        <Fragment>
            <section className="dashboard home d-flex flex-column">
                <div className="dashboard-upper d-flex">
                    <Bluebar />
                </div>
                <div className="dashboard-lower d-flex w-100">
                    <Chart />
                    <SummaryHistory>
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
                    </SummaryHistory>
                </div>
            </section>
        </Fragment>
    )
}

export default Home