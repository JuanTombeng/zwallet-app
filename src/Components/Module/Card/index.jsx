import React, { Fragment } from 'react';

const Card = (props) => {
    return (
        <Fragment>
            <div className="cards d-flex flex-row">
                <div className="card-profile-picture d-flex justify-content-center">
                    <img src={props.profilePicture} alt="" />
                </div>
                <div className="card-text-area text-black">
                    1
                </div>
                <div className="card-amount-area text-black">
                    1
                </div>
            </div>
        </Fragment>
    )
}

export default Card