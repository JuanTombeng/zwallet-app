import React, { Fragment } from 'react';
import './Card.css'
import defaultPicture from '../../../Assets/Images/default.jpg'

const Card = (props) => {
    return (
        <Fragment>
            <div className="cards d-flex flex-row" onClick={props.onClick}>
                <div className="card-profile-picture d-flex justify-content-center">
                    <img className='card-profile-round' src={props.profile_picture} alt="" />
                </div>
                <div className="d-flex flex-column card-text-area text-black">
                    <h3 className="transaction-name">
                        {props.transaction_name}
                    </h3>
                    <p className="transaction-subject">
                        {props.transaction_subject}
                    </p>
                </div>
                <div className="card-amount-area text-black">
                    <h3 className={`transaction-amount ${props.amount_color}`}>
                        {props.transaction_amount}
                    </h3>
                </div>
            </div>
        </Fragment>
    )
}

export default Card